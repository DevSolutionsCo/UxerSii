/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package corcho.users;

import java.util.ArrayList;
import java.util.Date;


/**
 *
 * @author javis
 */
public class UserHogar {
    
    private int id_hogar;
    private String correo;
    private String nombre;
    private String apellido_pat;
    private String apellido_mat;
    private String genero;
    private String contrasena;
    private String nombre_user;
    private String url_foto;
    private ArrayList<String> redes;
    private String descrip;
    private Date fecha_nac;
    private String ubiH;

    
    public String getUbiH() {
        return ubiH;
    }

    public void setUbiH(String ubiH) {
        this.ubiH = ubiH;
    }
    

    public Date getFecha_nac() {
        return fecha_nac;
    }

    public void setFecha_nac(Date fecha_nac) {
        this.fecha_nac = fecha_nac;
    }

    public Integer getId_hogar() {
        return id_hogar;
    }

    public void setId_hogar(int id_hogar) {
        this.id_hogar = id_hogar;
    }

    public String getUrl_foto() {
        return url_foto;
    }

    public void setUrl_foto(String url_foto) {
        this.url_foto = url_foto;
    }

    public ArrayList<String> getRedes() {
        return redes;
    }

    public void setRedes(ArrayList<String> redes) {
        this.redes = redes;
    }
    
    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido_pat() {
        return apellido_pat;
    }

    public void setApellido_pat(String apellido_pat) {
        this.apellido_pat = apellido_pat;
    }

    public String getApellido_mat() {
        return apellido_mat;
    }

    public void setApellido_mat(String apellido_mat) {
        this.apellido_mat = apellido_mat;
    }


    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getDescrip() {
        return descrip;
    }

    public void setDescrip(String descrip) {
        this.descrip = descrip;
    }
    
    public String getNombre_user() {
        return nombre_user;
    }

    public void setNombre_user(String nombre_user) {
        this.nombre_user = nombre_user;
    }
    
    
    
    
}
