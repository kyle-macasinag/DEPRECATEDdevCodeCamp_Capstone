from django.urls import path
from favorites import views

urlpatterns = [
    path("", views.create_favorite),
    path("/", views.get_favorites)
]
