from django.conf.urls import url, include
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns

from API.views import *

router = routers.DefaultRouter()
router.include_format_suffixes = False
router.register(r'users', UserViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^current_user/$', current_user),
    url(r'^posts/$', posts),
    url(r'^notifications/$', notifications),

]

urlpatterns = format_suffix_patterns(urlpatterns)