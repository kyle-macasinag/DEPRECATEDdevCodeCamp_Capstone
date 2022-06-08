from django.urls import path
from reviews import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.create_review),
    path('<gym_id>', views.get_reviews),
]
