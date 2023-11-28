<%-- 
    Document   : GuardarMensajeA
    Created on : 25 nov. 2023, 23:19:34
    Author     : javis
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="corcho.chat.MessageDAO" %>
<%@ page import="java.util.Random" %>
<%
        
        
        int id_user = (int) session.getAttribute("id_admin");
        String sender = null, tipoU = null;
        
        String nombre_admin = (String) session.getAttribute("nombre_admin");
        
        
        
    if(nombre_admin != null){
         sender = nombre_admin;
         tipoU = "hogar";
    }
    String messageContent = request.getParameter("content");
    int iduser = Integer.parseInt(request.getParameter("iduser"));

    if (messageContent != null && !messageContent.trim().isEmpty()) {
        // Guardar el mensaje en la base de datos utilizando tu clase MessageDAO
        MessageDAO messageDAO = new MessageDAO();
        messageDAO.saveMessage(sender, messageContent, tipoU, iduser, id_user);

        // Puedes imprimir un mensaje de éxito o redirigir a una página de éxito
        out.println("Mensaje guardado correctamente");
    } else {
        // Puedes imprimir un mensaje de error o redirigir a una página de error
        out.println("Error al guardar el mensaje: el contenido está vacío");
    }



%>