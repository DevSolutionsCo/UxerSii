package com.example.uxersiipm;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.PopupMenu;

public class index extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_index);
    }
    public void opcImg(View v){
        PopupMenu popupMenu = new PopupMenu(this, v);
        popupMenu.getMenuInflater().inflate(R.menu.opc, popupMenu.getMenu());
        popupMenu.setOnMenuItemClickListener(new PopupMenu.OnMenuItemClickListener() {
            @Override
            public boolean onMenuItemClick(MenuItem menuItem) {
                if (menuItem.getItemId() == R.id.opc1){
                    act1();
                    return true;
                } else if (menuItem.getItemId() == R.id.opc2) {
                    act2();
                    return true;
                }
                return false;
            }
        });
        popupMenu.show();
    }
    private void act1(){
        Intent intentito = new Intent(this, MainActivity.class);
        startActivity(intentito);
    }
    private void act2(){
        finishAffinity();
    }
    public void agregarProd(View v){
        Intent intentito = new Intent(this, altas.class);
        startActivity(intentito);
    }
    public void buscarFolio(View v){ 
        Intent intentito = new Intent(this, buscar.class);
        startActivity(intentito);
    }
}