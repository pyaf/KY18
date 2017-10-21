#Script to update points of CAs
#python -m scripts.updatepoints
import os
import django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", 'kashiyatra.settings')
django.setup()

from etc.models import *
from users.models import *

print('updating pr points \n\n')
for ca in CAProfile.objects.all():
	try:
		total_prs = PublicRelation.objects.filter(ca=ca).count()	
		point = Point.objects.get(ca=ca)
		point.pr_points = 10 * total_prs
		point.save()
		print(ca, 'done')
	except Exception as e:
		print(e)

print('reg points to be set zero\n\n')
for point in Point.objects.all():
	point.reg_points = 0
	point.save()

print('\nupdating reg points\n\n')
for kyprofile in KYProfile.objects.all():
	ca_id = kyprofile.referralCode
	print(ca_id)
	try:
		ca = CAProfile.objects.get(ca_id=ca_id)
		print(ca)
		point = Point.objects.get(ca=ca)
		point.reg_points += 30	
		point.save()
	except Exception as e:
		pass
