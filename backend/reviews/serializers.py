from rest_framework import serializers
from .models import Review
from authentication.models import User


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = ['id', 'text','user']
        depth = 1
