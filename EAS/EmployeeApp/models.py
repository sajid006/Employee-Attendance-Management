from django.db import models

# Create your models here.

class Works(models.Model):
    WorkId = models.AutoField(primary_key=True)
    DoorNo = models.IntegerField()
    EmployeeId = models.CharField(max_length=100)
    Date = models.DateField()
    Time = models.TimeField()
    Type = models.IntegerField()
    Pin = models.CharField(max_length=100)

class Employees(models.Model):
    EmployeeId = models.CharField(max_length=100, primary_key=True)
    FirstName = models.CharField(max_length=100)
    LastName = models.CharField(max_length=100)
    Designation = models.CharField(max_length=100)
    Address = models.CharField(max_length=100)
    PhoneNumber = models.CharField(max_length=100)
    Email = models.CharField(max_length=100)
    Pin = models.CharField(max_length=100)




