/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package corcho.services;

import corcho.conecction.Conexion;
import corcho.users.UserHogar;
import corcho.users.UserOrgani;
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
public class PerfilOrgani extends UserOrgani{
    
    private ArrayList<String> insignias;
    private String datosEsta;
    
   
    
    public boolean registroOrg(String nombORG, String UbicacionORG,
            String passwORG, String correoORG, String contactoORG,
            String RedesORG, String idORG) throws SQLException, ClassNotFoundException{
        
        System.out.println(nombORG);
        
        UserOrgani userorgani = new UserOrgani();
        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;
        Conexion con = new Conexion() {};
        
        
        Class.forName("com.mysql.cj.jdbc.Driver");
         try {
             
             
             
        int row =0;
        int si = 0;
        conn = DriverManager.getConnection(con.getDbURL(), con.user , con.password);
        
             System.out.println(nombORG);
        String query = "update usuario_organizacion set nombre_org=?, cp_org=?, contra_org=?, correo_org=?, tel_org=?, link_org=? where id_ofc=?";
        stmt = conn.prepareStatement(query);
        stmt.setString(1, nombORG);
        stmt.setString(2, UbicacionORG);   
        stmt.setString(3, passwORG);
        stmt.setString(4, correoORG);
        stmt.setString(5, contactoORG);
        stmt.setString(6, RedesORG);
        stmt.setString(7, idORG);

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


    public void eliminacionOrg(){

    }
    
    public void modificacionOrg(){
        
    }
    
    public void LlenadoInfoOrg(){
        
    }
    
    public void AsignaInsigOrg(){
        
    }
    
    public void consultaOrg(){
        
    }     
    
    
}
