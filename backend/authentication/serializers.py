from rest_framework.serializers import ValidationError
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from clicker_game.models import ClickerDetails, Upgrade

# Login Serializer
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username

        return token


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required = True, validators=[UniqueValidator(queryset=User.objects.all(), message={"error": "Email already exists."})])
    username = serializers.CharField(required = True, validators=[UniqueValidator(queryset=User.objects.all(), message={"error": "Username already exists."})])
    password = serializers.CharField(write_only=True, required=True)
    password2 = serializers.CharField(write_only=True, required=True)
    
    class InitStatsSerializer(serializers.ModelSerializer):
        
        class Meta:
            model = Upgrade
            fields = '__all__'
    
    init_stats = InitStatsSerializer()
    print(init_stats)
    
    class Meta:
        model = User
        fields = '__all__'

        
    def validate(self, pwd):
        """
        check if passwords match.
        """
        if pwd['password'] != pwd['password2']:
            raise ValidationError({"error":"Passwords must match!"})
        return pwd
        
    def create(self, validated_data):
        init_stats_data = validated_data.pop('init_stats')
        
        user = User(
            email=validated_data['email'],
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        
        
        
        user.set_password(validated_data['password'])
        user.save()
        
        account_init = ClickerDetails(user=user, clicks='0', coins='0', total_increment_by='0')
        account_init.save()

        # need to create upgrades and fiddle with the models
        # upgrades = Upgrade._meta.get_fields()
        # print(upgrades)
        
        # init_upgrade = Upgrade(
        #     clicker_details=user,
        #     upgrade_type=validated_data['upgrade_type'],
        #     cost=validated_data['cost'],
        #     value=validated_data['value'],
        #     auto_increment_by=validated_data['auto_increment_by'],
        # )
        # init_upgrade.save()
        
        return user
            
# Logout Serializer  
class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()
    
    
    def validate(self,attrs):
        # Saving the user's refresh token in a variable
        self.token = attrs['refresh']
        return attrs
    
    
    def save(self,**kwargs):
        try:
            # Blacklisting the refresh token
            RefreshToken(self.token).blacklist()
        except TokenError:
            raise ValidationError('Expired or invalid refresh token')