from django.shortcuts import render
from rest_framework import viewsets
from .serializer import uxeriiSerializer, UsuarioHogarSerializer
from .models import userSiitoBack, UsuarioHogar

# Create your views here.
class uxersiiPruebas(viewsets.ModelViewSet):
    serializer_class = uxeriiSerializer
    queryset = userSiitoBack.objects.all()

class signUp(viewsets.ModelViewSet):
    serializer_class = UsuarioHogarSerializer
    queryset = UsuarioHogar.objects.all()
