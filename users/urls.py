from django.conf.urls import url
from django.contrib import admin
from django.contrib.auth.views import logout
from .views import *

urlpatterns = [
    url(r'^$', IndexView.as_view()),
    url(r'^ca-form/$', CaFormView),
    url(r'^dashboard/$', DashboardView, name="dashboard_url"),
    url(r'^ca-profile/$', CAProfileView),
    url(r'^leaderboard/$', LeaderBoardView),
    url(r'^notifications/$', NotificationsView),
    url(r'^privacy_policy/$', PrivacyPolicyView)

]
