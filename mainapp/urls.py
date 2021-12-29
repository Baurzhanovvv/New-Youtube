from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from . import views

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_view'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh_view'),
    path('logout/', views.Logout.as_view()),

    path('create/category', views.CreateCategoryView.as_view()),
    path('category/', views.CreateCategoryView.as_view()),

    path('create/profile', views.CreateProfileView.as_view()),
    path('profile/', views.CreateProfileView.as_view()),
    path('profile/<int:pk>/', views.DetailProfileView.as_view()),

    path('create/comment', views.CreateCommentView.as_view()),

    path('create/video', views.CreateVideoView.as_view()),
    path('video/', views.CreateVideoView.as_view()),
    path('video/<int:pk>/', views.DetailVideoView.as_view()),
    path('change/video/<int:pk>/', views.ChangeVideoView.as_view()),

    path('create/channel', views.CreateChannelView.as_view()),
    path('channel/', views.CreateChannelView.as_view()),
    path('channel/<int:pk>/', views.DetailChannelView.as_view()),
    path('change/channel/<int:pk>/', views.DetailChannelView.as_view())

]
