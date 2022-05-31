from django.db import models
from authentication.models import User

# Create your models here.


class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    gym_id = models.CharField(max_length=50)
    text = models.CharField(max_length=255)

