from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(["GET"])
def gyms_list(request):
    return Response("ok")