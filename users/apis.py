import requests
from django.template.loader import get_template
from django.core.mail import EmailMultiAlternatives
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from .tokens import account_activation_token
from django.template import Context

def addCaToSheet(kyprofile,ca):

    data = {
            'ky_id': kyprofile.ky_id,
            'ca_id': ca.ca_id,
            'full_name': kyprofile.full_name,
            'email': kyprofile.email,
            'college': kyprofile.college,
            'year': kyprofile.year,
            'gender': kyprofile.gender,
            'mobile_number': kyprofile.mobile_number,
            'whatsapp_number': ca.whatsapp_number,
            'postal_address': ca.postal_address,
            'pincode': ca.pincode,
            'profile_link': kyprofile.profile_link,
            'reason': ca.reason,
    }

    url = 'https://script.google.com/macros/s/AKfycbwd3siEIr23TLoafEoG3z43TfYRh9BAc-JzmOlXmkVkvAyBHzE4/exec'

    response = requests.post(url, data=data)

    return response

def addKYProfileToSheet(kyprofile):

    data = {
            'ky_id': kyprofile.ky_id,
            'has_ca_profile': kyprofile.has_ca_profile,
            'referralCode': kyprofile.referralCode,
            'full_name': kyprofile.full_name,
            'email': kyprofile.email,
            'college': kyprofile.college,
            'year': kyprofile.year,
            'gender': kyprofile.gender,
            'mobile_number': kyprofile.mobile_number,
            'profile_link': kyprofile.profile_link,
    }

    url = 'https://script.google.com/macros/s/AKfycby49G4fB7BNNXjvvLw-aPpUp3pefj5zY_LZcnYtdwyKtRJ7gbw/exec'

    return requests.post(url, data=data)


def send_email(subject, body, email):
    mail = EmailMultiAlternatives(
      subject = subject,
      body = body,
      from_email = "Kashiyatra Indian Institute of Technology BHU Varanasi<kashiyatra@iitbhu.ac.in>", #can't use commas 
      to = [email],
      reply_to = ["kashiyatra@iitbhu.ac.in"],
      # headers={"Reply-To": "kashiyatra@iitbhu.ac.in"}, #gives errors with reply to in headers

    )
    mail.send()
    return True

def regSuccessMail(kyprofile):
    subject = "CA Registration Successful at Kashiyatra"
    body = '''Hi %s,\n
            This is to inform you that you have successfully registered for Kashiyatra 2018.\n\n
            Regards\n
            Team KY\n''' %(kyprofile.full_name)

    email = kyprofile.email
    try:
        return send_email(subject, body, email)
    except Exception as e:
        print(e)

def send_reg_email(kyprofile, current_site):
    d = {
        'user':kyprofile, 
        'domain':current_site.domain,
        'uid': urlsafe_base64_encode(force_bytes(kyprofile.pk)),
        'token': account_activation_token.make_token(kyprofile),
    }
    
    text_content = render_to_string('acc_active_email1.txt',d)
    html_content     = render_to_string('acc_active_email.html',d)
     

   
    email = kyprofile.email
    subject = 'Kashiyatra Account confirmation'
    send_email1(subject, text_content, email,html_content)

def send_reset_pass(kyprofile, current_site):
    d = {
        'user':kyprofile, 
        'domain':current_site.domain,
        'uid': urlsafe_base64_encode(force_bytes(kyprofile.pk)),
        'token': account_activation_token.make_token(kyprofile),
    }
    
    text_content = render_to_string('acc_reset.txt',d)
    html_content     = render_to_string('acc_reset.html',d)
     

   
    email = kyprofile.email
    subject = 'Kashiyatra Account confirmation'
    send_email1(subject, text_content, email,html_content)

def send_email1(subject, body, email,html_content):
    
    
    mail = EmailMultiAlternatives(
      subject = subject,
      body = body,
      from_email = "Kashiyatra Indian Institute of Technology BHU Varanasi<kashiyatra@iitbhu.ac.in>", #can't use commas 
      to = [email],
      reply_to = ["kashiyatra@iitbhu.ac.in"],
      # headers={"Reply-To": "kashiyatra@iitbhu.ac.in"}, #gives errors with reply to in headers

    )
    mail.attach_alternative(html_content, "text/html")
    mail.send()
    return True