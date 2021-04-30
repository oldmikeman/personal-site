from rest_framework import serializers
from leads.models import Lead

"""
We need to be able to convert the Lead model to and from JSON, which is the job of a serializer.

This will take in the Lead model from models.py and assign it to the model for this serializer.

The fields that we want to make usable in the API are assigned to fields.
-> in this case, we want all of the fields from Lead, [name, email, message, created_at].

Since we are using the ModelSerializer, when we specify fields, we use the default serialization
for the fields of the ModelSerializer Class instead of our own defined ones.
"""

# Lead serializer


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'
