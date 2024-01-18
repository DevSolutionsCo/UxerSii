from rest_framework import serializers
from .models import userSiitoBack
from .models import UsuarioHogar, Administrador


class uxeriiSerializer(serializers.ModelSerializer):
    class Meta:
        model = userSiitoBack
        fields = "__all__"
    

class UsuarioHogarSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsuarioHogar
        fields = "__all__"

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Administrador
        fields = "__all__"
