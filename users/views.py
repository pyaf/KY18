from django.shortcuts import render, HttpResponse, redirect
from django.views.generic import TemplateView, FormView
from django.views import View
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.contrib.messages.views import SuccessMessageMixin
from django.contrib import messages
import json
from users.models import KYProfile

class IndexView(TemplateView):
    template_name = 'index.html'


def DashboardView(request):
    pass
