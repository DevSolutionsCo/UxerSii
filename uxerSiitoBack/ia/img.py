import cv2
import numpy as np
from keras.models import load_model

# Cargar el modelo
model = load_model(modelo.keras)  # Reemplaza 'modelo.h5' con el nombre de tu archivo de modelo

# Cargar la imagen
img = cv2.imread(r'C:\Users\L13Yoga\Desktop\UxerSii\manzana.jpg')  # Reemplaza 'imagen.jpg' con el nombre de tu archivo de imagen
img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)  # Convertir la imagen de BGR a escala de grises
img = cv2.resize(img, (32, 32))  # Cambiar el tamaño de la imagen a 32x32 píxeles

# Definir la función predict
def predict(img):
    # Preprocesar la imagen
    img = img / 255.0  # Normalizar la imagen (escalar los valores de píxeles al rango [0, 1])
    img = np.expand_dims(img, axis=0)  # Añadir una dimensión adicional para la muestra

    # Hacer una predicción
    pred = model.predict(img)

    # Imprimir la predicción
    print('Predicción:', pred)

# Llamar a la función predict
predict(img)
