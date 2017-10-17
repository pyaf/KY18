import requests
from django.core.mail import EmailMultiAlternatives
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from .tokens import account_activation_token

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

    url = 'https://script.google.com/macros/s/AKfycbyeu8AJ8Su8uwnvykOR_vzB9Rz49r05B2EKvgTKEFefpNeU4ik/exec'

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
    
    body = render_to_string('acc_active_email.html', {
        'user':kyprofile, 
        'domain':current_site.domain,
        'uid': urlsafe_base64_encode(force_bytes(kyprofile.pk)),
        'token': account_activation_token.make_token(kyprofile),
    }) + '\n KY Team'
    email = kyprofile.email
    subject = 'Kashiyatra Account confirmation'
    send_email(subject, body, email)
