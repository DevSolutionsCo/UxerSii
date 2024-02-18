package com.example.uxersiipm;
import com.google.gson.annotations.SerializedName;

import java.util.Date;

public class Productos {
    @SerializedName("nomAlim")
    private String nomAlim;
    //private Date fechaCad;
    @SerializedName("cantidad")
    private int cantidad;
    //private int idPunto;
    //private Byte[] imgByte;
    //private int idProd;

    /*public int getIdProd() {
        return idProd;
    }*/

    /*public void setIdProd(int idProd) {
        this.idProd = idProd;
    }*/



    public String getNomAlim() {
        return nomAlim;
    }

    public void setNomAlim(String nomAlim) {
        this.nomAlim = nomAlim;
    }

    /*public Date getFechaCad() {
        return fechaCad;
    }*/

    /*public void setFechaCad(Date fechaCad) {
        this.fechaCad = fechaCad;
    }*/

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    /*public int getIdPunto() {
        return idPunto;
    }*/

    /*public void setIdPunto(int idPunto) {
        this.idPunto = idPunto;
    }*/

    /*public Byte[] getImgByte() {
        return imgByte;
    }*/

    /*public void setImgByte(Byte[] imgByte) {
        this.imgByte = imgByte;
    }*/

}
