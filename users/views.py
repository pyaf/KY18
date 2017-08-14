from django.shortcuts import render, HttpResponse, redirect
from django.views.generic import TemplateView, FormView
from django.views import View
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.contrib.messages.views import SuccessMessageMixin
from django.contrib import messages
import json
from users.models import *
from allauth.socialaccount.models import SocialToken
import urllib2

class IndexView(TemplateView):
    template_name = 'index.html'


@login_required(login_url="/login")
def CaFormView(request):
    template_name='ca-form.html'
    kyprofile = request.user
    if request.method == 'POST':
        post = request.POST
        collegeName = post.get('college', None)
        year = post.get('year', None)
        whatsapp_number = post.get('whatsapp_number', None)
        postal_address = post.get('postal_address', None)
        pincode = post.get('pincode', None)
        mobile_number = post.get('mobile_number', None)
        if collegeName and whatsapp_number and mobile_number and \
                                        postal_address and pincode and year:

            ca = CAProfile.objects.create(kyprofile=kyprofile,
                                    whatsapp_number=whatsapp_number,
                                    postal_address=postal_address,
                                    pincode=pincode,)

            college, created = College.objects.get_or_create(
                                            collegeName=collegeName)

            kyprofile.mobile_number = mobile_number
            kyprofile.college = college
            kyprofile.year = year
            kyprofile.has_ca_profile = True
            kyprofile.save()
            return redirect('/dashboard')
        else:
            return HttpResponse("Invalid form submission")#sth to be done
    else:
        context = {
        'email': kyprofile.email,
        'full_name': kyprofile.full_name,
        'all_colleges': College.objects.all(),
        }
        return render(request, template_name, context)


@login_required(login_url="/login")
def DashboardView(request):
    kyprofile = request.user
    print(kyprofile)
    if kyprofile.has_ca_profile:
        template_name = 'ca-dashboard/dashboard.html'
        return render(request, template_name, {})
    else:
        return redirect('/ca-form')

@login_required(login_url="/login")
def CAProfileView(request):
    kyprofile = request.user
    access_token = SocialToken.objects.get(account__user=request.user, account__provider='facebook')
    url = "https://graph.facebook.com/kashiyatra.IITBHU/posts?fields=full_picture,picture,link,message,created_time&limit=10&access_token=" + access_token.token
    response =  urllib2.urlopen(url)

    data = response.read()
    print(data)
    if kyprofile.has_ca_profile:
        template_name = 'ca-dashboard/user.html'
        return render(request, template_name, {})
    else:
        return redirect('/ca-form')


@login_required(login_url="/login")
def LeaderBoardView(request):
    kyprofile = request.user
    ca_profile_object = CAProfile.objects.get(kyprofile=request.user)

    data = {
        "email": kyprofile.email,
        "fullname": kyprofile.full_name,
        "year": kyprofile.year,
        "gender": kyprofile.gender,
        "college": kyprofile.college,
        "whatsapp_number": ca_profile_object.whatsapp_number,
        "pincode": ca_profile_object.pincode,
        "address": ca_profile_object.postal_address,

    }
    if request.method == 'POST':
        post = request.POST
        kyprofile.year = post.get('year', None)
        kyprofile.fullname = post.get('fullname', None)
        kyprofile.save()
        ca_profile_object.whatsapp_number = post.get('whatsapp_number', None)
        ca_profile_object.postal_address = post.get('address', None)
        ca_profile_object.pincode = post.get('pincode', None)
        ca_profile_object.save()

    if kyprofile.has_ca_profile:
        template_name = 'ca-dashboard/leaderboard.html'
        return render(request, template_name, {data})
    else:
        return redirect('/ca-form')


@login_required(login_url="/login")
def NotificationsView(request):
    kyprofile = request.user
    print(kyprofile)
    if kyprofile.has_ca_profile:
        template_name = 'ca-dashboard/notifications.html'
        return render(request, template_name, {})
    else:
        return redirect('/ca-form')


def PrivacyPolicyView(request):
    template_name = 'privacy_policy.html'
    return render(request, template_name, {})
