
from rest_framework import serializers
from clicker_game.models import ClickerDetails


class ClickerDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClickerDetails
        fields = '__all__'