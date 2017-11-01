import os
import django
import requests
from datetime import datetime

os.environ.setdefault("DJANGO_SETTINGS_MODULE", 'kashiyatra.settings')
django.setup()

from users.views import addCaToSheet, addKYProfileToSheet
from users.models import KYProfile, CAProfile
'''
for kyprofile in KYProfile.objects.all().order_by('id'):
	print(kyprofile)
	try:
		ca = CAProfile.objects.get(kyprofile=kyprofile)
		response = addCaToSheet(kyprofile, ca)
		print(response.status_code)

	except Exception as e:
		print(e)
		print(kyprofile.ky_id, kyprofile.email)
'''
for kyprofile in KYProfile.objects.all().order_by('id'):
	print(kyprofile)
	try:
		response = addKYProfileToSheet(kyprofile)
		print(response.status_code)
	except Exception as e:
		print(e)
		print(kyprofile.ky_id, kyprofile.email)
