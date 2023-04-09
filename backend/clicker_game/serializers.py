
from rest_framework import serializers
from clicker_game.models import ClickerDetails


class ClickerDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClickerDetails
        fields = '__all__'
            
    def create(self, validated_data):
        user = self.context['user']
        validated_data['user'] = user
        clicker_details = ClickerDetails.objects.create(**validated_data)
        return clicker_details