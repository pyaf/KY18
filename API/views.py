from django.shortcuts import render
from django.contrib.auth.models import User, Group
from django.db.models import Q
from django.views.decorators.csrf import csrf_exempt

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import permissions
import json

from API.serializers import *
from users.models import KYProfile
from etc.models import *
from itertools import chain

class UserViewSet(viewsets.ModelViewSet):
	permission_classes = (permissions.IsAdminUser,)
	queryset = KYProfile.objects.all()
	serializer_class = UserSerializer

class publicRelationsView(APIView):
	def get(self, request, format=None):
		ca = request.user.caprofile
		prs = PublicRelation.objects.filter(ca=ca)
		serializer = PublicRelationSerializer(prs, many=True)
		return Response(serializer.data)

	def post(self, request, format=None):
		serializer = PublicRelationSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save(ca=request.user.caprofile)
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def current_user(request, format=None):
	serializer = UserSerializer(request.user)
	return Response(serializer.data)


@api_view(['GET'])
def leaderboard(request, format=None):
	top_points = Point.objects.all().order_by('-total_points')[:10]
	response = PointSerializer(top_points, many=True)
	return Response(response.data)

@api_view(['GET'])
def posts(request):
	posts = Post.objects.filter(show=True).order_by('-created_time')
	serializer = PostSerializer(posts, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def notifications(request):
	ca = request.user.caprofile
	usersnotices = Notifications.objects.filter(users=ca)
	unread = usersnotices.exclude(read_by=ca).order_by('-id')[:5]
	read = usersnotices.filter(read_by=ca).order_by('-id')
	unread_data = NotificationSerializer(unread, many=True).data
	read_data = NotificationSerializer(read[:(5 -len(unread))], many=True).data
	data = {
		'read': read_data,
		'unread': unread_data
	}
	return Response(data)

@api_view(['GET'])
def CAProfileUpdate(request):
	user = UserSerializer(request.user)
	ca = CASerializer(request.user.caprofile)
	data = {
		'user': user.data,
		'ca': ca.data
	}
	return Response(data)

@api_view(['GET'])
def all_notifications(request):
	ca = request.user.caprofile
	notices = Notifications.objects.filter(users=ca).order_by('-id')
	notices = NotificationSerializer(notices, many=True)
	return Response(notices.data)


@api_view(['POST'])
def updateCAUser(request):
	try:
		post = request.data
		kyprofile = request.user
		kyprofile.mobile_number = post.get('mobile_number', 0)
		kyprofile.save()
		ca = kyprofile.caprofile
		ca.whatsapp_number = post.get('whatsapp_number', 0)
		ca.postal_address = post.get('postal_address', '')
		ca.pincode = post.get('pincode', 0)
		ca.save()
		return Response(status=status.HTTP_200_OK)
	except Exception as e:
		return Response(e)

