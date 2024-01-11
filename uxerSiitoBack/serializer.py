from rest_framework import serializers
from .models import userSiitoBack
from .models import UsuarioHogar


class uxeriiSerializer(serializers.ModelSerializer):
    class Meta:
        model = userSiitoBack
        fields = "__all__"
    

class UsuarioHogarSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsuarioHogar
        fields = "__all__"
