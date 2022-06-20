from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from favorites.models import Favorite
from favorites.serializers import FavoriteSerializer
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
# Create your views here.


#POST new favorite (protected)

@api_view(["GET"])
@permission_classes([AllowAny])
def get_favorites(request):
    if request.method == "GET":
        favorite = Favorite.objects.all()
        serializer = FavoriteSerializer(favorite, many=True)

        return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_favorite(request):
    serializer = FavoriteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)