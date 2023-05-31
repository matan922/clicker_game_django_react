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
    
# Custom manager to instantiate user's upgrades upon account creation.
class UpgradeManager(models.Manager):
    def initialize_upgrades(self, clicker_details):
        # Create initial data for each upgrade.
        upgrade_initial_data = {
            'worker': {'cost': '15', 'value': '0'},
            'cursor': {'cost': '10', 'value': '1'},
        }
        
        # Save the account with the initialized data.
        for upgrade_type, initial_data in upgrade_initial_data.items():
            self.create(
                clicker_details=clicker_details,
                upgrade_type=upgrade_type,
                cost=initial_data['cost'],
                value=initial_data['value'],
                auto_increment_by='0'
            )


class Upgrade(models.Model):
    UPGRADE_TYPES = (
        ('worker','Worker'),
        ('cursor', 'Cursor'),
    )
    
    clicker_details = models.ForeignKey(ClickerDetails, on_delete=models.CASCADE)
    upgrade_type = models.CharField(max_length=255, choices=UPGRADE_TYPES)
    cost = models.CharField(max_length=255)
    value = models.CharField(max_length=255, default=0)
    auto_increment_by = models.CharField(max_length=255, null=True, default=0)
    
    objects = UpgradeManager()
    
    def __str__(self):
        return self.upgrade_type
