from django.conf.urls import url, include
from django.contrib import admin
from .views import *

urlpatterns = [
    url(r'^$', IndexView.as_view()),
    url(r'^ca-form/$', CaFormView),
    url(r'^dashboard', DashboardView, name="ca-dashboard"),
    url(r'^ca-guidlines/$', GuidlinesView, name="ca-guidlines"),
    url(r'^ca-profile/', CAProfileUpdateView, name="ca-profile"),
    url(r'^leaderboard/$', LeaderBoardView, name="ca-leaderboard"),
    url(r'^notifications/$', NotificationsView, name="ca-notifications"),
    url(r'^privacy_policy/$', PrivacyPolicyView,),

]
