package com.example.uxersiipm;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.DatePickerDialog;
import android.app.Dialog;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.net.Uri;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.provider.MediaStore;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;

import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.Toast;

import androidx.fragment.app.DialogFragment;

import java.io.ByteArrayOutputStream;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class FormularioAlt extends DialogFragment {

    private EditText nombAli;
    private EditText precio;
    private EditText cantidad;
    private ImageView imgProduc;
    private EditText fech;
    private Calendar calendar;
    private static final int REQUEST_IMAGE_CAPTURE = 1;
    private static final int REQUEST_IMAGE_PICK = 2;
    private String fechaFormateada;

    private resCaptura listener;
    private static final String BASE_URL = "https://781hhnms-8000.usw3.devtunnels.ms/uxersiiPruebas/";

    Retrofit retrofit = new Retrofit.Builder()
            .baseUrl("https://781hhnms-8000.usw3.devtunnels.ms/uxersiiPruebas/")
            .addConverterFactory(GsonConverterFactory.create())
            .build();
    @Override
    public Dialog onCreateDialog(Bundle savedInstanceState) {
        Dialog dialog = new Dialog(requireContext());
        dialog.setContentView(R.layout.formulario);

        nombAli=dialog.findViewById(R.id.nombF);
        precio=dialog.findViewById(R.id.presF);
        cantidad=dialog.findViewById(R.id.cantF);
        imgProduc=dialog.findViewById(R.id.imgF);
        imgProduc.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openCamera();
            }
        });
        fech=dialog.findViewById(R.id.fechCadF);
        calendar=Calendar.getInstance();

        fech.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mostrarCalendario();
            }
        });

        Button btnEnviar = dialog.findViewById(R.id.guardarF);
        ImageButton btnCerrar = dialog.findViewById(R.id.cerrarF);
        btnEnviar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Productos producto = new Productos();
                producto.setNomAlim(nombAli.getText().toString());
                producto.setCantidad(Integer.parseInt(cantidad.getText().toString()));
                producto.setPrecio(Integer.parseInt(precio.getText().toString()));
                producto.setFechaCad(fechaFormateada);
                ByteArrayOutputStream stream = new ByteArrayOutputStream();
                Bitmap bitmap = ((BitmapDrawable) imgProduc.getDrawable()).getBitmap(); // Obtén la imagen de tu ImageView
                bitmap.compress(Bitmap.CompressFormat.JPEG, 100, stream);
                byte[] imagenBytes = stream.toByteArray();
                RequestBody requestFile = RequestBody.create(MediaType.parse("image/jpeg"), imagenBytes);
                MultipartBody.Part imagenParte = MultipartBody.Part.createFormData("imagen", "alimento.jpg", requestFile);
                retroService alimentoService = retrofit.create(retroService.class);
                Toast.makeText(requireContext(), "si jala",Toast.LENGTH_SHORT).show();
                RequestBody nomAlimPart = RequestBody.create(MediaType.parse("text/plain"), producto.getNomAlim());
                RequestBody cantidadPart = RequestBody.create(MediaType.parse("text/plain"), String.valueOf(producto.getCantidad()));
                RequestBody precioPart = RequestBody.create(MediaType.parse("text/plain"), String.valueOf(producto.getPrecio()));
                RequestBody fechaCadPart = RequestBody.create(MediaType.parse("text/plain"), producto.getFechaCad());
                Call<Productos> call = alimentoService.crearProducto(nomAlimPart, cantidadPart, precioPart, fechaCadPart, imagenParte);
                call.enqueue(new Callback<Productos>() {
                    @Override
                    public void onResponse(Call<Productos> call, Response<Productos> response) {
                        if (response.isSuccessful()) {
                            Productos createdProducto = response.body();
                            Toast.makeText(requireContext(), "Producto agregado",Toast.LENGTH_SHORT).show();
                            dismiss();
                            limpito();
                        } else {
                            Toast.makeText(requireContext(), "El producto no se pudó agregar correctamente",Toast.LENGTH_SHORT).show();

                        }
                    }

                    @Override
                    public void onFailure(Call<Productos> call, Throwable t) {
                        // Maneja el caso de error de red o error en la solicitud
                    }
                });

            }
        });
        btnCerrar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dismiss();
            }
        });

        return dialog;
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (resultCode == Activity.RESULT_OK) {
            if (requestCode == REQUEST_IMAGE_CAPTURE) {
                Bundle extras = data.getExtras();
                if (extras != null && extras.containsKey("data")) {
                    Bitmap imageBitmap = (Bitmap) extras.get("data");
                    if (imageBitmap != null) {
                        if (listener != null) {
                            listener.onImageCaptured(imageBitmap);
                        }
                        imgProduc.setImageBitmap(imageBitmap);
                    } else {
                        Toast.makeText(requireContext(), "No se pudo capturar la imagen", Toast.LENGTH_SHORT).show();
                    }
                } else {
                    Toast.makeText(requireContext(), "No se pudo obtener la imagen capturada", Toast.LENGTH_SHORT).show();
                }
            } else if (requestCode == REQUEST_IMAGE_PICK) {
                Uri selectedImage = data.getData();
                if (selectedImage != null) {
                    if (listener != null) {
                        listener.onImageSelected(selectedImage);
                    }
                    imgProduc.setImageURI(selectedImage);
                } else {
                    Toast.makeText(requireContext(), "No se pudo obtener la imagen seleccionada", Toast.LENGTH_SHORT).show();
                }
            }
        } else {
            Toast.makeText(requireContext(), "Se canceló la operación", Toast.LENGTH_SHORT).show();
        }
    }

    private void mostrarCalendario() {
        final Calendar calendario = Calendar.getInstance();
        int year = calendario.get(Calendar.YEAR);
        int mes = calendario.get(Calendar.MONTH);
        int dia = calendario.get(Calendar.DAY_OF_MONTH);

        DatePickerDialog datePickerDialog = new DatePickerDialog(requireContext(),
                new DatePickerDialog.OnDateSetListener() {
                    @Override
                    public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
                        Calendar selectedDate = Calendar.getInstance();
                        selectedDate.set(year, month, dayOfMonth);
                        Date fechaSeleccionada = selectedDate.getTime();
                        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd", Locale.getDefault());
                        fechaFormateada = sdf.format(fechaSeleccionada);
                        fech.setText(fechaFormateada);
                    }
                }, year, mes, dia);
        datePickerDialog.show();
    }
    private void openCamera() {
        Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        Intent pickPhotoIntent = new Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
        Intent chooserIntent = Intent.createChooser(pickPhotoIntent, "Seleccionar imagen");
        chooserIntent.putExtra(Intent.EXTRA_INITIAL_INTENTS, new Intent[] { takePictureIntent });
        if (chooserIntent.resolveActivity(requireContext().getPackageManager()) != null) {
            startActivityForResult(chooserIntent, REQUEST_IMAGE_PICK);
        } else {
            Toast.makeText(requireContext(), "No se pudo abrir la cámara o la galería", Toast.LENGTH_SHORT).show();
        }
    }
    public void limpito(){
        nombAli.setText("");
        precio.setText("");
        cantidad.setText("");
        fech.setText("");
        imgProduc.setImageResource(R.drawable.camara);
    }

}
