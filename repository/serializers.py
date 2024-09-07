#Serializers in DRF are responsible for converting Django models into JSON format that can be easily consumed by frontend

from rest_framework import serializers
from .models import Manuscript

class ManuscriptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manuscript
        fields = '__all__'  # Include all fields from the Manuscript model