from rest_framework import serializers
from .models import Favorite

class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = ["id", "user", "gym_id","gym"]
        depth = 1