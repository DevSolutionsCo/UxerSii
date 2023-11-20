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
    <link rel="stylesheet" href="styles/alimentos-gestion.css" />
    <title>Gestion de alimentos</title>
  </head>
  <body>
    <div class="TODOwriteContent">
      <div class="div-tabla">
        <div class="textos">
          <p>Productos disponibles</p>
          <span>Inventario</span>
        </div>
        <div class="tablita">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Nombre</th>
                <th>Fecha de caducidad</th>
                <th>Estatus</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="material-symbols-outlined"> edit_square </span>
                </td>
                <td>Vacia</td>
                <td>03/12/2005</td>
                <td>Pendiente</td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <span class="material-symbols-outlined"> edit_square </span>
                </td>
                <td>Tomate</td>
                <td>24/08/1995</td>
                <td>Caducado</td>
                <td>23</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="formulario">
        <form action="">
          <div class="in-form">
            <h2 style="text-align: center; color: white">Agrega productos</h2>
            <div class="container-inputs">
              <div class="inputs">
                <input
                  type="text"
                  name="nomb_alim"
                  id="nomb_alim"
                  placeholder="Nombre del producto"
                />
              </div>
              <div class="inputss">
                <label for="fecha_cad">Fecha de caducidad: </label>
                <input type="date" name="fecha_cad" id="fecha_cad" />
              </div>
              <div class="inputs">
                <input
                  type="text"
                  name="cantidad"
                  id="cantidad"
                  placeholder="Cantidad"
                />
              </div>
            </div>

            <button>Agrega</button>
          </div>
        </form>
      </div>
    </div>
  </body>
</html>
