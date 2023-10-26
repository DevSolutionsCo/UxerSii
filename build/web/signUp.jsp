<%-- 
    Document   : singUp
    Created on : 22 oct. 2023, 19:06:30
    Author     : javis
--%>

<%@page import="corcho.services.PerfilHogar"%>
<%@page import="java.util.Date"%>
<%@page import="corcho.services.HogarService"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="corcho.users.UserHogar" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
    
    <%
        UserHogar userhogar;
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        
         String nombH = request.getParameter("nombH");
         String apellidoP = request.getParameter("apellidoP");
         String apellidoM = request.getParameter("apellidoM");
         String fechNac = request.getParameter("fechNac");
         String correoH = request.getParameter("correoH");
         String passwH = request.getParameter("passwH");
         String genero = request.getParameter("genero");
         String descH = request.getParameter("descH");
         String CPH = request.getParameter("CPH");
         
         
         java.util.Date utilDate = sdf.parse(fechNac);
            
            // Convierte el objeto java.util.Date a java.sql.Date
         java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());


         
         
         
         PerfilHogar obj = new PerfilHogar();
         obj.registroHog(correoH, nombH, apellidoP, apellidoM, descH, sqlDate, genero, passwH, CPH);

          response.sendRedirect("index.jsp");
        
         
    %>
    </body>
    
    
    
    
</html>
