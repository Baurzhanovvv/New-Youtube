# Generated by Django 3.2.4 on 2021-12-29 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0010_auto_20211225_2030'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='comments',
            field=models.ManyToManyField(blank=True, to='mainapp.Comments'),
        ),
    ]
