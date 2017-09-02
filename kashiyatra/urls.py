from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView
from django.views.defaults import page_not_found

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^account/social/signup/',TemplateView.as_view(template_name='ca-redirect.html')),
    url(r'^account/email$',page_not_found, {'exception': Exception('Not Found')}),
    url(r'^account/', include('allauth.urls')),
    url(r'^ca/', include('users.urls')),

]
