from django.urls import path
from favorites import views

urlpatterns = [
    path('', views.favorite_views),#GET, POST favorites (authenticated)

    path('<int:pk>/', views.favorite_delete)#Delete a favorite (authenticated)

]
