# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2018-01-08 10:23
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('etc', '0013_mobilenotification'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mobilenotification',
            old_name='img_url',
            new_name='image_url',
        ),
        migrations.RenameField(
            model_name='mobilenotification',
            old_name='redirect_link',
            new_name='link',
        ),
        migrations.AlterField(
            model_name='mobilenotification',
            name='timestamp',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]