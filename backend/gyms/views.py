from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import GymSerializer
from .models import Gym

@api_view(["GET"])
def gyms_list(request):
    gyms = Gym.objects.all()
    serializer = GymSerializer(gyms, many=True)
    return Response(serializer.data)
    