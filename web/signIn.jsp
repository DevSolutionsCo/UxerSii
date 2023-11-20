<%-- 
    Document   : signIn
    Created on : 15 nov. 2023, 20:11:52
    Author     : javis
--%>

<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%
    
    String correoIN = request.getParameter("correoIN");
    String passIN = request.getParameter("passIN");
    
    System.out.println(correoIN);
    System.out.println(passIN);
    
    
    if(correoIN != null){
        Connection conn = null;
        PreparedStatement pstmt1 = null;
        PreparedStatement pstmt2 = null;
        PreparedStatement pstmt3 = null;
        ResultSet rs1 = null;
        ResultSet rs2 = null;
        ResultSet rs3 = null;
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
        
             
        
                String consulta1 = "select * from usuario_hogar where correo_hog = ? and contra_hog = ?";
                String consulta2 = "select * from usuario_establecimiento where correo_est = ? and contra_est = ?";
                String consulta3 = "select * from usuario_organizacion where correo_org = ? and contra_org = ?";


                pstmt1 = conn.prepareStatement(consulta1);
                pstmt1.setString(1, correoIN);
                pstmt1.setString(2, passIN);
                
                pstmt2 = conn.prepareStatement(consulta2);
                pstmt2.setString(1, correoIN);
                pstmt2.setString(2, passIN);
                
                pstmt3 = conn.prepareStatement(consulta3);
                pstmt3.setString(1, correoIN);
                pstmt3.setString(2, passIN);
                

                rs1 = pstmt1.executeQuery();
                rs2 = pstmt2.executeQuery();
                rs3 = pstmt3.executeQuery();               

               
                
               
                if (rs1.next()) {
                
                    String nombre_hog = rs1.getString("nombre_hog");
                    String apellido_mat = rs1.getString("apellido_mat");
                    String apellido_pat = rs1.getString("apellido_pat");
                    String correo_hog = rs1.getString("correo_hog");
                    String contra_hog = rs1.getString("contra_hog");
                    String desc_hog = rs1.getString("desc_hog");
                    String genero = rs1.getString("genero");
                    String nombUserH = rs1.getString("nombUserH");
                    String codigoPostal = rs1.getString("codigoPostal");
                    String fechNac = rs1.getString("fecha_nac");
                    
                    
                     session.setAttribute("nombUserH", nombUserH);
                     session.setAttribute("apellidoP", apellido_pat);
                     session.setAttribute("nombH", nombre_hog);
                     session.setAttribute("apellidoM", apellido_mat);
                     session.setAttribute("genero", genero);
                     session.setAttribute("passwH", contra_hog);
                     session.setAttribute("correoH", correo_hog);
                     session.setAttribute("desc_hog", desc_hog);
                     session.setAttribute("fechNac", fechNac);
                     session.setAttribute("CPH", codigoPostal);
                    
                    boolean con1 = true;
                    response.setContentType("application/json");
                    response.setCharacterEncoding("UTF-8");

                    // Construye la respuesta JSON manualmente
                    String jsonResponse = "{ \"con1\": " + con1 + " }";

                    // Escribe la respuesta JSON
                    response.getWriter().write(jsonResponse);
                }else
                    if(rs2.next()){
                    
                    String nombre_est = rs2.getString("nombre_est");
                    String tel_est = rs2.getString("tel_est");
                    String correo_est = rs2.getString("correo_est");
                    String contra_est = rs2.getString("contra_est");
                    String link_redest = rs2.getString("link_redest");
                    String desc_est = rs2.getString("desc_est");
                    String cp_est = rs2.getString("cp_est");
                   
                    
                    
                        session.setAttribute("nombEST", nombre_est);
                        session.setAttribute("ubicacionEST", cp_est);
                        session.setAttribute("passEST", contra_est);
                        session.setAttribute("correoEST", correo_est);
                        session.setAttribute("tel_est", tel_est);
                        session.setAttribute("redesEST", link_redest);
                        session.setAttribute("desc_est", desc_est);
                    
                    
                    boolean con2 = true;
                   response.setContentType("application/json");
                    response.setCharacterEncoding("UTF-8");

                    // Construye la respuesta JSON manualmente
                    String jsonResponse = "{ \"con2\": " + con2 + " }";

                    // Escribe la respuesta JSON
                    response.getWriter().write(jsonResponse);
                    }else
                      if(rs3.next()){
                    
                      String id_ofc = rs3.getString("id_ofc");
                    String nombre_org = rs3.getString("nombre_org");
                    String cp_org = rs3.getString("cp_org");
                    String contra_org = rs3.getString("contra_org");
                    String correo_org = rs3.getString("correo_org");
                    String desc_org = rs3.getString("desc_org");
                    String tel_org = rs3.getString("tel_org");
                    String link_org = rs3.getString("link_org");
                    
                    session.setAttribute("nombORG", nombre_org);
                     session.setAttribute("UbicacionORG", cp_org);
                     session.setAttribute("passwORG", contra_org);
                     session.setAttribute("correoORG", correo_org);
                     session.setAttribute("contactoORG", tel_org);
                     session.setAttribute("RedesORG", link_org);
                     session.setAttribute("id_ofc", id_ofc);
                     session.setAttribute("desc_org", desc_org);
                    
                      
                        boolean con3 = true;
                            
                     
                    response.setContentType("application/json");
                    response.setCharacterEncoding("UTF-8");

                    // Construye la respuesta JSON manualmente
                    String jsonResponse = "{ \"con3\": " + con3 + " }";

                    // Escribe la respuesta JSON
                    response.getWriter().write(jsonResponse);
                    }else{
                        boolean con4 = true;
                            
                     
                        response.setContentType("application/json");
                        response.setCharacterEncoding("UTF-8");

                        // Construye la respuesta JSON manualmente
                        String jsonResponse = "{ \"con4\": " + con4 + " }";

                        // Escribe la respuesta JSON
                        response.getWriter().write(jsonResponse);
                    }
                    
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                if (rs1 != null) {
                    rs1.close();
                }
                if (rs2 != null) {
                    rs2.close();
                }
                if (rs2 != null) {
                    rs2.close();
                }
                if (pstmt1 != null) {
                    pstmt1.close();
                }
                if (pstmt2 != null) {
                    pstmt2.close();
                }
                if (pstmt3 != null) {
                    pstmt3.close();
                }
                if (conn != null) {
                    conn.close();
                }
            
    
            }
    }

%>