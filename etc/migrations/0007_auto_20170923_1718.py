# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-09-23 17:18
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('etc', '0006_auto_20170923_1641'),
    ]

    operations = [
        migrations.RenameField(
            model_name='notifications',
            old_name='mark_read',
            new_name='read_by',
        ),
    ]