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


from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from .forms import SignupForm
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from .tokens import account_activation_token
from django.contrib.auth.models import User
from django.core.mail import EmailMessage

import requests
from allauth.socialaccount.models import SocialToken
from users.models import *
from etc.models import *
from django.utils import timezone
from kashiyatra.settings import LOGIN_URL,LOGIN_URL_social,LOGIN_URL_email
from users.apis import *

def _getNotifications(kyprofile):
    notifications = Notifications.objects.filter(users=kyprofile.caprofile,
                                                recieved_date__lte=timezone.now())
    context = {
        'notifications': notifications.order_by('recieved_date'),
        'count': notifications.count(),
    }
    return context

class IndexView(TemplateView):
    template_name = 'register.html'
class RegisterView(TemplateView):
    template_name = 'register.html'

# def GuidlinesView(request):
#     template_name = 'ca-dashboard/guidlines.html'
#     return render(request, template_name, {})


@login_required(login_url=LOGIN_URL_social)
def CaFormView(request):#ca-form
    template_name='ca-form.html'
    kyprofile = request.user
    # print(request.method)
    if request.method == 'POST':
        post = request.POST
        collegeName = post.get('college', None)
        year = post.get('year', None)
        
        
        mobile_number = post.get('mobile_number', None)
        if collegeName and  mobile_number and year:
            # print(collegeName,whatsapp_number, postal_address, pincode, reason, mobile_number, pincode, year)
            ca, ca_created = CAProfile.objects.get_or_create(kyprofile=kyprofile)
            
           
            ca.save()
            college, created = College.objects.get_or_create(
                                            collegeName=collegeName)                                                

            kyprofile.mobile_number = mobile_number
            kyprofile.college = college
            kyprofile.year = year
            kyprofile.has_ca_profile = True
            kyprofile.save()
            try:
                if ca_created:
                    regSuccessMail(kyprofile)
                    addCaToSheet(kyprofile,ca)
                    welcome_note = Notifications.objects.all().order_by('id')[0]
                    welcome_note.users.add(ca)
                    welcome_note.save()
            except Exception as e:
                print(e)
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
def IncreaseRegs(ref):
    ca, ca_created = CAProfile.objects.get_or_create(ca_id=ref)

    ca.reg_num+=1
    ca.save()
    print("dan na done")





def regView(request):#ca-form
    template_name='email_reg.html'

    # print(request.method)
    if not request.user.is_authenticated():
        if request.method == 'POST':
            post = request.POST
            email = post.get('email', None)
            name = post.get('name', None)
            password = post.get('pass1', None)
            ref = post.get('ref', None)
            gender = post.get('gender', None)
            collegeName = post.get('college', None)
            year = post.get('year', None)
            profile_pic='https://storage.forums.net/6479407/images/vagmAzMznjBJGQf_sumV.png'
            form = SignupForm(request.POST)
            mobile_number = post.get('mobile_number', None)
            check_email=KYProfile.objects.filter(email=email)
            print(str(check_email), len(check_email))
            if not len(check_email):
                if collegeName and  mobile_number and year and name and password and email:
                    college, created = College.objects.get_or_create(
                                                    collegeName=collegeName)                                                
                    kyprofile = KYProfile.objects.create(email=email)
                    kyprofile.set_password(password)
                    kyprofile.mobile_number = mobile_number
                    kyprofile.full_name = name
                    kyprofile.email = email
                    kyprofile.gender = gender
                    kyprofile.profile_picture = profile_pic
                    kyprofile.is_active = False
                    kyprofile.college = college
                    kyprofile.year = year
                    IncreaseRegs(ref)
                    kyprofile.save()
                    print(kyprofile.is_active)
                    current_site = get_current_site(request)
                    message = render_to_string('acc_active_email.html', {
                        'user':kyprofile, 
                        'domain':current_site.domain,
                        'uid': urlsafe_base64_encode(force_bytes(kyprofile.pk)),
                        'token': account_activation_token.make_token(kyprofile),
                    })
                    print(message)
                    mail_subject = 'Activate your Kashiyatra account.'
                    to_email = email
                    email = EmailMessage(mail_subject, message, to=[to_email])
                    # email.send()
                    return HttpResponse('Please confirm your email address to complete the registration')

                else:
                    return HttpResponse("Invalid form submission")#sth to be done

            else:
                return HttpResponse("email already  in use!!!!!")#sth to be done

        else:
            return render(request, template_name)
    else :
        #return redirect('/dashboard')
        
        
        
        User_ = request.user
        #email = post.get('email', None)
        #print (post)
       # kyprofile = KYProfile.objects.create(email=email)
        if  User_.is_active :
            return redirect('/dashboard')
        else:
            return HttpResponse('Please confirm your email address to complete the registration')





def indexView_new(request):
    template_name='register.html'

    # print(request.method)
    if not request.user.is_authenticated():
        if request.method == 'POST':
            post = request.POST
            email = post.get('email', None)
            print(email)
            password = post.get('pass1', None)
            
            
            form = SignupForm(request.POST)
            
            
            if password and email:
                                             
                kyprofile = KYProfile.objects.get_or_create(email=email)
                kyprofile=authenticate(email=email,password=password)
                kyprofile.backend='django.contrib.auth.backends.ModelBackend'

                login(request,kyprofile)

                return redirect('/dashboard')

            else:
                return HttpResponse("Invalid form submission")#sth to be done

         #   sth to be done

        else:
            return render(request, template_name)
    else:
        return redirect('/dashboard')


@login_required(login_url=LOGIN_URL)
def DashboardView(request):
    kyprofile = request.user
    template_name = 'angular/index.html'
    if kyprofile.has_ca_profile:
        
        template_name = 'angular/index.html'
        # context = _getNotifications(kyprofile)
        # context['posts'] = Post.objects.filter(show=True).order_by('-id')[:9]

        return render(request, template_name, {})
    else:
        return render(request, template_name, {})
        #return redirect('/ca/ca-form')


# @login_required(login_url=LOGIN_URL)
# def CAProfileUpdateView(request):
#     kyprofile = request.user
#     ca_profile_object = CAProfile.objects.get(kyprofile=kyprofile)

#     if request.method == 'POST':
#         post = request.POST
#         kyprofile.mobile_number = post.get('mobile_number', None)
#         collegeName = post.get('college', None)
#         college, created = College.objects.get_or_create(
#                                             collegeName=collegeName)
#         kyprofile.college = college
#         kyprofile.save()
#         ca_profile_object.whatsapp_number = post.get('whatsapp_number', None)
#         ca_profile_object.postal_address = post.get('address', None)

#         ca_profile_object.pincode = post.get('pincode', None)
#         ca_profile_object.save()

#     context = {
#         "email": kyprofile.email,
#         "fullname": kyprofile.full_name,
#         "year": kyprofile.year,
#         "gender": kyprofile.gender,
#         "mobile_number": kyprofile.mobile_number,
#         "college": kyprofile.college,
#         "whatsapp_number": ca_profile_object.whatsapp_number,
#         "pincode": ca_profile_object.pincode,
#         "address": ca_profile_object.postal_address,

#     }

#     if kyprofile.has_ca_profile:
#         template_name = 'ca-dashboard/user.html'
#         notices = _getNotifications(kyprofile)
#         #new_context = context + notices
#         new_context = context.copy()
#         new_context.update(notices)
#         return render(request, template_name, new_context)
#     else:
#         return redirect('/ca/ca-form')

# @login_required(login_url=LOGIN_URL)
# def LeaderBoardView(request):
#     kyprofile = request.user
#     print(kyprofile)
#     if kyprofile.has_ca_profile:
#         template_name = 'ca-dashboard/leaderboard.html'
#         context = _getNotifications(kyprofile)
#         return render(request, template_name, context)
#     else:
#         return redirect('/ca/ca-form')


# @login_required(login_url=LOGIN_URL)
# def NotificationsView(request):
#     kyprofile = request.user
#     print(kyprofile)
#     if kyprofile.has_ca_profile:
#         template_name = 'ca-dashboard/notifications.html'
#         context = _getNotifications(kyprofile)
#         return render(request, template_name, context)
#     else:
#         return redirect('/ca/ca-form')

def PrivacyPolicyView(request):
    template_name = 'privacy_policy.html'
    return render(request, template_name, {})

def LogoutView(request):
    logout(request)
    return redirect('/')


def signup(request):
    if request.method == 'POST':
        post = request.POST
        email = post.get('email', None)
        form = SignupForm(request.POST)
        #print(form)
        if email:
            user = form.save(commit=False)
            user.is_active = False
            user.save()
            current_site = get_current_site(request)
            message = render_to_string('acc_active_email.html', {
                'user':user, 
                'domain':current_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': account_activation_token.make_token(user),
            })
            mail_subject = 'Activate your blog account.'
            to_email = form.cleaned_data.get('email')
            email = EmailMessage(mail_subject, message, to=[to_email])
            email.send()
            return HttpResponse('Please confirm your email address to complete the registration')
    
    else:
        form = SignupForm()
    
    return render(request, 'signup.html', {'form': form})


def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = KYProfile.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist) as e:
        print(e)
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        user.backend = 'django.contrib.auth.backends.ModelBackend'
        login(request, user)
        # return redirect('home')
        return HttpResponse('Thank you for your email confirmation. Now you can login your account.')
    else:
        return HttpResponse('Activation link is invalid!')