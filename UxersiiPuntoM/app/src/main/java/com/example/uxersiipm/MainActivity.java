package com.example.uxersiipm;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {
    Button iniciarB;

    EditText cod;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        iniciarB = findViewById(R.id.iniciarSesion);
        iniciarB.setOnClickListener(this);

    }

    @Override
    public void onClick(View view) {
        String cadenita = ((Button)view).getText().toString();
        if (cadenita.equals("Iniciar Sesión")){
        Intent intentito = new Intent(this, index.class);
        startActivity(intentito);
        }
    }
}