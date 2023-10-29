/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package corcho.services;

import corcho.conecction.Conexion;
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

    
   
    
    public boolean registroHog(String correoH, String nombH,
            String apellidoPaterno, String apellidoMaterno, String nombUserH, java.sql.Date fechaNacimiento,
            String genero, String contrasenaH, String codigoPostal) throws SQLException, ClassNotFoundException{
        UserHogar userhogar = new UserHogar();
        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;
        Conexion con = new Conexion() {};
        
        
        Class.forName("com.mysql.cj.jdbc.Driver");
         try {
             
             
             
        int row =0;
        int si = 0;
        conn = DriverManager.getConnection(con.getDbURL(), con.user , con.password);
        
             
        
        String query = "insert into hogar( correoH, nombreH, apellidoPaterno, apellidoMaterno, nombUserH, fechaNacimiento, genero, contrasenaH, codigoPostal) values(?,?,?,?,?,?,?,?,?)";
        stmt = conn.prepareStatement(query);
        stmt.setString(1, correoH);
        stmt.setString(2, nombH);
        stmt.setString(3, apellidoPaterno);
        stmt.setString(4, apellidoMaterno);
        stmt.setString(5, nombUserH);
        stmt.setDate(6, (java.sql.Date) fechaNacimiento);
        stmt.setString(7, genero);
        stmt.setString(8, contrasenaH);
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
    
    public void modificacionHog(){
        
    }
    
    public void LlenadoInfoHog(){
        
    }
    
    public void AsignaInsigHog(){
        
    }
    
    public void consultaHog(){
        
    } 

    

}
