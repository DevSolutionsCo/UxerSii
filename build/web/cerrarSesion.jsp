<%-- 
    Document   : cerrarSesion
    Created on : Dec 7, 2023, 12:23:55?AM
    Author     : sebas
--%>

<%
 HttpSession session1 = request.getSession(false);
    if (session1 != null) {
        session1.invalidate();
    }    

%>