from django.contrib import admin
from .models import Notifications, Post, PublicRelation
# Register your models here.
admin.site.register(Notifications)
admin.site.register(PublicRelation)

class PostAdmin(admin.ModelAdmin):

    list_display = ('link', 'show')
    search_fields = ('show','message')

admin.site.register(Post, PostAdmin)