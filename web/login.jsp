<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="stylesheet" href="styles/cuentas.css" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css"
    />

    <title>UxerSii</title>
    <link rel="icon" type="image/jpg" href="resources/Logo-uxersii.svg" />
  </head>
  <body>
    <div class="wrapper">
      <div class="container main">
        <div class="row">
          <div class="col-md-6 side-image">
            <!-------Image-------->

            <div class="text"></div>
          </div>
          <div class="col-md-6 right flexsillo">
            <div class="input-box">
              <header>Inicia sesion</header>
              <form id="registro-est">
                <div class="input-field">
                  <input
                    type="email"
                    placeholder="Correo electronico"
                    name="correoIN"
                    class="input"
                  />
                </div>
                <div class="input-field">
                  <input
                    type="password"
                    placeholder="Contraseña"
                    name="passIN"
                    class="input"
                  />
                </div>

                <div class="nose">
                  <button type="submit" class="boton" id="bsignIN">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
      function clicksillo() {
        var text = document.getElementById("span-fecha");
        text.classList.add("none");
      }
    </script>
    <script src="script.js"></script>
  </body>
</html>
