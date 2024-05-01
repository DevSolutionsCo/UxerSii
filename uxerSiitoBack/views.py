from collections import Counter
from email.mime import image
import gzip
import io
import os
import shutil
from django.forms import model_to_dict
from django.shortcuts import render
from rest_framework import viewsets
from .serializer import AlimentosSerializer, uxeriiSerializer, UsuarioHogarSerializer, DonacionesSerializer, CarritoSerializer, CompraSerializer
from .models import Alimentos, userSiitoBack, UsuarioHogar, PuntosColecta, Carrito, CompraHog
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate
from django.db.utils import OperationalError
from django.core.serializers import serialize
import cloudinary
from cloudinary.uploader import upload
from cloudinary.utils import cloudinary_url
from django.core.mail import EmailMessage





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
from .models import UsuarioHogar, Donaciones
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
            if contra != "":
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
    campo = 'numDonaciones' 
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

@csrf_exempt
def getpuntos(request):
    puntos = PuntosColecta.objects.all()
    # Convertir el QuerySet a una lista de diccionarios
    puntos_lista = list(puntos.values())
    # Serializar la lista a JSON
    #puntos_json = serialize('json', puntos_lista) # type: ignore
    return JsonResponse({'puntosmoviles': puntos_lista})
        

@csrf_exempt
def postdonacion(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        id_dona = data.get('id_dona')
        nombUserH = data.get('nombUserH')
        id_punto = data.get('id_punto')
        print(f"Codigo: {id_dona}")
        print(f"nombreUser: {nombUserH}")
        print(f"id_punto: {id_punto}")
        serializer = DonacionesSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        if serializer.is_valid():
            
            return JsonResponse(serializer.data, status=201)
        else:
            return JsonResponse(serializer.errors, status=400)

import base64

import cloudinary.uploader

@csrf_exempt
def getalimentos(request, id_punto):
    
    #uploaded_url = upload_image_to_cloudinary(image_file="https://m.media-amazon.com/images/I/610byFhCSJL.__AC_SX300_SY300_QL70_ML2_.jpg")

    #print(uploaded_url)
    try:
        productos = Alimentos.objects.filter(id_punto=id_punto)
        productos_lista = []
        for producto in productos:
            producto_dict = model_to_dict(producto)
            if producto.imagen:
                # Convertir el nombre del archivo a una cadena antes de construir la ruta
                nombre_archivo = producto.imagen
                #print(ruta_imagen)
                print(nombre_archivo)
                producto_dict["imagen"] = nombre_archivo
            productos_lista.append(producto_dict)
        return JsonResponse({'productos': productos_lista})
    except Alimentos.DoesNotExist:
        return JsonResponse({'error': 'No se encontraron productos para el punto especificado'}, status=404)

from django.http import JsonResponse
from keras.models import load_model
from keras.preprocessing import image
import numpy as np
from PIL import Image


 # Ruta al archivo .h5 comprimido del modelo
model_path_compressed = 'uxerSiitoBack/fruit_model_v6.h5.gz'
model_path_decompressed = 'uxerSiitoBack/fruit_model_v6.h5'

    # Descomprimir el modelo
with gzip.open(model_path_compressed, 'rb') as f_in:
    with open(model_path_decompressed, 'wb') as f_out:
        shutil.copyfileobj(f_in, f_out)

    # Cargar el modelo descomprimido
model = load_model(model_path_decompressed)


def upload_image_to_cloudinary(image_file):
    upload_result = upload(image_file)
    public_id = upload_result['public_id']
    url, options = cloudinary_url(public_id, format=upload_result['format'])
    return url

@csrf_exempt
def postalimentos(request):

    # Categorías de frutas
    categorias = ['Manzana Fresca', 'Banana Fresca', 'Pepino Frezco', 
             'Naranja Fresca', 'Tomate Fresco',
              'Manzana Podrida', 'Banana Podrida', 'Pepino Podrido',
             'Naranja Podrida', 'Tomate Podrido']


    if request.method == 'POST':
        # Verifica si la solicitud tiene datos multipart (por ejemplo, una imagen)
        output_stream = io.BytesIO()
        if request.FILES:
            imagen = request.FILES['imagen']
            # Lee los bytes de la imagen
            image_bytes = imagen.read()
            # Crea un objeto BytesIO para envolver los bytes de la imagen
            image_stream = io.BytesIO(image_bytes)
            # Abre la imagen con PIL
            img = Image.open(image_stream)
            imgGua = Image.open(image_stream)

            # Convierte la imagen a formato .webp
            imgGua.save(output_stream, format="WEBP", quality=50)
            output_stream.seek(0)
        else:
            return JsonResponse({'error': 'No image provided'}, status=400)
        
        # Convierte la imagen en un formato compatible con Keras
        img = img.resize((224, 224))  # Redimensiona la imagen si es necesario
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)


        if model is not None:
            prediction = model(img_array)
            indice_maximo = np.argmax(prediction)
            print(indice_maximo)
            categoria_predicha = categorias[indice_maximo]
            print("Nuestra fruta es: ", categoria_predicha)
        else:
            return JsonResponse({'error': 'Model not loaded'}, status=500)

        
        # Crea un nuevo objeto Alimentos con los datos recibidos
        uploaded_url = upload_image_to_cloudinary(image_file=output_stream)

        alimento = Alimentos.objects.create(
                nomb_alim=request.POST.get('nomAlim'),
                cantidad=request.POST.get('cantidad'),
                fecha_cad=request.POST.get('fechaCad'),
                id_punto=request.POST.get('id_punto'),
                costo=request.POST.get('costo'),
                imagen=uploaded_url  # Aquí guardamos la URL pública de Cloudinary
            )
        
        # Serializa el nuevo alimento en formato JSON
        serializer = AlimentosSerializer(alimento)
        return JsonResponse(serializer.data, status=201)

    else:
        # Si no se recibe una solicitud POST, devuelve un error 405 (Método no permitido)
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)



@csrf_exempt
def valcod(request, codigo):
    try:
        # Busca al usuario en la base de datos
        user = PuntosColecta.objects.get(valcod=codigo)
        
    
        return JsonResponse({'mensaje': 'Inicio de sesion exitoso',
                             'id_punto': user.id_punto
                            })
        
    except PuntosColecta.DoesNotExist:
        # Usuario no encontrado
        return JsonResponse({'error': 'Usuario no encontrado'}, status=401)
    except Exception as e:
        # Otro error
        return JsonResponse({'error': str(e)}, status=500)
    


@csrf_exempt
def postcarrito(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        serializer = CarritoSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        if serializer.is_valid():
            
            return JsonResponse(serializer.data, status=201)
        else:
            return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def postcompra(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            productos_ids = data.get('productosIds', [])
            pdf = data.get('pdf')
            to = data.get('to')
            cantidad = data.get('cantidad', {})  
            print(cantidad)
            send_email(pdf, to)

            for id_carrito in productos_ids:
                cantidad_producto = 0  
                for item in cantidad:
                    if item['id_carrito'] == id_carrito:
                        cantidad_producto = item['cantidad']
                        break  

                serializer_data = {
                    'id_carrito': id_carrito,
                    'folio': data.get('folio'),
                    'estatus': False,
                    'cantidad': cantidad_producto
                }
                serializer = CompraSerializer(data=serializer_data)
                serializer.is_valid(raise_exception=True)
                serializer.save()

                try:
                    carrito = Carrito.objects.get(id_carrito=id_carrito)
                    carrito.estatus = 'En proceso'
                    carrito.save()
                except Carrito.DoesNotExist:
                    print('Error 1')
                    return JsonResponse({'error': f'El carrito con id {id_carrito} no existe'}, status=404)

            return JsonResponse({'message': 'Productos comprados exitosamente.'}, status=201)
        except Exception as e:
            print('Error 2')
            return JsonResponse({'error': str(e)}, status=400)
    else:
        print('Error 3')
        return JsonResponse({'error': 'Método no permitido'}, status=405)
    
def send_email(pdf_base64, to):
    # Decodificar el PDF Base64
    pdf_content = base64.b64decode(pdf_base64.split(',')[1])

    # Configurar y enviar el correo electrónico con el PDF adjunto
    email = EmailMessage(
        subject='Ticket de compra',
        body='Adjunto encontrarás el ticket de compra.',
        to=[to],
    )
    email.attach('ticket-de-compra.pdf', pdf_content, 'application/pdf')
    email.send()


@csrf_exempt
def getcarrito(request, id_hog):
    try:
        # Obtener todos los productos (id_alim) para el id_hog dado
        productos = Carrito.objects.filter(id_hog=id_hog).exclude(estatus='En proceso')
        productos_lista = []
        conteo_productos = Counter(producto.id_alim for producto in productos)
        print(productos)

        for carrito in productos:
            print(carrito.id_alim)
            # Buscar el alimento correspondiente al id_alim
            alimento = Alimentos.objects.get(id_alim=carrito.id_alim)
            cantidad = conteo_productos[carrito.id_alim]

            # Agregar el alimento a la lista de productos
            productos_lista.append({
                'id_alim': alimento.id_alim,
                'nomb_alim': alimento.nomb_alim,  
                'imagen': alimento.imagen,
                'cantidad': cantidad,
                'fecha_cad': alimento.fecha_cad,
                'costo': alimento.costo ,
                'id_carrito': carrito.id_carrito # Agrega otros campos que necesites
            })
            
        return JsonResponse({'productos': productos_lista})
    
    except Carrito.DoesNotExist:
        return JsonResponse({'error': 'No se encontraron productos para el punto especificado'}, status=404)
    
    except Alimentos.DoesNotExist:
        return JsonResponse({'error': 'No se encontró el alimento especificado'}, status=404)
    
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


        for producto in productos:
            alimentos = Alimentos.objects.filter(id_alim=producto.id_alim)
            productos_lista.append(alimentos)
            
        return JsonResponse({'productos': productos_lista})
    except Alimentos.DoesNotExist:
        return JsonResponse({'error': 'No se encontraron productos para el punto especificado'}, status=404)
