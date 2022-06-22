from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from reviews.models import Review
from reviews.serializers import ReviewSerializer
from django.core.exceptions import ObjectDoesNotExist

# Create your views here.

# GET by video_id (unprotecte)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_reviews(request, video_id):
    try:
        reviews = Review.objects.filter(video_id=video_id)
    except ObjectDoesNotExist:
        return Response({"error": "No reviews exist with that gymId"})

    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)


# POST new review (protected)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_review(request):
    serializer = ReviewSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
