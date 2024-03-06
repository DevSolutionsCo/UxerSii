package com.example.uxersiipm;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.ListView;
import android.widget.PopupMenu;

import com.google.android.material.floatingactionbutton.FloatingActionButton;

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
        Call<List<Productos>> call = retro.obtenerProductos(1);
        call.enqueue(new Callback<List<Productos>>() {
            @Override
            public void onResponse(Call<List<Productos>> call, Response<List<Productos>> response) {
                if (response.isSuccessful()){
                    List<Productos> productos = response.body();
                    adap = new ProductosAdapter(index.this, productos);
                    lista.setAdapter(adap);
                }
            }

            @Override
            public void onFailure(Call<List<Productos>> call, Throwable t) {

            }
        });
    }

}