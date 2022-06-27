from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

from user_reviews.serializers import ReviewSerializer
from .models import Review
from favorites.serializers import FavoriteSerializer
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
# Create your views here.


#POST new review (Protected)

@api_view(["GET"])
@permission_classes([AllowAny])
def get_reviews(request):
    if request.method == "GET":
        review = Review.objects.all()
        serializer = ReviewSerializer(review, many=True)

        return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_review(request):
    serializer = ReviewSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
