from django.db import models
from authentication.models import User
# Create your models here.

class Favorite(models.Model):
    favorite = models.ForeignKey(User, related_name="favorite", on_delete=models.CASCADE)