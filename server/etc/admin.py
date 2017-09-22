from django.contrib import admin
from .models import Notifications, Post
# Register your models here.
admin.site.register(Notifications)

class PostAdmin(admin.ModelAdmin):

    list_display = ('link', 'show')
    search_fields = ('show','message')

admin.site.register(Post, PostAdmin)