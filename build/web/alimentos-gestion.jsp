<%-- Document : alimentos-gestion Created on : Nov 20, 2023, 8:38:35 AM Author :
sebas --%> <%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
    />
    <link rel="stylesheet" href="styles/amin-gestion.css" />
    <title>Gestion de alimentos</title>
  </head>
  <body>
    <div class="TODOwriteContent">
      <div class="div-tabla">
        <div class="textos">
          <div class="botondivgest">
            <p>Productos disponibles</p>
            <button type="button" class="btn btn-outline-dark" id="customBtn">
              Agregar alimento
            </button>
          </div>
          <span>Inventario</span>
        </div>
        <div
          class="modal fade"
          id="customModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="customModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="customModalLabel">
                  Agregar Alimento
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <!-- Formulario aquí -->
                <form id="customForm">
                  <div class="form-group">
                    <label for="customNombre">Nombre del Alimento:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="customNombre"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="customFecha">Fecha de Caducidad:</label>
                    <input
                      type="date"
                      class="form-control"
                      id="customFecha"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="customCantidad">Cantidad:</label>
                    <input
                      type="number"
                      class="form-control"
                      id="customCantidad"
                      required
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="tablita">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Nombre del alimento</th>
                <th scope="col">Fecha de caducidad</th>
                <th scope="col">Estatus</th>
                <th scope="col">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <span class="material-symbols-outlined"> edit_square </span>
                </th>
                <td>Maruchan</td>
                <td>22/22/22</td>
                <td class="center-vertical">
                  <button type="button" class="btn btn-warning">
                    Pronto a expirar
                  </button>
                </td>
                <td>5</td>
              </tr>
              <tr>
                <th scope="row">
                  <span class="material-symbols-outlined"> edit_square </span>
                </th>
                <td>Maruchan</td>
                <td>22/22/22</td>
                <td class="center-vertical">
                  <button type="button" class="btn btn-success">
                    Consumible
                  </button>
                </td>
                <td>5</td>
              </tr>

              <tr>
                <th scope="row">
                  <span class="material-symbols-outlined"> edit_square </span>
                </th>
                <td>Maruchan</td>
                <td>22/22/22</td>
                <td class="center-vertical">
                  <button type="button" class="btn btn-danger">Expirado</button>
                </td>
                <td>5</td>
              </tr>

              <tr>
                <th scope="row">
                  <span class="material-symbols-outlined"> edit_square </span>
                </th>
                <td>Maruchan</td>
                <td>22/22/22</td>
                <td class="center-vertical">
                  <button type="button" class="btn btn-danger">Expirado</button>
                </td>
                <td>5</td>
              </tr>

              <tr>
                <th scope="row">
                  <span class="material-symbols-outlined"> edit_square </span>
                </th>
                <td>Maruchan</td>
                <td>22/22/22</td>
                <td class="center-vertical">
                  <button type="button" class="btn btn-danger">Expirado</button>
                </td>
                <td>5</td>
              </tr>

              <tr>
                <th scope="row">
                  <span class="material-symbols-outlined"> edit_square </span>
                </th>
                <td>Maruchan</td>
                <td>22/22/22</td>
                <td class="center-vertical">
                  <button type="button" class="btn btn-danger">Expirado</button>
                </td>
                <td>5</td>
              </tr>

              <tr>
                <th scope="row">
                  <span class="material-symbols-outlined"> edit_square </span>
                </th>
                <td>Maruchan</td>
                <td>22/22/22</td>
                <td class="center-vertical">
                  <button type="button" class="btn btn-danger">Expirado</button>
                </td>
                <td>5</td>
              </tr>

              <tr>
                <th scope="row">
                  <span class="material-symbols-outlined"> edit_square </span>
                </th>
                <td>Maruchan</td>
                <td>22/22/22</td>
                <td class="center-vertical">
                  <button type="button" class="btn btn-danger">Expirado</button>
                </td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <script>
      // Agrega el código JavaScript para mostrar el modal al hacer clic en el botón
      document
        .getElementById("customBtn")
        .addEventListener("click", function () {
          $("#customModal").modal("show");
        });
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.min.js"></script>
  </body>
</html>
