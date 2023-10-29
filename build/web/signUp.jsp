<%-- 
    Document   : singUp
    Created on : 22 oct. 2023, 19:06:30
    Author     : javis
--%>

<%@page import="corcho.conecction.Conexion"%>
<%@page import="corcho.services.PerfilHogar"%>
<%@page import="java.util.Date"%>
<%@page import="corcho.services.HogarService"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="corcho.users.UserHogar" %>
<%@ page import="java.sql.*" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

    
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
         String nombUserH = request.getParameter("nombUserH");
         String CPH = request.getParameter("CPH");
         
         
         java.util.Date utilDate = sdf.parse(fechNac);
            
            // Convierte el objeto java.util.Date a java.sql.Date
         java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());

         Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;
        Conexion con = new Conexion() {};
        
        
        Class.forName("com.mysql.cj.jdbc.Driver");
         try {
             
             
             
        int row =0;
        int si = 0;
        conn = DriverManager.getConnection(con.getDbURL(), con.user , con.password);
        
             
        
                String consulta1 = "select count(*) from usuario_hogar where correo_hog = ?";
                String consulta2 = "select count(*) from usuario_hogar where nombUserH= ?";


                PreparedStatement pstmt1 = conn.prepareStatement(consulta1);
                pstmt1.setString(1, correoH);
                PreparedStatement pstmt2 = conn.prepareStatement(consulta2);
                pstmt2.setString(1, nombUserH);

                ResultSet rs1 = pstmt1.executeQuery();
                ResultSet rs2 = pstmt2.executeQuery();

                rs1.next();
                int count1 = rs1.getInt(1);
                rs2.next();
                int count2 = rs2.getInt(1);

               
                
               
                if (count1 > 0) {
                    boolean con1 = true;
                    response.setContentType("application/json");
                    response.setCharacterEncoding("UTF-8");

                    // Construye la respuesta JSON manualmente
                    String jsonResponse = "{ \"con1\": " + con1 + " }";

                    // Escribe la respuesta JSON
                    response.getWriter().write(jsonResponse);
                }else
                    if(count2 > 0){
                    boolean con2 = true;
                   response.setContentType("application/json");
                    response.setCharacterEncoding("UTF-8");

                    // Construye la respuesta JSON manualmente
                    String jsonResponse = "{ \"con2\": " + con2 + " }";

                    // Escribe la respuesta JSON
                    response.getWriter().write(jsonResponse);
                    }else
                      {
                        boolean con3 = true;
                            
                     PerfilHogar obj = new PerfilHogar();
                     obj.registroHog(correoH, nombH, apellidoP, apellidoM, nombUserH, sqlDate, genero, passwH, CPH);
                     
                    response.setContentType("application/json");
                    response.setCharacterEncoding("UTF-8");

                    // Construye la respuesta JSON manualmente
                    String jsonResponse = "{ \"con3\": " + con3 + " }";

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
         

    %>
   
