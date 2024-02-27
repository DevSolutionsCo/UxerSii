package com.example.uxersiipm;

import androidx.appcompat.app.AppCompatActivity;

import android.app.DatePickerDialog;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;


import java.io.ByteArrayOutputStream;
import java.util.Calendar;




public class altas extends AppCompatActivity implements View.OnClickListener{

    EditText precio, cantidad, fechaCadu, nombAli;
    Button altas;
    private static final int REQUEST_IMAGE_CAPTURE = 1;
    private static final int REQUEST_IMAGE_PICK = 2;
    private ImageView imgProduc;

    private static final String BASE_URL = "https://k91n550s-8000.usw3.devtunnels.ms//uxersiiPruebas/";
    Retrofit retrofit;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_altas);


        imgProduc = findViewById(R.id.imgProduc);
        imgProduc.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openCamera();
            }
        });
        precio = findViewById(R.id.precio);
        cantidad=findViewById(R.id.cantidad);
        fechaCadu=findViewById(R.id.fechaCadu);
        altas = findViewById(R.id.alta);
        nombAli = findViewById(R.id.producto);

        altas.setOnClickListener(this);
        fechaCadu.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mostrarCalendario();
            }
        });

        retrofit = new Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();



    }
    private void openCamera() {
        Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        Intent pickPhotoIntent = new Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
        Intent chooserIntent = Intent.createChooser(pickPhotoIntent, "Seleccionar imagen");
        chooserIntent.putExtra(Intent.EXTRA_INITIAL_INTENTS, new Intent[] { takePictureIntent });
        if (chooserIntent.resolveActivity(getPackageManager()) != null) {
            startActivityForResult(chooserIntent, REQUEST_IMAGE_PICK);
        } else {
            Toast.makeText(this, "No se pudo abrir la cámara o la galería", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (resultCode == RESULT_OK) {
            if (requestCode == REQUEST_IMAGE_CAPTURE) {
                Bundle extras = data.getExtras();
                if (extras != null && extras.containsKey("data")) {
                    Bitmap imageBitmap = (Bitmap) extras.get("data");
                    if (imageBitmap != null) {
                        imgProduc.setImageBitmap(imageBitmap);
                    } else {
                        Toast.makeText(this, "No se pudo capturar la imagen", Toast.LENGTH_SHORT).show();
                    }
                } else {
                    Toast.makeText(this, "No se pudo obtener la imagen capturada", Toast.LENGTH_SHORT).show();
                }
            } else if (requestCode == REQUEST_IMAGE_PICK) {
                Uri selectedImage = data.getData();
                if (selectedImage != null) {
                    imgProduc.setImageURI(selectedImage);
                } else {
                    Toast.makeText(this, "No se pudo obtener la imagen seleccionada", Toast.LENGTH_SHORT).show();
                }
            }
        } else {
            Toast.makeText(this, "Se canceló la operación", Toast.LENGTH_SHORT).show();
        }
    }
    private void mostrarCalendario() {
        final Calendar calendario = Calendar.getInstance();
        int year = calendario.get(Calendar.YEAR);
        int mes = calendario.get(Calendar.MONTH);
        int dia = calendario.get(Calendar.DAY_OF_MONTH);

        DatePickerDialog datePickerDialog = new DatePickerDialog(this,
                new DatePickerDialog.OnDateSetListener() {
                    @Override
                    public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
                        String fechaSeleccionada = dayOfMonth + "/" + (month + 1) + "/" + year;
                        fechaCadu.setText(fechaSeleccionada);
                    }
                }, year, mes, dia);
        datePickerDialog.show();
    }

    @Override
    public void onClick(View view) {
        String cadenita = ((Button)view).getText().toString();
        if (cadenita.equals("Añadir Producto")){
            // Supongamos que tienes un objeto Productos con la información del nuevo producto
            Productos producto = new Productos();
            producto.setNomAlim(nombAli.getText().toString());
            producto.setCantidad(Integer.parseInt(cantidad.getText().toString()));

            // Convertir la imagen a bytes
            ByteArrayOutputStream stream = new ByteArrayOutputStream();
            Bitmap bitmap = ((BitmapDrawable) imgProduc.getDrawable()).getBitmap(); // Obtén la imagen de tu ImageView
            bitmap.compress(Bitmap.CompressFormat.JPEG, 100, stream);
            byte[] imagenBytes = stream.toByteArray();

            // Construir la parte de la imagen para enviarla con Retrofit
            RequestBody requestFile = RequestBody.create(MediaType.parse("image/jpeg"), imagenBytes);
            MultipartBody.Part imagenParte = MultipartBody.Part.createFormData("imagen", "alimento.jpg", requestFile);

            // Crear la instancia de retrofitService
            retroService alimentoService = retrofit.create(retroService.class);

            // Hacer la llamada para crear el producto
            Call<Productos> call = alimentoService.crearProducto(
                    RequestBody.create(MediaType.parse("text/plain"), producto.getNomAlim()),
                    RequestBody.create(MediaType.parse("text/plain"), String.valueOf(producto.getCantidad())), // Agregar una descripción vacía por ahora
                    imagenParte
            );

            call.enqueue(new Callback<Productos>() {
                @Override
                public void onResponse(Call<Productos> call, Response<Productos> response) {
                    if (response.isSuccessful()) {
                        Productos createdProducto = response.body();
                        // Haz algo con el producto creado (p.ej., muestra un mensaje de éxito)
                    } else {
                        // Maneja el caso de respuesta no exitosa
                    }
                }

                @Override
                public void onFailure(Call<Productos> call, Throwable t) {
                    // Maneja el caso de error de red o error en la solicitud
                }
            });
        }

    }
}
