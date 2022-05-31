from math import perm
from rest_framework.response import Response
from .serializers import GymSerializer
from .models import Gym
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

@api_view(["GET"])
@permission_classes([AllowAny])
def gyms_list(request):
    gyms = Gym.objects.all()
    serializer = GymSerializer(gyms, many=True)
    return Response(serializer.data)
    