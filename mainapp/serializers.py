from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Category, Profile, Comments, Channel, Video


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class CreateProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"


class ProfileSerializer(serializers.ModelSerializer):
    user = User()

    class Meta:
        model = Profile
        fields = "__all__"


class CommentsSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = Comments
        fields = "__all__"


class CreateCommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = "__all__"


class CreateVideoSerializers(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = "__all__"




class CreateChannelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Channel
        fields = "__all__"


class ChannelSerializer(serializers.ModelSerializer):
    user = ProfileSerializer(read_only=True)

    class Meta:
        model = Channel
        fields = "__all__"


class VideoSerializers(serializers.ModelSerializer):
    comments = CommentsSerializer(many=True, read_only=True)
    channel = ChannelSerializer(read_only=True)
    category = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Video
        fields = "__all__"



class DetailVideoSerializers(serializers.ModelSerializer):

    class Meta:
        model = Video
        fields = "__all__"
