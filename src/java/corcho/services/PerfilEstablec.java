/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package corcho.services;

import corcho.users.UserEstablec;
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
public class PerfilEstablec extends UserEstablec{
    
    private ArrayList<String> insignias;
    private String datosEsta;
    
        public String user = "root";
    public String password = "n0m3l0";
    public String db = "uxersii";
    public String port = "3306";
    public String dbURL = "jdbc:mysql://localhost:3306/uxersii";

   

   

   
    
    public boolean registroEst(String nombEST, String UbicacionEST,
            String passEST, String correoEST, String tel_est, String redesEST) throws SQLException, ClassNotFoundException{
        UserEstablec userestable = new UserEstablec();
        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;
        
        
        Class.forName("com.mysql.cj.jdbc.Driver");
         try {
             
             
             
        int row =0;
        int si = 0;
        conn = DriverManager.getConnection(dbURL, user , password);
        
             
        
                String query = "insert into usuario_establecimiento( nombre_est, cp_est, contra_est, correo_est, tel_est, link_redest) values(?,?,?,?,?,?)";
        stmt = conn.prepareStatement(query);
        stmt.setString(1, nombEST);
        stmt.setString(2, UbicacionEST);   
        stmt.setString(3, passEST);
        stmt.setString(4, correoEST);
        stmt.setString(5, tel_est);
        stmt.setString(6, redesEST);
        
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

    

    public void eliminacionEst(){

    }
    
   public boolean actualizarEST(String nombEST, String UbicacionEST,
        String passEST, String correoEST, String tel_est, String redesEST, String desc) throws SQLException, ClassNotFoundException {
    Connection conn = null;
    PreparedStatement stmt = null;
    ResultSet rs = null;

    try {
        // Carga del controlador de la base de datos
        Class.forName("com.mysql.cj.jdbc.Driver");

        // Establece la conexión con la base de datos
        conn = DriverManager.getConnection(dbURL, user, password);

        // Query de actualización
        String query = "update usuario_establecimiento set cp_est=?, contra_est=?, tel_est=?, link_redest=?, nombre_est=?, desc_est=? where correo_est=?";

        // Preparación de la sentencia SQL
        stmt = conn.prepareStatement(query);

        // Establece los parámetros de la consulta con los valores proporcionados
        stmt.setString(1, UbicacionEST);
        stmt.setString(2, passEST);
        stmt.setString(3, tel_est);
        stmt.setString(4, redesEST);
        stmt.setString(5, nombEST);
        stmt.setString(6, desc);
        stmt.setString(7, correoEST);

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

    
    public void LlenadoInfoEst(){
        
    }
    
    public void AsignaInsigEst(){
        
    }
    
    public void consultaEst(){
        
    }     
    
    public void AsignaInsigEsta(){
        
    }
    
}
