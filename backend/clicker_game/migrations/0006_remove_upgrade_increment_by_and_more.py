# Generated by Django 4.1.7 on 2023-05-18 16:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clicker_game', '0005_upgrade_remove_worker_clicker_details_delete_cursor_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='upgrade',
            name='increment_by',
        ),
        migrations.AddField(
            model_name='upgrade',
            name='auto_increment_by',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
