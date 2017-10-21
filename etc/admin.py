from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Notifications)
admin.site.register(PublicRelation)


class PostAdmin(admin.ModelAdmin):

    list_display = ('link', 'show')
    search_fields = ('show','message')

class PointAdmin(admin.ModelAdmin):

    list_display = ('ca', 'fb_points', 'pr_points', 'extra_points', 'total_points')
    search_fields = ('ca',)

admin.site.register(Point, PointAdmin)

admin.site.register(Post, PostAdmin)