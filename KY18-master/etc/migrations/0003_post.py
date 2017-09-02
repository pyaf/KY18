# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-08-13 18:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('etc', '0002_auto_20170813_1539'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.TextField(blank=True, null=True)),
                ('created_time', models.DateTimeField()),
                ('pid', models.CharField(max_length=100, unique=True)),
                ('link', models.URLField(blank=True, null=True)),
                ('full_picture', models.URLField(blank=True, null=True)),
                ('picture', models.URLField(blank=True, null=True)),
            ],
        ),
    ]
