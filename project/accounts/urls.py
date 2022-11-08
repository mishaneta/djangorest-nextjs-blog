from django.urls import path, include
from accounts import views

urlpatterns = [
    path("google/", views.GoogleLoginView.as_view(), name="google")
]


