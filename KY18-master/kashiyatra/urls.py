from django.conf.urls import url, include
from django.contrib import admin
from django.views.defaults import page_not_found

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^account/email$',page_not_found, {'exception': Exception('Not Found')}),
    url(r'^account/', include('allauth.urls')),
    url(r'^', include('users.urls')),

]
