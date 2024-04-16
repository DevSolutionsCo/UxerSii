from dataclasses import field
from pyexpat import model
from rest_framework import serializers
from .models import userSiitoBack
from .models import UsuarioHogar, Administrador, PuntosColecta, Donaciones, Alimentos, Carrito


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

class DonacionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donaciones
        fields = "__all__"

class AlimentosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alimentos
        fields = "__all__"


class CarritoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrito
        fields = "__all__"


