from .serializers import LogoutSerializer, MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User



# Login class.
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
    


# Registration of a new user.
@api_view(['POST'])
def registration_form(request):
    serializer = RegisterSerializer(data = request.data)
    print(serializer)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Logout of a user.
@api_view(['POST'])
def logout(request):
    serializer = LogoutSerializer(data = request.data)
    print(serializer)
    if serializer.is_valid():
        serializer.save()  
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

