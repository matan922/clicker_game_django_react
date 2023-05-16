from django.contrib import admin

from clicker_game.models import ClickerDetails, Cursor, Worker

# Register your models here.

admin.site.register(ClickerDetails)
admin.site.register(Worker)
admin.site.register(Cursor)