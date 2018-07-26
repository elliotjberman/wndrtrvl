from django.db import models
from django.contrib.auth.models import User

class Traveler(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    city = models.CharField(max_length=128)

class Trip(models.Model):
    travelers = models.ManyToManyField(Traveler)
    city = models.CharField(max_length=128)
    start = models.DateField()
    end = models.DateField()

class Day(models.Model):
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE)
    date = models.DateField()

class Visit(models.Model):
    day = models.ForeignKey(Day, on_delete=models.CASCADE)
    start = models.TimeField()
    end = models.TimeField()

class Place(models.Model):
    unique_id = models.CharField(max_length=128)
    name = models.CharField(max_length=128)
    visit = models.ForeignKey(Visit, null=True, blank=True, on_delete=models.SET_NULL)
