from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from clicker_game.models import ClickerDetails
from clicker_game.serializers import ClickerSerializer

# Create your views here.


@api_view(['POST'])
def click(request):
    serializer = ClickerSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
