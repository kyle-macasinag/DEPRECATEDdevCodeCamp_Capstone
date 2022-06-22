from django.db import models
from authentication.models import User
# Create your models here.

class Favorite(models.Model):
    favorite = models.CharField(max_length=255)