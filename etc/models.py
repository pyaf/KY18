from django.db import models
from users.models import CAProfile
from collections import defaultdict
from django.utils import timezone
# Create your models here.

class Notifications(models.Model):
	main_text = models.CharField(max_length=2000)
	users = models.ManyToManyField(CAProfile)
	read_notify = defaultdict(lambda: False)
	recieved_date = models.DateTimeField(default=timezone.now)
	read_date = models.DateTimeField(blank=True, null=True)

	def read(self):
		self.read_date = timezone.now()
		self.save()

	def __str__(self):
		return self.main_text

class Post(models.Model):
	message = models.TextField(null=True, blank=True)
	created_time = models.DateTimeField(null=True, blank=True)
	pid = models.CharField(max_length=100, unique=True)#post id
	link = models.URLField(null=True, blank=True)
	full_picture = models.URLField(null=True, blank=True)
	picture = models.URLField(null=True, blank=True)

	def __str__(self):
		return str(self.link)
