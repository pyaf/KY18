from datetime import date
from django.db import models
from django.contrib.auth.models import PermissionsMixin, AbstractUser
from django.contrib.auth.base_user import AbstractBaseUser
from django.db.models.signals import post_save
from django.dispatch import receiver

from allauth.socialaccount.models import SocialAccount
from .manager import UserManager

year_choices = [
        (None, 'Year'),
        (1, 'First'),
        (2, 'Second'),
        (3, 'Third'),
        (4, 'Fourth'),
        (5,'Fifth'),
    ]

gender_choices = [
        (None,'Gender'),
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other')
]

class College(models.Model):
    collegeName = models.CharField(max_length=250)
    regCount = models.IntegerField(default=0)

    def __str__(self):
        return '%s' % self.collegeName



class KYProfile(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=50, unique=True)
    full_name = models.CharField(max_length=130, null=True, blank=True)
    college = models.ForeignKey(College, null=True, blank=True)
    year = models.PositiveSmallIntegerField(choices=year_choices, null=True, blank=True)
    gender = models.CharField(max_length=10, choices=gender_choices, null=True, blank=True)
    mobile_number = models.BigIntegerField(null=True, blank=True)
    profile_picture = models.URLField(null=True, blank=True)
    has_ca_profile = models.BooleanField(default=False)
    ky_id = models.CharField(max_length=20, null=True, blank=True)
    referralCode = models.CharField(max_length=20, null=True, blank=True) #should be caId of some CA.
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'

    def get_short_name(self):
        return self.email

    def save(self, *args, **kwargs):
        if self.ky_id is None:
            try:
                temp = KYProfile.objects.all().order_by("-id")[0].id
                self.ky_id = 'KY%04d' % (temp + 101)
            except Exception as e:
                self.ky_id = 'KY%04d' % 101
        super(self.__class__, self).save(*args, **kwargs)

    def __str__(self):
        return "%s" %(self.ky_id)

#instance is socialaccount
def save_profile(sender, instance, **kwargs):
    print(instance)
    instance.kyprofile.full_name = instance.extra_data['name']
    instance.kyprofile.profile_picture = instance.get_avatar_url()
    instance.user.save()

post_save.connect(save_profile, sender=SocialAccount)

class CAProfile(models.Model):
    kyprofile = models.OneToOneField(KYProfile)
    regs = models.ManyToManyField(KYProfile, blank=True, related_name='regs')
    postal_address = models.TextField(null=True, blank=True)
    pincode = models.PositiveIntegerField(null=True, blank=True)
    whatsapp_number = models.BigIntegerField(blank=True)
    fb_link = models.CharField(max_length=300, null=True, blank=True)
    reg_num = models.PositiveIntegerField(default=0, null=True, blank=True) #no. of refered kyprofile.
    ca_id = models.CharField(max_length=20, null=True, blank=True)
    is_choosen = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if self.ca_id is None:
            try:
                temp = CAProfile.objects.all().order_by("-id")[0].id
                self.ca_id = 'KYCA%04d' % (temp + 101)
            except Exception as e:
                self.ca_id = 'KYCA%04d' % 101
        super(self.__class__, self).save(*args, **kwargs)


    def __str__(self):
        return "%s - %s" %(self.kyprofile.full_name, self.ca_id)
