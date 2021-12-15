from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class Category(models.Model):
    title = models.CharField(max_length=100)
    desc = models.TextField()
    pics = models.ImageField(upload_to='category_image/')
    url = models.SlugField(unique=True)

    def __str__(self):
        return f"Название: {self.title}, url: {self.url}"


class Profile(models.Model):
    user = User()

    def __str__(self):
        return f"User: {self.user.username}"


class Comments(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    text = models.TextField()
    date = models.DateField(auto_created=True)

    def __str__(self):
        return f"profile: {self.profile.user.username}"


class Video(models.Model):
    channel = models.ForeignKey('Channel', on_delete=models.CASCADE)
    file = models.FileField()

    def __str__(self):
        return self.channel


class Channel(models.Model):
    title = models.CharField(max_length=100)
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    img = models.ImageField(upload_to='channel_image/')
    desc = models.TextField()
    like = models.SmallIntegerField()
    dislike = models.SmallIntegerField()
    show_comment = models.BooleanField(default=True)

    if show_comment:
        comments = models.ManyToManyField(Comments, related_name="channel_post", blank=True)

    is_creator = models.BooleanField(default=False)

    def __str__(self):
        return f"title: {self.title}, is creator: {self.is_creator}"
