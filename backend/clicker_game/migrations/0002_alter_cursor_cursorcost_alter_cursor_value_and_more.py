# Generated by Django 4.1.7 on 2023-05-16 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clicker_game', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cursor',
            name='cursorCost',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='cursor',
            name='value',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='worker',
            name='incrementBy',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='worker',
            name='value',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='worker',
            name='workerCost',
            field=models.CharField(max_length=255),
        ),
    ]
