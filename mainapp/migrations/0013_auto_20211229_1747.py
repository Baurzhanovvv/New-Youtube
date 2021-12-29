# Generated by Django 3.2.4 on 2021-12-29 11:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0012_auto_20211229_1740'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='channel',
            name='videos',
        ),
        migrations.AlterField(
            model_name='video',
            name='comments',
            field=models.ManyToManyField(blank=True, related_name='video_comment', to='mainapp.Comments'),
        ),
    ]
