from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class ClickerDetails(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null = True)
    coins = models.CharField(max_length=255)
    workers = models.CharField(max_length=255)