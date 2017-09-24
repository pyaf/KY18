from rest_framework import serializers
from users.models import KYProfile
from etc.models import Post, Notifications

# Serializers define the API representation.
class UserSerializer(serializers.ModelSerializer):
    ca_id = serializers.CharField(source='caprofile.ca_id', allow_blank=True)

    class Meta:
        model = KYProfile
        fields = ('ca_id', 'email', 'full_name', 'gender', 'profile_link',
        			'college', 'profile_picture')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('message', 'pid', 'link', 'full_picture', 'picture')


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notifications
        fields = ('text', 'recieved_date')
