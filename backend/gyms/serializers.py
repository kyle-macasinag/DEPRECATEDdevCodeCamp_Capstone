from rest_framework import serializers
from .models import Gym, Member


class GymSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gym
        fields = ["id", "name", "address", "reviews"]
        depth = 1

