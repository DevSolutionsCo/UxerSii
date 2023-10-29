<%-- 
    Document   : index
    Created on : 25 oct. 2023, 19:48:00
    Author     : javis
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <title>UxerSii</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<<<<<<< Updated upstream:web/main.jsp
    <link rel="stylesheet" href="styles/MainStyle.css" />
=======
    <link rel="stylesheet" href="indexStyle.css" />
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
>>>>>>> Stashed changes:web/index.jsp
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
  </head>
  <body>
    <div class="navbar">
      <div class="burger-icon" id="burger-icon">
        <i class="material-icons">menu</i>
      </div>
      <div class="user-info">
        <div class="user-details">
          <i class="material-icons">notifications</i>
          <i class="material-icons">chat</i>
          <img src=" asa" class="user-avatar" />
          <div class="user-name">Hola, UxerSiito</div>
          <button class="dropdown-button">
            <i class="material-icons" style="padding: 0px 0px"
              >keyboard_arrow_down</i
            >
          </button>
        </div>
      </div>
    </div>

    <!-- Fin de la navbar / Inicio de la sidebar -->

    <div class="sidebar" id="sidebar">
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Perfil</a></li>
        <li><a href="#">Configuración</a></li>
      </ul>
    </div>
    <script src="main.js"></script>
  </body>
</html>