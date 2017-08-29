from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth import logout
from django.views.generic import TemplateView, FormView
from django.views import View
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.contrib.messages.views import SuccessMessageMixin
from django.contrib import messages
import json

import requests
from allauth.socialaccount.models import SocialToken
from users.models import *
from etc.models import *
from django.utils import timezone


def addCaToSheet(kyprofile):
    data = {'id': kyprofile.ky_id,
            'name': kyprofile.full_name,
            'email': kyprofile.email,
            'college': kyprofile.college,
            'refCode': kyprofile.caprofile.ca_id,
            'year': kyprofile.year,
            'sex': kyprofile.gender,
            'mobileNumber': kyprofile.mobile_number}

    url = 'https://script.google.com/macros/s/AKfycbxUUHoa81jigbSdGtSl91qTdCJ0J__JA1HdqNq-VFAfuTtq4o01/exec'

    return requests.post(url, data=data)

def _getNotifications(kyprofile):
    notifications = Notifications.objects.filter(users=kyprofile.caprofile,
                                                recieved_date__lte=timezone.now())
    context = {
        'notifications': notifications.order_by('recieved_date'),
        'count': notifications.count(),
    }
    return context


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
        reason=post.get('reason', None)
        mobile_number = post.get('mobile_number', None)
        if collegeName and whatsapp_number and reason and mobile_number and \
                                        postal_address and pincode and year:

            ca, created = CAProfile.objects.get_or_create(kyprofile=kyprofile)
            if created:
                ca.whatsapp_number=whatsapp_number,
                ca.postal_address=postal_address,
                ca.pincode=pincode,
                ca.reason=reason 
		
                ca.save()

            welcome_note = Notifications.objects.all().order_by('id')[0]
            welcome_note.users.add(ca)
            welcome_note.save()
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

    if kyprofile.has_ca_profile:
        template_name = 'ca-dashboard/dashboard.html'
        context = _getNotifications(kyprofile)
        context['posts'] = Post.objects.all().order_by('-id')[:9]
        return render(request, template_name, context)
    else:
        return redirect('/ca-form')



@login_required(login_url="/login")
def CAProfileUpdateView(request):
    kyprofile = request.user
    ca_profile_object = CAProfile.objects.get(kyprofile=kyprofile)

    if request.method == 'POST':
        post = request.POST
        kyprofile.mobile_number = post.get('mobile_number', None)
        kyprofile.save()
        ca_profile_object.whatsapp_number = post.get('whatsapp_number', None)
        ca_profile_object.postal_address = post.get('address', None)

        ca_profile_object.pincode = post.get('pincode', None)
        ca_profile_object.save()

    context = {

        "email": kyprofile.email,
        "fullname": kyprofile.full_name,
        "year": kyprofile.year,
        "gender": kyprofile.gender,

        "mobile_number": kyprofile.mobile_number,

        "college": kyprofile.college,
        "whatsapp_number": ca_profile_object.whatsapp_number,
        "pincode": ca_profile_object.pincode,
        "address": ca_profile_object.postal_address,


    }

    if kyprofile.has_ca_profile:
        template_name = 'ca-dashboard/user.html'
        notices = _getNotifications(kyprofile)
        #new_context = context + notices
        new_context = context.copy()
        new_context.update(notices)
        return render(request, template_name, new_context)
    else:
        return redirect('/ca-form')


@login_required(login_url="/login")
def LeaderBoardView(request):
    kyprofile = request.user
    print(kyprofile)
    if kyprofile.has_ca_profile:
        template_name = 'ca-dashboard/leaderboard.html'

        context = _getNotifications(kyprofile)
        return render(request, template_name, context)
    else:
        return redirect('/ca-form')


@login_required(login_url="/login")
def NotificationsView(request):
    kyprofile = request.user
    print(kyprofile)
    if kyprofile.has_ca_profile:
        template_name = 'ca-dashboard/notifications.html'
        context = _getNotifications(kyprofile)
        return render(request, template_name, context)
    else:
        return redirect('/ca-form')

def PrivacyPolicyView(request):
    template_name = 'privacy_policy.html'
    return render(request, template_name, {})

@login_required(login_url="/login")
def point_count(request):
    
    ca_profile_object = CAProfile.objects.all()
    post_id_object=Post.objects.all()
    for ca_profile in ca_profile_object:
        points=ca_profile.points
        kyprofile = ca_profile.kyprofile
        access_token = SocialToken.objects.get(account__user=request.user, account__provider='facebook')
        
        for post in post_id_object:
            url = "https://graph.facebook.com/"+post.pid+"/?fields=comments.summary(true),likes.summary(true),shares.summary(true)&access_token=" + access_token.token
            # response = urllib2.urlopen(url)
            # post_data = json.load(response)
            response =  requests.get(url).json()
            if response['likes']['summary'].get('has_liked'):
                 points=int(points)+5;

        ca_profile.points=points
        ca_profile.save()
        template_name = 'ca-dashboard/dashboard.html'
        return render(request, template_name, {})

def LogoutView(request):
    logout(request)
    return redirect('/')

def update_post_model(request):
    kyprofile=request.user
    access_token = SocialToken.objects.get(account__user=kyprofile, account__provider='facebook')
    url="https://graph.facebook.com/kashiyatra.IITBHU/posts?fields=full_picture,picture,link,message,created_time&limit=10&access_token="+access_token.token
    response =  requests.get(url).json()
    for data in response['data']:
     try:
        created_time = datetime.strptime(data['created_time'].split('+')[0], '%Y-%m-%dT%H:%M:%S')
        pid = data['id']
        picture = data['picture']
        full_picture = data['full_picture']
        message = data['message']
        link = data['link']
        post, created = Post.objects.get_or_create(pid=pid)
        if created:
            post.message = message
            post.link = link
            post.picture = picture
            post.full_picture = full_picture
            post.created_time = created_time
            post.save()
            print('Created new post, id= %s' % pid)
        else:
            print('Post already in db\n')
     except Exception as e:
        print('Exception ', e)

     template_name = 'ca-dashboard/dashboard.html'

    context = _getNotifications(kyprofile)
    context['posts'] = Post.objects.all().order_by('-id')[:9]
    return render(request, template_name, context)