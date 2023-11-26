<%-- 
    Document   : index
    Created on : 25 nov. 2023, 19:11:05
    Author     : javis
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="javax.servlet.http.HttpSession" %>

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="styles/indexStyle.css" />
    <link
      rel="shortcut icon"
      href="resources/Logo-uxersii.svg"
      type="image/x-icon"
    />
    <title>UxerSii</title>
  </head>
  <body>
      
      <%

    // Verificar si la sesión existe antes de invalidarla
    
        session.invalidate();
        
      %>
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="resources/Logo-uxersii.svg"
            alt="Logo"
            width="70"
            height="64"
            class="d-inline-block align-text-middle fw-bold"
          />
          UxerSii
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px"
          >
            <li class="nav-item">
              <a class="nav-link" href="#UsarApp">¿Como usar la app?</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tipos de cuenta
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Hogar</a></li>

                <li><a class="dropdown-item" href="#">Establecimientos</a></li>
              </ul>
            </li>
          </ul>
          <div class="dropdown">
            <button id="cuentaButton" class="border-button">
              Crear cuenta
            </button>
            <div id="cuentaDropdown" class="dropdown-content">
              <a href="loginH.html">Hogar</a>
              <a href="loginE.html">Establecimiento</a>
            </div>
          </div>
          <a href="signUp.html">
            <button type="button" class="border-button">Iniciar Sesion</button>
          </a>
        </div>
      </div>
    </nav>
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->

    <section class="container my-5">
      <h1>¿Qué es UxerSii?</h1>
      <div class="contenedor">
        <p>
          Es una aplicacion que busca crear un impacto en el medio ambiente
          ayudando a que no se desperdicie tanta comida.
        </p>
        <img
          src="https://via.placeholder.com/200x200"
          class="img-fluid"
          alt="..."
        />
      </div>
    </section>

    <section class="bg-light py-5">
      <div class="container">
        <h2 class="text-center">¿Cuál es el objetivo de UxerSii?</h2>
        <div class="contenedor">
          <img
            src="https://via.placeholder.com/200x200"
            class="img-fluid"
            alt="..."
          />
          <p>
            Buscamos ayudar a concientizar del impacto ambiental que genera el
            desperdiciar tanta comida, tambien se busca reducir drasticamente el
            desperdicio de comida.
          </p>
        </div>
      </div>
    </section>

    <section class="container my-5" id="UsarApp">
      <h2 class="pb-4 text-center">¿Cómo usar la app?</h2>

      <!-- Agrega un enlace para descargar el PDF -->
      <div style="display: flex; justify-content: center">
        <iframe
          src="https://drive.google.com/file/d/1fxDFCF_KQBIZ92SpnT4rtbn4nfV6XWcU/preview"
          width="640"
          height="480"
          allow="autoplay"
          style="margin: 0 auto"
        ></iframe>
      </div>
    </section>

    <script src="scripts/indexjs.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
