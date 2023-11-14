<!-- <%--
    Document   : index
    Created on : 25 oct. 2023, 19:48:00
    Author     : javis
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%> -->
<!DOCTYPE html>
<html>
  <head>
    <title>UxerSii</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles/MainStyle.css" />
    <link rel="stylesheet" href="indexStyle.css" />
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <script src="https://kit.fontawesome.com/83ffb1b5fc.js" crossorigin="anonymous"></script>
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
          <!-- INCIO DE MODAL PERFIL -->

          <button class="b-perfil-ma" id="abrirModalBtn"> <img src=" asa" class="user-avatar"/></button>
          <div id="miModal" class="modal">
            <div class="modal-contenido">
                <span class="cerrar" onclick="cerrarModal()">&times;</span>
                <p class="text-perfil">Perfil</p>
                <div class="card">
                  <div class="fperfil">
                      <img src="resources/Logo-uxersii.svg" alt="">
                  </div>
                  <div class="content">
                      <h2>Cris Molina</h2>
                      <p>Desperdicio cero</p>
                      <div class="center">
                          <div class="box">
                              <h2>Mi perfil</h2>
                              <p>Configuracion de cuenta</p>
                          </div>
                      </div>
                      <button class="btn">Cerrar sesion</button>
                  </div>
               </div>
            </div>
          </div>

          <!-- FIN DE MODAL PERFIL -->
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



<script src="ventana-perfil.js"></script>

    <script src="main.js"></script>
  </body>
</html>