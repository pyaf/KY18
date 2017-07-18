from django.conf.urls import url
from django.contrib import admin
from django.contrib.auth.views import logout
from .views import *

urlpatterns = [
    url(r'^$', IndexView.as_view(), name="register_url"),
    url(r'^dashboard/$', DashboardView, name="dashboard_url"),

]
