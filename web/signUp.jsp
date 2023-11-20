<%-- 
    Document   : singUp
    Created on : 22 oct. 2023, 19:06:30
    Author     : javis
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
                     
                     session.setAttribute("nombUserH", nombUserH);
                     session.setAttribute("apellidoP", apellidoP);
                     session.setAttribute("nombH", nombH);
                     session.setAttribute("apellidoM", apellidoM);
                     session.setAttribute("genero", genero);
                     session.setAttribute("passwH", passwH);
                     session.setAttribute("correoH", correoH);
                     session.setAttribute("fechNac", fechNac);
                     session.setAttribute("CPH", CPH);
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
        }else if("o".equals(tipo)){
        
        
         String nombORG = request.getParameter("nombORG");
         String UbicacionORG = request.getParameter("UbicacionORG");
         String passwORG = request.getParameter("passwORG");
         String correoORG = request.getParameter("correoORG");
         String contactoORG = request.getParameter("contactoORG");
         String RedesORG = request.getParameter("RedesORG");
         String idORG = request.getParameter("idORG");
         
                      System.out.println(correoORG);


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
        
             
        
                String consulta1 = "select count(*) from usuario_organizacion where correo_org = ?";
                String consulta2 = "select count(*) from usuario_organizacion where nombre_org= ?";
                String consulta3 = "select count(*) from usuario_organizacion where id_ofc= ?";
                String consulta4 = "select count(correo_org) from usuario_organizacion where id_ofc= ?";


                PreparedStatement pstmt1 = conn.prepareStatement(consulta1);
                pstmt1.setString(1, correoORG);
                PreparedStatement pstmt2 = conn.prepareStatement(consulta2);
                pstmt2.setString(1, nombORG);
                PreparedStatement pstmt3 = conn.prepareStatement(consulta3);
                pstmt3.setString(1, idORG);
                PreparedStatement pstmt4 = conn.prepareStatement(consulta4);
                pstmt4.setString(1, idORG);

                ResultSet rs1 = pstmt1.executeQuery();
                ResultSet rs2 = pstmt2.executeQuery();
                ResultSet rs3 = pstmt3.executeQuery();
                ResultSet rs4 = pstmt4.executeQuery();

                rs1.next();
                int count1 = rs1.getInt(1);
                rs2.next();
                int count2 = rs2.getInt(1);
                rs3.next();
                int count3 = rs3.getInt(1);
                rs4.next();
                int count4 = rs4.getInt(1);

               
                
               
                if (count1 > 0) {
                    boolean con1 = true;
                    response.setContentType("application/json");
                    response.setCharacterEncoding("UTF-8");

                    // Construye la respuesta JSON manualmente
                    String jsonResponse = "{ \"con1\": " + con1 + " }";

                    // Escribe la respuesta JSON
                    response.getWriter().write(jsonResponse);
                }else
                    if(count3 == 0){
                    boolean con2 = true;
                   response.setContentType("application/json");
                    response.setCharacterEncoding("UTF-8");

                    // Construye la respuesta JSON manualmente
                    String jsonResponse = "{ \"con2\": " + con2 + " }";

                    // Escribe la respuesta JSON
                    response.getWriter().write(jsonResponse);
                    }else if(count4 > 0){
                        boolean con4 = true;
                        
                    response.setContentType("application/json");
                    response.setCharacterEncoding("UTF-8");

                    // Construye la respuesta JSON manualmente
                    String jsonResponse = "{ \"con4\": " + con4 + " }";
                    response.getWriter().write(jsonResponse);
                    }else if(count3 > 0)
                      {
                        boolean con3 = true;
                            
                           
                     PerfilOrgani obj = new PerfilOrgani();
                     obj.registroOrg(nombORG, UbicacionORG, passwORG, correoORG, contactoORG, RedesORG, idORG);
                     session.setAttribute("nombORG", nombORG);
                     session.setAttribute("UbicacionORG", UbicacionORG);
                     session.setAttribute("passwORG", passwORG);
                     session.setAttribute("correoORG", correoORG);
                     session.setAttribute("contactoORG", contactoORG);
                     session.setAttribute("RedesORG", RedesORG);
                     session.setAttribute("idORG", idORG);
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
        
        }else if("e".equals(tipo)){
        
        
         String nombEST = request.getParameter("nombEST");
         String ubicacionEST = request.getParameter("ubicacionEST");
         String passEST = request.getParameter("passEST");
         String correoEST = request.getParameter("correoEST");
         String tel_est = request.getParameter("tel_est");
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
        
        
            String consulta1 = "select count(*) from usuario_establecimiento where correo_est = ?";
            String consulta2 = "select count(*) from usuario_establecimiento where nombre_est= ?";



                PreparedStatement pstmt1 = conn.prepareStatement(consulta1);
                pstmt1.setString(1, correoEST);
                PreparedStatement pstmt2 = conn.prepareStatement(consulta2);
                pstmt2.setString(1, nombEST);
               

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
                        }else{
                        boolean con3 = true;
                        response.setContentType("application/json");
                        response.setCharacterEncoding("UTF-8");

                        // Construye la respuesta JSON manualmente
                        String jsonResponse = "{ \"con3\": " + con3 + " }";

                        // Escribe la respuesta JSON
                        response.getWriter().write(jsonResponse);
                        
                        PerfilEstablec obj = new PerfilEstablec();
                        obj.registroEst(nombEST, ubicacionEST, passEST, correoEST, tel_est, redesEST);
                        session.setAttribute("nombEST", nombEST);
                        session.setAttribute("ubicacionEST", ubicacionEST);
                        session.setAttribute("passEST", passEST);
                        session.setAttribute("correoEST", correoEST);
                        session.setAttribute("tel_est", tel_est);
                        session.setAttribute("redesEST", redesEST);
    
                        
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
        
        }
        
        
        

    %>
   
