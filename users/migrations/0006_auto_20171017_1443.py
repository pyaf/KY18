# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-10-17 14:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_caprofile_reason'),
    ]

    operations = [
        migrations.AddField(
            model_name='kyprofile',
            name='profile_completed',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='kyprofile',
            name='gender',
            field=models.CharField(blank=True, choices=[(None, 'Gender'), ('male', 'Male'), ('female', 'Female'), ('other', 'Other')], default=None, max_length=10, null=True),
        ),
    ]
