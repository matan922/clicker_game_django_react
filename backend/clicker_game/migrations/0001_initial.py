# Generated by Django 4.1.7 on 2023-05-16 15:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ClickerDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('clicks', models.CharField(max_length=255)),
                ('coins', models.CharField(max_length=255)),
                ('workers', models.CharField(max_length=255)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Worker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('workerCost', models.IntegerField()),
                ('value', models.IntegerField()),
                ('incrementBy', models.IntegerField()),
                ('clicker_details', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='clicker_game.clickerdetails')),
            ],
        ),
        migrations.CreateModel(
            name='Cursor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cursorCost', models.IntegerField()),
                ('value', models.IntegerField()),
                ('clicker_details', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='clicker_game.clickerdetails')),
            ],
        ),
    ]
