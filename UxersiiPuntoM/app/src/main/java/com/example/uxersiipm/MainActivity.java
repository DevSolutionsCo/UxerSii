package com.example.uxersiipm;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

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
        Call<Void> call=retro.validarCodigo(codigo);
        call.enqueue(new Callback<Void>() {
            @Override
            public void onResponse(Call<Void> call, Response<Void> response) {
                if (response.isSuccessful()) {
                    Intent intent = new Intent(MainActivity.this, index.class);
                    startActivity(intent);
                } else {
                    Toast.makeText(MainActivity.this, "Código inválido", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<Void> call, Throwable t) {
                Toast.makeText(MainActivity.this, "Error de conexión", Toast.LENGTH_SHORT).show();
            }
        });
    }

}