package com.example.uxersiipm;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.gson.JsonObject;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {
    Button iniciarB;

    EditText cod;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        iniciarB = findViewById(R.id.iniciarSesion);
        cod=findViewById(R.id.cod);
        iniciarB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String codigo = cod.getText().toString();
                validarcod(codigo);
            }
        });

    }
    private void validarcod(String codigo){
        retroService retro = retroClient.getRetrofitInstance().create(retroService.class);
        Call<JsonObject> call=retro.validarCodigo(codigo);
        call.enqueue(new Callback<JsonObject>() {
            @Override
            public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                if (response.isSuccessful() && response.body() != null) {
                    try {
                        JsonObject jsonObject = response.body();

                        if (jsonObject.has("id_punto")) {
                            String mensaje = jsonObject.get("id_punto").getAsString();
                            Toast.makeText(MainActivity.this, mensaje, Toast.LENGTH_SHORT).show();

                            Intent intent = new Intent(MainActivity.this, index.class);
                            startActivity(intent);
                        } else {
                            Toast.makeText(MainActivity.this, "Respuesta del servidor sin mensaje", Toast.LENGTH_SHORT).show();
                        }
                    } catch (Exception e) {
                        e.printStackTrace();
                        Toast.makeText(MainActivity.this, "Error al procesar la respuesta del servidor", Toast.LENGTH_SHORT).show();
                    }
                } else {
                    Toast.makeText(MainActivity.this, "Código inválido", Toast.LENGTH_SHORT).show();
                }



        }
            public void onFailure(Call<JsonObject> call, Throwable t) {
                Toast.makeText(MainActivity.this, "Error de conexión", Toast.LENGTH_SHORT).show();
            }
        });
    }

}