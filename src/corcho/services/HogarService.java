/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package corcho.services;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.sql.DriverManager;
import corcho.users.UserHogar;
import java.text.SimpleDateFormat;

/**
 *
 * @author javis
 */
public class HogarService{
    
// Crea un objeto SimpleDateFormat con el formato deseado
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

// Convierte la fecha a String usando el formato especificado

        public String user = "root";
    public String password = "n0m3l0";
    public String db = "uxersii";
    public String port = "3306";
    public String dbURL = "jdbc:mysql://localhost:3306/uxersii";
    
    public void agregarHogar(String correoH, String nombH,
            String apellidoPaterno, String apellidoMaterno, String descripH, Date fechaNacimiento,
            String genero, String contrasenaH, String nombUserH, String codigoPostal) throws SQLException, ClassNotFoundException{
        UserHogar userhogar = new UserHogar();
        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;
        
        
        Class.forName("com.mysql.cj.jdbc.Driver");
         try {
             
             
             
        int row =0;
        int si = 0;
        conn = DriverManager.getConnection(dbURL, user , password);
        
             
        
        String query = "insert into usuario_hogar( correo_hog, nombre_hog, apellido_pat, apellido_mat, desc_hog, fecha_nac, genero, contra_hog, nombUserH, codigoPostal) values(?,?,?,?,?,?,?,?,?,?)";
        stmt = conn.prepareStatement(query);
        stmt.setString(1, correoH);
        stmt.setString(2, nombH);
        stmt.setString(3, apellidoPaterno);
        stmt.setString(4, apellidoMaterno);
        stmt.setString(5, descripH);
        stmt.setDate(6, (Date) fechaNacimiento);
        stmt.setString(7, genero);
        stmt.setString(8, contrasenaH);
        stmt.setString(9, nombUserH);
        stmt.setString(10, codigoPostal);
        
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
    
    }
}
