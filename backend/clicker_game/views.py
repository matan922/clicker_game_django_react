from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from clicker_game.models import ClickerDetails
from clicker_game.serializers import ClickerDetailsSerializer

# Create your views here.


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def click(request):
    serializer = ClickerDetailsSerializer(data = request.data, context={"user": request.user})
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_account_data(request):
    account_data = ClickerDetails.objects.filter(user = request.user)
    print(request.user)
    serializer = ClickerDetailsSerializer(account_data, many=True, context={"user": request.user})
    return Response(serializer.data)