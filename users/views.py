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
        template_name = 'dashboard.html'
        return render(request, template_name, {})
    else:
        return redirect('/ca-form')


def PrivacyPolicyView(request):
    template_name = 'privacy_policy.html'
    return render(request, template_name, {})
