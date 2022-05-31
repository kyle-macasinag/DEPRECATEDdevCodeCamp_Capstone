from tkinter import CASCADE
from django.db import models
from authentication.models import User
# Create your models here.

class Gym(models.Model):
    name = models.CharField(max_length=255)
    address = models.ForeignKey(User, related_name = "address", on_delete=models.CASCADE)
    reviews = models.ForeignKey(User, related_name = "review", on_delete=models.CASCADE)