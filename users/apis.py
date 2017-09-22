import requests
from django.core.mail import EmailMultiAlternatives

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
      from_email = "Kashiyatra <kashiyatra@iitbhu.ac.in>",
      to = [email],
      headers = {"Reply-To":"kashiyatra@iitbhu.ac.in"},
    )

    mail.send()
    return True

def regSuccessMail(kyprofile):
	subject = "Registration Successful at Kashiyatra"
	body = '''Hi %s,\n
				This is to inform you that you have successfully registered for Kashiyatra 2018.\n\n
				Regards\n
				Team KY\n''' %(kyprofile.full_name)

	email = kyprofile.email
	try:
		return send_email(subject, body, email)
	except:
	 	return False

