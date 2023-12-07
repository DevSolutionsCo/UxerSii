/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package corcho.alimentos;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/AgregarAlimentoController")
public class AgregarAlimentoController extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Obtener los parámetros del formulario
        String nombre = request.getParameter("customNombre");
        String fechaCaducidadStr = request.getParameter("customFecha");
        int cantidad = Integer.parseInt(request.getParameter("customCantidad"));

        Connection connection = null;
        try {
            // Establecer conexión con la base de datos (ajusta según tu configuración)
            Class.forName("com.mysql.cj.jdbc.Driver");
            String jdbcUrl = "jdbc:mysql://localhost:3306/uxersii";
            String usuario = "root";
            String contraseña = "1234";
            connection = DriverManager.getConnection(jdbcUrl, usuario, contraseña);

            // Convertir la cadena de fecha a un objeto Date
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            Date fechaCaducidad = dateFormat.parse(fechaCaducidadStr);

            // Preparar la consulta SQL para insertar los datos
            String sql = "insert into alimentos (nomb_alim, fecha_cad, cantidad) VALUES (?, ?, ?)";
            try (PreparedStatement statement = connection.prepareStatement(sql)) {
                statement.setString(1, nombre);
                statement.setDate(2, new java.sql.Date(fechaCaducidad.getTime()));
                statement.setInt(3, cantidad);

                // Ejecutar la consulta
                statement.executeUpdate();
            }

            // Respondemos al cliente (puedes enviar un JSON u otra respuesta según tus necesidades)
            response.setContentType("application/json");
            PrintWriter out = response.getWriter();
            out.print("{ \"status\": \"success\" }");
            out.flush();
        } catch (ClassNotFoundException | SQLException | ParseException e) {
            // Manejar errores (puedes enviar un JSON u otra respuesta según tus necesidades)
            e.printStackTrace();
            response.setContentType("application/json");
            PrintWriter out = response.getWriter();
            out.print("{ \"status\": \"error\", \"message\": \"Error al agregar el alimento\" }");
            out.flush();
        } finally {
            // Cerrar la conexión
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}

