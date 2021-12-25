from rest_framework import serializers
from EmployeeApp.models import Works, Employees

class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Works
        fields = ('WorkId', 'DoorNo', 'EmployeeId', 'Date', 'Time', 'Type', 'Pin')

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = ('EmployeeId', 'FirstName', 'LastName', 'Designation', 'Address', 'PhoneNumber', 'Email', 'Pin')

class ComplexSerializer(serializers.ModelSerializer):
    class Meta:
        #model = Complex
        fields = ('EmployeeId',	'FirstName', 'LastName', 'FirstEntryDate', 	'FirstEntryTime', 'LastExitDate', 'LastExitTime', 'TotalStay')

