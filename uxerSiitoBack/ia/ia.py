import numpy as np
import tensorflow as tf
from keras.models import Sequential, save_model
from keras.layers import Conv2D, MaxPooling2D, Flatten, Dense


# Datos de entrenamiento
X_train = np.random.rand(100, 32, 32, 3)  # Ejemplo de imágenes de entrenamiento (100 imágenes de 32x32 píxeles con 3 canales de color)
y_train = np.random.randint(2, size=100)  # Ejemplo de etiquetas de entrenamiento (100 etiquetas binarias)

# Datos de validación
X_val = np.random.rand(20, 32, 32, 3)  # Ejemplo de imágenes de validación (20 imágenes de 32x32 píxeles con 3 canales de color)
y_val = np.random.randint(2, size=20)  # Ejemplo de etiquetas de validación (20 etiquetas binarias)

# Datos de prueba
X_test = np.random.rand(30, 32, 32, 3)  # Ejemplo de imágenes de prueba (30 imágenes de 32x32 píxeles con 3 canales de color)
y_test = np.random.randint(2, size=30)  # Ejemplo de etiquetas de prueba (30 etiquetas binarias)


# Definir el modelo
model = Sequential([
    Conv2D(16, (3, 3), activation='relu', input_shape=(32, 32, 3)),
    MaxPooling2D((2, 2)),
    Conv2D(32, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    Conv2D(64, (3, 3), activation='relu'),
    Flatten(),
    Dense(64, activation='relu'),
    Dense(1, activation='sigmoid')
])

# Compilar el modelo
model.compile(optimizer='adam',
              loss='binary_crossentropy',
              metrics=['accuracy'])


# Entrenar el modelo
model.fit(X_train, y_train, epochs=10, validation_data=(X_val, y_val))

# Evaluar el modelo
test_loss, test_acc = model.evaluate(X_test, y_test)
print('Test accuracy:', test_acc)

#model.save(r"C:\Users\L13Yoga\Desktop\UxerSii\uxerSiitoBack\ia\modelo.keras")
 
 