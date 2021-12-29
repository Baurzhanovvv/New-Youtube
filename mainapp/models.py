from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class Category(models.Model):
    title = models.CharField(max_length=100)
    desc = models.TextField()
    pics = models.ImageField(upload_to='category_image/')

    def __str__(self):
        return f"Название: {self.title}"


class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    is_creator = models.BooleanField(default=False)

    def __str__(self):
        return f"User: {self.user}"


class Comments(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    text = models.TextField()
    date = models.DateField(auto_now=True)

    def __str__(self):
        return f"profile: {self.profile.user.username}"


class Video(models.Model):
    title = models.CharField(max_length=100, null=True)
    desc = models.TextField(null=True)
    file = models.FileField()
    date = models.DateField(auto_now=True)
    logo = models.ImageField(upload_to="video_logo/", null=True)
    like = models.SmallIntegerField(null=True)
    dislike = models.SmallIntegerField(null=True)
    channel = models.ForeignKey("Channel", on_delete=models.CASCADE, null=True)
    category = models.ManyToManyField(Category, blank=True)
    comments = models.ManyToManyField(Comments, related_name="video_comment", blank=True)

    def __str__(self):
        return self.title


class Channel(models.Model):
    title = models.CharField(max_length=100)
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    img = models.ImageField(upload_to='channel_image/')
    desc = models.TextField()
    slug = models.SlugField(unique=True, null=True)

    def __str__(self):
        return f"title: {self.title}"
