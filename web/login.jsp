<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    />
    <link rel="stylesheet" href="styles/style.css" />
    <!-- Incluye SweetAlert2 CSS y JS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.all.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <title>login</title>
  </head>

  <body>
    <div class="container" id="container">
      <div class="form-container sign-up">
        <article id="form-container">
          <h1 class="text-crear" id="Create-acc">Crear cuenta</h1>
          <h3 id="textitoborra">Selecciona tu tipo de usuario</h3>
          <button id="viewform-hogar">Hogar</button>
          <div id="form-hogar"></div>
          <button id="viewform-org">Organizacion</button>
          <div id="form-org"></div>
          <button id="viewform-est">Establecimiento</button>
          <div id="form-est"></div>
        </article>
      </div>
      <div class="form-container sign-in">
        <article>
          <h1>Inicio de sesión</h1>

          <span>Ingresa tus credenciales</span>
          <input type="email" placeholder="Correo electronico" />
          <input type="password" placeholder="ContraseÃ±a" />

          <button>Inicio de sesion</button>
        </article>
      </div>
      <div class="toggle-container">
        <div class="toggle">
          <div class="toggle-panel toggle-left">
            <h1>¡Bienvenido de vuelta!</h1>
            <p>Inicia sesión con una cuenta ya existente</p>
            <button class="hidden" id="login">Inicio de sesion</button>
          </div>
          <div class="toggle-panel toggle-right">
            <h1>¡Hola!</h1>
            <p>Registrate si aún no tienes una cuenta</p>
            <button class="hidden" id="register">Crear cuenta</button>
          </div>
        </div>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>
