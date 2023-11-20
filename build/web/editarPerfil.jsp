<%-- 
    Document   : editarPerfil
    Created on : 18 nov 2023, 21:53:06
    Author     : ruizl
--%>

<%@page import="corcho.services.PerfilEstablec"%>
<%@page import="corcho.services.PerfilHogar"%>
<%@page import="corcho.services.PerfilOrgani"%>
<%@page import="java.util.Date"%>
<%@page import="corcho.services.HogarService"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="corcho.users.UserHogar" %>
<%@page import="corcho.users.UserOrgani" %>
<%@ page import="java.sql.*" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%
        

        String tipo = request.getParameter("tipo");
        
        
        if("h".equals(tipo)){
        UserHogar userhogar;
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        
         String nombH = request.getParameter("nombH");
         String apellidoP = request.getParameter("apellidoP");
         String apellidoM = request.getParameter("apellidoM");
         String fechNac = request.getParameter("fechNac");
         String correoH = request.getParameter("correoH");
         String passwH = request.getParameter("passwH");
         String desc_hog = request.getParameter("desc_hog"); 
         System.out.println(correoH);
         String genero = request.getParameter("genero");
         String nombUserH = request.getParameter("nombUserH");
         String CPH = request.getParameter("CPH");
         
         
         
         java.util.Date utilDate = sdf.parse(fechNac);
            
            // Convierte el objeto java.util.Date a java.sql.Date
         java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());

         Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;
    String user = "root";
    String password = "n0m3l0";
    String db = "uxersii";
    String port = "3306";
    String dbURL = "jdbc:mysql://localhost:3306/uxersii";        
        
        Class.forName("com.mysql.cj.jdbc.Driver");
        try {   
        int row =0;
        int si = 0;
        conn = DriverManager.getConnection(dbURL, user , password);
        String consulta1 = "select count(*) from usuario_hogar where nombUserH = ? and nombUserH != ?";
PreparedStatement pstmt1 = conn.prepareStatement(consulta1);
pstmt1.setString(1, nombUserH);
pstmt1.setString(2, (String) session.getAttribute("nombUserH"));

        ResultSet rs1 = pstmt1.executeQuery();
        
        rs1.next();
        int count1 = rs1.getInt(1);        

        if (count1 > 0) {
        boolean con1 = true;
        
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        // Construye la respuesta JSON manualmente
        String jsonResponse = "{ \"con1\": " + con1 + " }";
        // Escribe la respuesta JSON
        response.getWriter().write(jsonResponse);
    }else{
    boolean con2 = true;
    System.out.println(desc_hog);
    PerfilHogar obj = new PerfilHogar();
    obj.actualizarHogar(correoH, nombH, apellidoP, apellidoM, nombUserH, sqlDate, genero, passwH, CPH, desc_hog);
    
    session.setAttribute("nombUserH", nombUserH);
                     session.setAttribute("apellidoP", apellidoP);
                     session.setAttribute("nombH", nombH);
                     session.setAttribute("apellidoM", apellidoM);
                     session.setAttribute("genero", genero);
                     session.setAttribute("passwH", passwH);
                     session.setAttribute("correoH", correoH);
                     session.setAttribute("fechNac", fechNac);
                     session.setAttribute("CPH", CPH);
                    session.setAttribute("desc_hog", desc_hog);
                    response.setContentType("application/json");
                    response.setCharacterEncoding("UTF-8");

                    // Construye la respuesta JSON manualmente
                    String jsonResponse = "{ \"con2\": " + con2 + " }";

                    // Escribe la respuesta JSON
                    response.getWriter().write(jsonResponse);
                    }
                    
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
    }else if ("e".equals(tipo)) {
   String nombEST = request.getParameter("nombEST");
         String ubicacionEST = request.getParameter("ubicacionEST");
         String passEST = request.getParameter("passEST");
         String correoEST = request.getParameter("correoEST");
         String tel_est = request.getParameter("tel_est");
         String desc_est = request.getParameter("desc_est");
         String redesEST = request.getParameter("redesEST");
         Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;
    String user = "root";
    String password = "n0m3l0";
    String db = "uxersii";
    String port = "3306";
    String dbURL = "jdbc:mysql://localhost:3306/uxersii";        
        
        Class.forName("com.mysql.cj.jdbc.Driver");
        try {   
        int row =0;
        int si = 0;
        conn = DriverManager.getConnection(dbURL, user , password);
        String consulta1 = "select count(*) from usuario_establecimiento where nombre_est= ? and nombre_est!=?";
        PreparedStatement pstmt1 = conn.prepareStatement(consulta1);
        pstmt1.setString(1, nombEST);
        pstmt1.setString(2, (String) session.getAttribute("nombre_est"));
                
        ResultSet rs1 = pstmt1.executeQuery();
        
        rs1.next();
        int count1 = rs1.getInt(1);        

        if (count1 > 0) {
        boolean con1 = true;
        
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        // Construye la respuesta JSON manualmente
        String jsonResponse = "{ \"con1\": " + con1 + " }";
        // Escribe la respuesta JSON
        response.getWriter().write(jsonResponse);
    }else{
    boolean con2 = true;
    response.setContentType("application/json");
    response.setCharacterEncoding("UTF-8");
    // Construye la respuesta JSON manualmente
    String jsonResponse = "{ \"con2\": " + con2 + " }";
    // Escribe la respuesta JSON
    response.getWriter().write(jsonResponse);
    }
    PerfilEstablec obj = new PerfilEstablec();
    obj.actualizarEST(nombEST, ubicacionEST, passEST, correoEST, tel_est, redesEST, desc_est);
    session.setAttribute("nombEST", nombEST);
    session.setAttribute("ubicacionEST", ubicacionEST);
    session.setAttribute("passEST", passEST);
    session.setAttribute("correoEST", correoEST);
    session.setAttribute("tel_est", tel_est);
    session.setAttribute("redesEST", redesEST);
    session.setAttribute("desc_est", desc_est);
        }catch (Exception e) {
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
%>
