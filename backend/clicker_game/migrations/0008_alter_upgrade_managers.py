# Generated by Django 4.1.7 on 2023-05-31 14:40

from django.db import migrations
import django.db.models.manager


class Migration(migrations.Migration):

    dependencies = [
        ('clicker_game', '0007_alter_upgrade_auto_increment_by_alter_upgrade_value'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='upgrade',
            managers=[
                ('upgrade_objects', django.db.models.manager.Manager()),
            ],
        ),
    ]