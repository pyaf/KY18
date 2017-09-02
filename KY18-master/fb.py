#Script to update Post objects.
import os
import django
import requests
from datetime import datetime
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "kashiyatra.settings")
django.setup()
from etc.models import Post
access_token = os.environ['AT']
url = "https://graph.facebook.com/kashiyatra.IITBHU/posts?fields=full_picture,picture,link,message,created_time&limit=10&access_token=" + access_token

response =  requests.get(url).json()
print('Got data\n')
for data in response['data']:
    try:
        created_time = datetime.strptime(data['created_time'].split('+')[0], '%Y-%m-%dT%H:%M:%S')
        pid = data['id']
        picture = data['picture']
        full_picture = data['full_picture']
        message = data['message']
        link = data['link']
        post, created = Post.objects.get_or_create(pid=pid)
        if created:
            post.message = message
            post.link = link
            post.picture = picture
            post.full_picture = full_picture
            post.created_time = created_time
            post.save()
            print('Created new post, id= %s' % pid)
        else:
            print('Post already in db\n')
    except Exception as e:
        print('Exception ', e)
