from django.shortcuts import render
from rest_framework import viewsets
from .serializer import uxeriiSerializer, UsuarioHogarSerializer
from .models import userSiitoBack, UsuarioHogar
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate
from django.db.utils import OperationalError


# Create your views here.
class uxersiiPruebas(viewsets.ModelViewSet):
    serializer_class = uxeriiSerializer
    queryset = userSiitoBack.objects.all()

class signUp(viewsets.ModelViewSet):
    serializer_class = UsuarioHogarSerializer
    queryset = UsuarioHogar.objects.all()


from django.http import JsonResponse
from django.contrib.auth.hashers import check_password
from django.views.decorators.csrf import csrf_exempt
from .models import UsuarioHogar
import json

@csrf_exempt
def custom_login(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('correo_hog')
            contra = data.get('contra_hog')

            print(f'Nombre de usuario: {email}')
            print(f'Contraseña: {contra}')

            # Busca al usuario en la base de datos
            user = UsuarioHogar.objects.get(correo_hog=email)
            print(user.contra_hog)

            # Compara las contraseñas
            if (contra == user.contra_hog): 
                # Autenticación exitosa
                print("inicio valido")
                return JsonResponse({'mensaje': 'Inicio de sesion exitoso'})
            else:
                # Autenticación fallida
                print("inicio invalido")
                return JsonResponse({'error': 'Credenciales inválidas'}, status=401)

        except UsuarioHogar.DoesNotExist:
            # Usuario no encontrado
            return JsonResponse({'error': 'Usuario no encontrado'}, status=401)
        except Exception as e:
            # Otro error
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Método no permitido'}, status=405)

"""
class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        try:
            email = request.data.get('correo_hog')
            contra = request.data.get('contra_hog')
            
            from django.contrib.auth.hashers import make_password

            print(f'Nombre de usuario: {email}')
            print(f'Contraseña: {contra}')

            user = authenticate(request, modelo_usuario=UsuarioHogar, correo_hog=email, contra_hog=make_password(contra))

            if user:
                # Puedes personalizar el payload de respuesta según tus necesidades
                print("inicio valido")
                return Response({'mensaje': 'Inicio de sesión exitoso'}, status=status.HTTP_200_OK)
                
            else:
                print("inicio invalido")
                return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)
        except OperationalError as e:
            # Manejar excepciones de base de datos
            return Response({'error': f'Error de base de datos: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            # Manejar otras excepciones
            return Response({'error': f'Error inesperado: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
"""