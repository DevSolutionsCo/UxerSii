package com.example.uxersiipm;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.ListView;
import android.widget.PopupMenu;
import android.widget.Toast;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class index extends AppCompatActivity {

    ListView lista;
    ProductosAdapter adap;
    retroService retro;
    FloatingActionButton popup;
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menucito, menu);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        if (item.getItemId() == R.id.buscar){
            Intent intentito = new Intent(this, Buscar.class);
            startActivity(intentito);
            finish();
        } else if (item.getItemId() == R.id.donar) {
            Intent intentito = new Intent(this, Donar.class);
            startActivity(intentito);
            finish();
        } else if (item.getItemId() == R.id.salir){
                finishAffinity();
        } else if (item.getItemId() == R.id.cerrarSesion) {
            Intent intentito = new Intent(this, MainActivity.class);
            startActivity(intentito);
            finish();
        }
        return super.onOptionsItemSelected(item);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_index);
        popup=findViewById(R.id.fabAgregar);
        popup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                FormularioAlt formularioAlt= new FormularioAlt();
                formularioAlt.show(getSupportFragmentManager(), "formulario");
            }
        });
        lista=findViewById(R.id.inv);
        retro=retroClient.getRetrofitInstance().create(retroService.class);
        Call<JsonObject> call = retro.obtenerProductos(1);
        call.enqueue(new Callback<JsonObject>() {
            @Override
            public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                if (response.isSuccessful() && response.body() != null) {
                    try {
                        JsonObject jsonObject = response.body();

                        if (jsonObject.has("productos")) {
                            Gson gson = new Gson();
                            Type productListType = new TypeToken<List<Productos>>(){}.getType();
                            List<Productos> productos = gson.fromJson(jsonObject.get("productos"), productListType);

                            for (Productos producto : productos) {
                                try {
                                    String fechaCadFormateada = producto.getFechaCad();  // La fecha ya está en formato String
                                    Log.d("DatosProducto", "Nombre: " + producto.getNomAlim() +
                                            ", Cantidad: " + producto.getCantidad() +
                                            ", Precio: " + producto.getPrecio() +
                                            ", Fecha de caducidad: " + fechaCadFormateada +  // Mostrar fecha directamente
                                            ", URL de imagen: " + "https://781hhnms-5173.usw3.devtunnels.ms/" + producto.getUrlimg());;
                                } catch (Exception e) {
                                    e.printStackTrace();
                                    Log.e("Fecha", "Error al obtener la fecha: " + producto.getFechaCad());
                                }
                            }

                            adap = new ProductosAdapter(index.this, productos);
                            lista.setAdapter(adap);
                        } else {
                            Toast.makeText(index.this, "Respuesta del servidor sin productos", Toast.LENGTH_SHORT).show();
                        }
                    } catch (Exception e) {
                        e.printStackTrace();
                        Toast.makeText(index.this, "Error al procesar la respuesta del servidor", Toast.LENGTH_SHORT).show();
                    }
                } else {
                    Toast.makeText(index.this, "Error en la respuesta del servidor", Toast.LENGTH_SHORT).show();
                }
            }


            @Override
            public void onFailure(Call<JsonObject> call, Throwable t) {

            }
        });
    }

}