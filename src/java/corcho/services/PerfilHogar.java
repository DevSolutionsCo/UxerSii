/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package corcho.services;

import corcho.users.UserHogar;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;

/**
 *
 * @author javis
 */
public class PerfilHogar extends UserHogar{
    
    private ArrayList<String> insignias;
    private String datosEsta;

    public String user = "root";
    public String password = "1234";
    public String db = "uxersii";
    public String port = "3306";
    public String dbURL = "jdbc:mysql://localhost:3306/uxersii";
   
    
    public boolean registroHog(String correoH, String nombH,
            String apellidoPaterno, String apellidoMaterno, String nombUserH, java.sql.Date fechaNacimiento,
            String genero, String contrasenaH, String codigoPostal) throws SQLException, ClassNotFoundException{
        UserHogar userhogar = new UserHogar();
        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;
        
        
        Class.forName("com.mysql.cj.jdbc.Driver");
         try {
             
             
             
        int row =0;
        int si = 0;
        conn = DriverManager.getConnection(dbURL, user , password);
        
             
        
                String query = "insert into usuario_hogar( correo_hog, nombre_hog, apellido_pat, apellido_mat, fecha_nac, genero, contra_hog, nombUserH, codigoPostal) values(?,?,?,?,?,?,?,?,?)";
        stmt = conn.prepareStatement(query);
        stmt.setString(1, correoH);
        stmt.setString(2, nombH);   
        stmt.setString(3, apellidoPaterno);
        stmt.setString(4, apellidoMaterno);
        stmt.setDate(5, (java.sql.Date) (Date) fechaNacimiento);
        stmt.setString(6, genero);
        stmt.setString(7, contrasenaH);
        stmt.setString(8, nombUserH);
        stmt.setString(9, codigoPostal);
        
                row = stmt.executeUpdate();
            si = 1;
                        
    } catch (Exception e) {
        e.printStackTrace();
    } finally {
        if (rs != null) {
            rs.close();
        }
        if (stmt != null) {
            stmt.close();
        }
        if (conn != null) {
            conn.close();
        }
    }
        return true;
    
    }

    

    public void eliminacionHog(){

    }
    
    public boolean actualizarHogar(String correoH, String nombH,
            String apellidoPaterno, String apellidoMaterno, String nombUserH, java.sql.Date fechaNacimiento,
            String genero, String contrasenaH, String codigoPostal, String desc) throws SQLException, ClassNotFoundException {
        System.out.println(desc);
    Connection conn = null;
    PreparedStatement stmt = null;
    ResultSet rs = null;

    try {
        // Carga del controlador de la base de datos
        Class.forName("com.mysql.cj.jdbc.Driver");

        // Establece la conexión con la base de datos
        conn = DriverManager.getConnection(dbURL, user, password);

        // Query de actualización
        String query = "update usuario_hogar set nombre_hog=?, apellido_pat=?, apellido_mat=?, fecha_nac=?, genero=?, contra_hog=?, codigoPostal=?, nombUserH=?, desc_hog=? where correo_hog=?";

        // Preparación de la sentencia SQL
        stmt = conn.prepareStatement(query);

        // Establece los parámetros de la consulta con los valores proporcionados
        stmt.setString(1, nombH);
        stmt.setString(2, apellidoPaterno);
        stmt.setString(3, apellidoMaterno);
        stmt.setDate(4, fechaNacimiento);
        stmt.setString(5, genero);
        stmt.setString(6, contrasenaH);
        stmt.setString(7, codigoPostal);
        stmt.setString(8, nombUserH);
        stmt.setString(9, desc);
        stmt.setString(10, correoH);

        // Ejecuta la consulta de actualización
        int filasActualizadas = stmt.executeUpdate();

        // Verifica si se realizaron actualizaciones
        return filasActualizadas > 0;
    } catch (Exception e) {
        e.printStackTrace();
    } finally {
        // Cierra los recursos
        if (rs != null) {
            rs.close();
        }
        if (stmt != null) {
            stmt.close();
        }
        if (conn != null) {
            conn.close();
        }
    }
    return false;
}

    
    public void LlenadoInfoHog(){
        
    }
    
    public void AsignaInsigHog(){
        
    }
    
    public void consultaHog(){
        
    } 

    

}
