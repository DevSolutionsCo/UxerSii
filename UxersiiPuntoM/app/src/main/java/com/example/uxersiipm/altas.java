package com.example.uxersiipm;

import androidx.appcompat.app.AppCompatActivity;

import android.app.DatePickerDialog;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.view.View;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import java.util.Calendar;




public class altas extends AppCompatActivity {

    EditText precio, cantidad, fechaCadu;
    private static final int REQUEST_IMAGE_CAPTURE = 1;
    private static final int REQUEST_IMAGE_PICK = 2;
    private ImageView imgProduc;

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
        fechaCadu.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mostrarCalendario();
            }
        });

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
}