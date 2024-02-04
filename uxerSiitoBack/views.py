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

    def create(self, request, *args, **kwargs):
        dataU = json.loads(request.body)
        email = dataU.get('correo_hog')
        print(email)
        # Obtener datos del request
        #usuario_data = request.data.get('usuario', {})
        #print(usuario_data.get('correo_hog'))
        # Verificar si ya existe un usuario con el mismo correo
        existing_email = UsuarioHogar.objects.filter(correo_hog=dataU.get('correo_hog')).exists()
        if existing_email:
            print("Correo existente, registro fallido")
            return JsonResponse({"detail": "Este correo ya está registrado"}, status=status.HTTP_400_BAD_REQUEST)

        # Verificar si ya existe un usuario con el mismo nombre de usuario
        existing_username = UsuarioHogar.objects.filter(nombUserH=dataU.get('nombUserH')).exists()
        if existing_username:
            print("Nombre existente, registro fallido")
            return JsonResponse({"detail": "Este nombre de usuario ya está en uso"}, status=status.HTTP_400_BAD_REQUEST)

        # Si no hay conflictos, proceder con la creación del usuario
        serializer = self.get_serializer(data=dataU)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


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
                request.session['nombUserH'] = user.nombUserH
                request.session['nombre_hog'] = user.nombre_hog
                request.session['correo_hog'] = user.correo_hog
                request.session['contra_hog'] = user.contra_hog
                request.session['id_hog'] = user.id_hog
                return JsonResponse({'mensaje': 'Inicio de sesion exitoso', 
                                     'nombUserH': user.nombUserH,
                                     'nombre': user.nombre_hog,
                                     'correo_hog': user.correo_hog,
                                     #'contra': user.contra_hog,
                                     'apellidoPat': user.apellido_pat,
                                     'fotoPerfil': user.fotoh,
                                     'id_hog': user.id_hog
                                    })
                
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


def obtenerdatosuserh(request):
    if request.method == 'GET':
        nombUserH = request.session.get('nombUserH')
        nombre_hog = request.session.get('nombre_hog')
        correo_hog = request.session.get('correo_hog')
        contra_hog = request.session.get('contra_hog')
        id_hog = request.session.get('id_hog')
        return JsonResponse({'nombUserH': nombUserH,
                            'nombre_hog': nombre_hog,
                            'correo_hog': correo_hog,
                            'contra_hog': contra_hog,
                            'id_hog': id_hog
                            })
    
@csrf_exempt
def actualizardatosh(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('correoUser')
            contra = data.get('passwUser')
            nombreUser = data.get('nombreUser')
            emailAnt = data.get('correoUserAn')
            fotoPerfil = data.get('fotoPerfil')
            

            print(f'Nombre de usuario: {nombreUser}')
            print(f'Contraseña: {contra}')
            print(f"Correo Nuevo: {email}")
            print(f"Correo Anterior: {emailAnt}")
            print(f"Foto Perfil: {fotoPerfil}")



            # Busca al usuario en la base de datos
            user = UsuarioHogar.objects.get(correo_hog=emailAnt)
            print(user.contra_hog)

            # Cambia valores
            user.contra_hog = contra
            user.nombUserH = nombreUser
            user.correo_hog = email
            user.fotoh = fotoPerfil

            # Guarda los cambios
            user.save()

            return JsonResponse({'mensaje': 'Inicio de sesion exitoso', 
                                     'nombUserH': user.nombUserH,
                                     'nombre': user.nombre_hog,
                                     'correo_hog': user.correo_hog,
                                     #'contra': user.contra_hog,
                                     'apellidoPat': user.apellido_pat,
                                     'fotoPerfil': user.fotoh,
                                     'id_hog': user.id_hog
                                    })
            

        except UsuarioHogar.DoesNotExist:
            # Usuario no encontrado
            return JsonResponse({'error': 'Usuario no encontrado'}, status=401)
        except Exception as e:
            # Otro error
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Método no permitido'}, status=405)


@csrf_exempt
def getranking(request):
    campo = 'numDonaciones'  # Reemplaza con el nombre del campo que estás utilizando
    cantidad_a_mostrar = 3

    usuarios = UsuarioHogar.objects.order_by(f'-{campo}')[:cantidad_a_mostrar]

    data = [{'nombreUser': usuario.nombUserH,
             'correoUser': usuario.correo_hog,
             #'passwUser': usuario.passwUser,
             'numDonaciones': usuario.numDonaciones,
             'fotoPerfil': usuario.fotoh if usuario.fotoh else None,
             campo: getattr(usuario, campo)}
            for usuario in usuarios]

    return JsonResponse({'usuarios': data})
        