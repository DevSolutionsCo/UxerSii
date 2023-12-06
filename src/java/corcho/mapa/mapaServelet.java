package corcho.mapa;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */

import corcho.mapa.puntosFijos.PuntoColecta;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author javis
 */
@WebServlet("/mapa")
public class mapaServelet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       // Obtén la lista de puntos desde el método que has creado
        List<PuntoColecta> puntos = null;
        try {
            puntos = puntosFijos.obtenerPuntosFijos();
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(mapaServelet.class.getName()).log(Level.SEVERE, null, ex);
        }

        // Construye la cadena JSON manualmente
        StringBuilder puntosJson = new StringBuilder("[");
        for (PuntoColecta punto : puntos) {
            puntosJson.append("{");
            puntosJson.append("\"id\":").append(punto.getId()).append(",");
            puntosJson.append("\"nombre\":\"").append(punto.getNombre()).append("\",");
            puntosJson.append("\"latitud\":").append(punto.getLatitud()).append(",");
            puntosJson.append("\"longitud\":").append(punto.getLongitud());
            // ... otros campos ...

            // No agregues la coma si es el último objeto en la lista
            if (puntos.indexOf(punto) == puntos.size() - 1) {
                puntosJson.append("}");
            } else {
                puntosJson.append("},");
            }
        }
        puntosJson.append("]");


        System.out.println("puntosColectaJson: " + puntosJson.toString());

        // Guarda la cadena JSON en el ámbito de solicitud
        request.setAttribute("puntosColectaJson", puntosJson.toString());

        // Redirige a tu JSP
        request.getRequestDispatcher("/mapaUser.jsp").forward(request, response);
    }
 
}


