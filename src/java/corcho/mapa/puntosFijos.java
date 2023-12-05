/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package corcho.mapa;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class puntosFijos {

    // URL de conexión a la base de datos
    public static String user = "root";
    public static String password = "1234";
    public String db = "uxersii";
    public String port = "3306";
    public static String dbURL = "jdbc:mysql://localhost:3306/uxersii";

    public static List<PuntoColecta> obtenerPuntosFijos() throws ClassNotFoundException {
        List<PuntoColecta> puntosColectaList = new ArrayList<>();

        Class.forName("com.mysql.cj.jdbc.Driver");
           
        try (Connection connection = DriverManager.getConnection(dbURL, user, password);
             PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM puntos_colecta");
             ResultSet resultSet = preparedStatement.executeQuery()) {

            while (resultSet.next()) {
                PuntoColecta punto = new PuntoColecta(
                        resultSet.getInt("id_punto"),
                        resultSet.getString("nomb_punto"),
                        resultSet.getDouble("latitud"),
                        resultSet.getDouble("longitud"),
                        resultSet.getString("responsable"),
                        resultSet.getDouble("almacenamiento"),
                        resultSet.getString("horario"),
                        resultSet.getDate("fecha_de_creacion"),
                        resultSet.getString("estado"),
                        resultSet.getString("descripcion")
                );

                puntosColectaList.add(punto);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return puntosColectaList;
    }

    public static void main(String[] args) throws ClassNotFoundException {
        List<PuntoColecta> puntos = obtenerPuntosFijos();

        // Puedes utilizar la lista de puntos como desees
        for (PuntoColecta punto : puntos) {
            System.out.println(punto);
        }
    }


public static class PuntoColecta {
    private int id;
    private String nombre;
    private double latitud;
    private double longitud;
    private String responsable;
    private double almacenamiento;
    private String horario;
    private Date fechaCreacion;
    private String estado;
    private String descripcion;

    // Constructor, getters y setters

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getNombre() {
            return nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public double getLatitud() {
            return latitud;
        }

        public void setLatitud(double latitud) {
            this.latitud = latitud;
        }

        public double getLongitud() {
            return longitud;
        }

        public void setLongitud(double longitud) {
            this.longitud = longitud;
        }

        public String getResponsable() {
            return responsable;
        }

        public void setResponsable(String responsable) {
            this.responsable = responsable;
        }

        public double getAlmacenamiento() {
            return almacenamiento;
        }

        public void setAlmacenamiento(double almacenamiento) {
            this.almacenamiento = almacenamiento;
        }

        public String getHorario() {
            return horario;
        }

        public void setHorario(String horario) {
            this.horario = horario;
        }

        public Date getFechaCreacion() {
            return fechaCreacion;
        }

        public void setFechaCreacion(Date fechaCreacion) {
            this.fechaCreacion = fechaCreacion;
        }

        public String getEstado() {
            return estado;
        }

        public void setEstado(String estado) {
            this.estado = estado;
        }

        public String getDescripcion() {
            return descripcion;
        }

        public void setDescripcion(String descripcion) {
            this.descripcion = descripcion;
        }

        
    
        public PuntoColecta(int id, String nombre, double latitud, double longitud, String responsable, double almacenamiento, String horario, Date fechaCreacion, String estado, String descripcion) {
            this.id = id;
            this.nombre = nombre;
            this.latitud = latitud;
            this.longitud = longitud;
            this.responsable = responsable;
            this.almacenamiento = almacenamiento;
            this.horario = horario;
            this.fechaCreacion = fechaCreacion;
            this.estado = estado;
            this.descripcion = descripcion;
        }

    
        
    
    @Override
    public String toString() {
        return "PuntoColecta{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", latitud=" + latitud +
                ", longitud=" + longitud +
                ", responsable='" + responsable + '\'' +
                ", almacenamiento=" + almacenamiento +
                ", horario='" + horario + '\'' +
                ", fechaCreacion=" + fechaCreacion +
                ", estado='" + estado + '\'' +
                ", descripcion='" + descripcion + '\'' +
                '}';
    }
    }

}