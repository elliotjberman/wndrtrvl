from django.contrib import admin
from .models import *

class TravelerAdmin(admin.ModelAdmin):
    pass

class TripAdmin(admin.ModelAdmin):
    pass

class DayAdmin(admin.ModelAdmin):
    pass

class DestinationAdmin(admin.ModelAdmin):
    pass

admin.site.register(Traveler, TravelerAdmin)
admin.site.register(Trip, TripAdmin)
admin.site.register(Day, DayAdmin)
admin.site.register(Destination, DestinationAdmin)
