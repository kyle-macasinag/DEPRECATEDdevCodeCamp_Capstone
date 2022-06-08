from django.db import models
from authentication.models import User

# Create your models here.

class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    gym_id = models.CharField(max_length=255)
    gym = models.CharField(max_length=255)
