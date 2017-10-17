from django.shortcuts import render, redirect
from .models import Notifications
from django.utils import timezone
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout


@login_required
def notification_list(request):
	notifications = Notifications.objects.filter(recieved_date__lte=timezone.now()).order_by('recieved_date')
	print(notifications)
	return render(request, 'etc/notifications.html',{'notifications':notifications})
