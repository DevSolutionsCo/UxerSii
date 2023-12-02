<%-- 
    Document   : GuardarMensaje
    Created on : 25 nov. 2023, 18:09:33
    Author     : javis
--%>
<%@ page import="corcho.chat.MessageDAO" %>
<%@ page import="java.util.Random" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
        
        String userH = (String) session.getAttribute("nombUserH"); 
        String userE = (String) session.getAttribute("nombEST"); 
        int id_user = (int) session.getAttribute("id_user");
        String sender = null, tipoU = null;
        
        Integer idAdmin = (Integer) session.getAttribute("idAdmin");
        
        if (idAdmin == null) {
            // Generar un número aleatorio en el rango de 1 a 4
            idAdmin = new Random().nextInt(4) + 1;
            session.setAttribute("idAdmin", idAdmin);
        }

        if(userH != null){
         sender = userH;
         tipoU = "hogar";
    }else if(userE != null){
         sender = userE;
         tipoU = "establecimiento";
    }
    String messageContent = request.getParameter("content");
    String time = request.getParameter("time");
    System.out.println(time);
    if (messageContent != null && !messageContent.trim().isEmpty()) {
        // Guardar el mensaje en la base de datos utilizando tu clase MessageDAO
        MessageDAO messageDAO = new MessageDAO();
        messageDAO.saveMessage(sender, messageContent, tipoU, id_user, idAdmin, time);

        // Puedes imprimir un mensaje de éxito o redirigir a una página de éxito
        out.println("Mensaje guardado correctamente");
    } else {
        // Puedes imprimir un mensaje de error o redirigir a una página de error
        out.println("Error al guardar el mensaje: el contenido está vacío");
    }



%>