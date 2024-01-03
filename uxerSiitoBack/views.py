from django.shortcuts import render
from rest_framework import viewsets
from .serializer import uxeriiSerializer
from .models import userSiitoBack

# Create your views here.
class uxersiiPruebas(viewsets.ModelViewSet):
    serializer_class = uxeriiSerializer
    queryset = userSiitoBack.objects.all()
