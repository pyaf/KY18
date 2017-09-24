from django.shortcuts import render
from django.contrib.auth.models import User, Group
from django.db.models import Q

from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import permissions

from API.serializers import *
from users.models import KYProfile
from etc.models import Post
from itertools import chain

class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAdminUser,)
    queryset = KYProfile.objects.all()
    serializer_class = UserSerializer


@api_view(['GET'])
def current_user(request, format=None):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

@api_view(['GET'])
def posts(request):
	posts = Post.objects.filter(show=True)
	serializer = PostSerializer(posts, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def notifications(request):
	ca = request.user.caprofile
	unread = Notifications.objects.exclude(read_by=ca).order_by('-id')[:5]
	read = Notifications.objects.filter(read_by=ca).order_by('-id')
	unread_data = NotificationSerializer(unread, many=True).data
	read_data = NotificationSerializer(read[:(5 -len(unread))], many=True).data
	data = {
		'read': read_data,
		'unread': unread_data
	}
	return Response(data)

