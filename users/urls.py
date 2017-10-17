from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth.views import logout
from .views import *
from . import views

urlpatterns = [
    url(r'^$', indexView_new),
   # url(r'^/register.html/$', IndexView.as_view()),
    url(r'^ca-form/$', CaFormView),
    url(r'^email_reg/$', regView),
    url(r'^dashboard', DashboardView, name="ca-dashboard"),
    #url(r'^email_reg/$', regView),

    # url(r'^ca-guidlines/$', GuidlinesView, name="ca-guidlines"),
    # url(r'^ca-profile/', CAProfileUpdateView, name="ca-profile"),
    # url(r'^leaderboard/$', LeaderBoardView, name="ca-leaderboard"),
    # url(r'^notifications/$', NotificationsView, name="ca-notifications"),
    url(r'^privacy_policy/$', PrivacyPolicyView,),
    #url(r'^$', views.home, name='home'),
    url(r'^signup/$', views.signup, name='signup'),
    url(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        views.activate, name='activate'),
    url(r'^logout/$', LogoutView)

]
