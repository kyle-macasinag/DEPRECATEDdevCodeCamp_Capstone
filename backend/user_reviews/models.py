from django.db import models
from authentication.models import User
# Create your models here.


class Review(models.Model):
    review = models.CharField(max_length=255)