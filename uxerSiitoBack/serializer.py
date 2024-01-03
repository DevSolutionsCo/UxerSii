from rest_framework import serializers
from .models import userSiitoBack

class uxeriiSerializer(serializers.ModelSerializer):
    class Meta:
        model = userSiitoBack
        fields = "__all__"