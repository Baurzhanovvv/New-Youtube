from django.shortcuts import render

# Create your views here.
from rest_framework import status, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from mainapp.models import Category, Profile, Comments, Video, Channel
from mainapp.serializers import CategorySerializer, ProfileSerializer, CreateProfileSerializer, CommentsSerializer, \
    CreateCommentsSerializer, CreateVideoSerializers, VideoSerializers, CreateChannelSerializer, ChannelSerializer, DetailVideoSerializers


class IsUser(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj.user == request.user


class Logout(APIView):

    def get(self, request, format=None):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)


class CreateCategoryView(generics.ListCreateAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class CreateProfileView(generics.ListCreateAPIView):
    serializer_class = CreateProfileSerializer
    queryset = Profile.objects.all()


class DetailProfileView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CreateProfileSerializer
    queryset = Profile.objects.all()



class DetailCommentView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CommentsSerializer
    queryset = Comments.objects.all()


class CreateCommentView(generics.ListCreateAPIView):
    serializer_class = CreateCommentsSerializer
    queryset = Comments.objects.all()


class DetailVideoView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = VideoSerializers
    queryset = Video.objects.all()


class ChangeVideoView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = DetailVideoSerializers
    queryset = Video.objects.all()


class CreateVideoView(generics.ListCreateAPIView):
    serializer_class = CreateVideoSerializers
    queryset = Video.objects.all()

    def get_queryset(self):
        queryset = Video.objects.all()
        params = self.request.query_params

        category = params.get('category', None)
        channel = params.get('channel', None)
        title = params.get('title', None)
        except_id = params.get('except_id', None)

        if category:
            queryset = queryset.filter(category__id=category)

        if channel:
            queryset = queryset.filter(creator__id=channel)

        if title:
            queryset = queryset.filter(title__icontains=title)

        if except_id:
            queryset = queryset.exclude(id=except_id)

        return queryset


class DetailChannelView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ChannelSerializer
    queryset = Channel.objects.all()


class CreateChannelView(generics.ListCreateAPIView):
    serializer_class = CreateChannelSerializer
    queryset = Channel.objects.all()

    def get_queryset(self):
        queryset = Channel.objects.all()
        params = self.request.query_params

        channel = params.get('id', None)

        if channel:
            queryset = queryset.filter(channel__id=channel)

        return queryset

