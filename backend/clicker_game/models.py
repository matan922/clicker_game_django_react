from django.db import models
from django.contrib.auth.models import User
# from django.dispatch import receiver
# from django.db.models.signals import post_save

# Create your models here.


class ClickerDetails(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null = True)
    clicks = models.CharField(max_length=255)
    coins = models.CharField(max_length=255)
    total_increment_by = models.CharField(max_length=255)
    
    def __str__(self):
        return self.user.username
    
class Worker(models.Model):
    clicker_details = models.ForeignKey(ClickerDetails, on_delete=models.CASCADE)
    worker_cost = models.CharField(max_length=255)
    value = models.CharField(max_length=255)
    increment_by = models.CharField(max_length=255)

    def __str__(self):
        return "Worker"


class Cursor(models.Model):
    clicker_details = models.ForeignKey(ClickerDetails, on_delete=models.CASCADE)
    cursor_cost = models.CharField(max_length=255)
    value = models.CharField(max_length=255)

    def __str__(self):
        return "Cursor"

    
# @receiver(post_save, sender=User)
# def init_user_stats(sender, instance, created, **kwargs):
#     if created:
#         stats = ClickerDetails(coins="0", workers="0", user=instance)
#         stats.save()
