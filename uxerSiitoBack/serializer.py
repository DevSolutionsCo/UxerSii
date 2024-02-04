from dataclasses import field
from pyexpat import model
from rest_framework import serializers
from .models import userSiitoBack
from .models import UsuarioHogar, Administrador, PuntosColecta


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

class PuntosSerializer(serializers.ModelSerializer):
    class Meta:
        model = PuntosColecta
        fields = "__all__"
