from rest_framework import serializers
from .models import Favorite
from authentication.models import User

class FavoriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Favorite
        fields = ["id", "favorite_id", "text"]