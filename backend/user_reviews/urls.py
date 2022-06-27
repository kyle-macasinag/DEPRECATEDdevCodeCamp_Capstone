from django.urls import path
from user_reviews import views

urlpatterns = [
    path("", views.create_review),
    path("/", views.get_reviews)
]