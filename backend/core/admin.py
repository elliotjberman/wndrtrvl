from django.contrib import admin
from .models import *

class TravelerAdmin(admin.ModelAdmin):
    pass

class TripAdmin(admin.ModelAdmin):
    pass

class DayAdmin(admin.ModelAdmin):
    pass

class VisitAdmin(admin.ModelAdmin):
    pass

class PlaceAdmin(admin.ModelAdmin):
    pass

admin.site.register(Traveler, TravelerAdmin)
admin.site.register(Trip, TripAdmin)
admin.site.register(Day, DayAdmin)
admin.site.register(Visit, VisitAdmin)
admin.site.register(Place, PlaceAdmin)
