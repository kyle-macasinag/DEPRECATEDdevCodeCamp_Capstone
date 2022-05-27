from rest_framework import serializers
from .models import Gym


class GymSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gym
        fields = ["id", "name", "address_id", "reviews_id"]