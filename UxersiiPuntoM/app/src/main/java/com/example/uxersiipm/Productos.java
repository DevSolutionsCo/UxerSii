package com.example.uxersiipm;
import com.google.gson.annotations.SerializedName;

import java.util.Date;

public class Productos {
    @SerializedName("nomAlim")
    private String nomAlim;
    @SerializedName("cantidad")
    private int cantidad;

    @SerializedName("fechaCad")
    private String fechaCad;
    @SerializedName("precio")
    private int precio;
    @SerializedName("imagen")
    private String urlimg;

    public String getUrlimg() {
        return urlimg;
    }

    public void setUrlimg(String urlimg) {
        this.urlimg = urlimg;
    }

    public int getPrecio() {
        return precio;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }

    public String getNomAlim() {
        return nomAlim;
    }

    public void setNomAlim(String nomAlim) {
        this.nomAlim = nomAlim;
    }

    public String getFechaCad() {
        return fechaCad;
    }

    public void setFechaCad(String fechaCad) {
        this.fechaCad = fechaCad;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public Productos() {
    }

    public Productos(String nomAlim, int cantidad, String fechaCad, int precio, String urlimg) {
        this.nomAlim = nomAlim;
        this.cantidad = cantidad;
        this.fechaCad = fechaCad;
        this.precio = precio;
        this.urlimg = urlimg;
    }


}
