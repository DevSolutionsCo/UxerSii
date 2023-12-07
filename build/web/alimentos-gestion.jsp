<%-- Document : alimentos-gestion Created on : Nov 20, 2023, 8:38:35 AM Author :
sebas --%> <%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.List"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
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
      
      <%
    List<Map<String, Object>> listaAlimentos = new ArrayList<>();
    
    // Realizar la conexión a la base de datos y obtener los datos
    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        String jdbcUrl = "jdbc:mysql://localhost:3306/uxersii";
        String usuario = "root";
        String contraseña = "1234";
        Connection connection = DriverManager.getConnection(jdbcUrl, usuario, contraseña);

        // Realizar la consulta SQL para obtener los datos
        String sql = "select * from alimentos";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                Map<String, Object> alimento = new HashMap<>();
                alimento.put("nomb_alim", resultSet.getString("nomb_alim"));
                alimento.put("fecha_cad", resultSet.getDate("fecha_cad"));
                alimento.put("cantidad", resultSet.getInt("cantidad"));
                // Agregar otros datos según sea necesario
                listaAlimentos.add(alimento);
            }
        }
        connection.close();
    } catch (ClassNotFoundException | SQLException e) {
        e.printStackTrace();
    }
%>
      
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
                <form id="customForm" onsubmit="agregarAlimento(event)">
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
            <tbody id="tablaAlimentos">
                
                <%for(int j=0; j < listaAlimentos.size(); j++){
                        
                    %>
              <tr>
                <th scope="row">
                  <span class="material-symbols-outlined"> edit_square </span>
                </th>
                <td><%=listaAlimentos.get(j).get("nomb_alim")%></td>
                <td><%= listaAlimentos.get(j).get("fecha_cad")%></td>
                <td class="center-vertical">
                  <button type="button" class="btn btn-warning">
                    Pronto a expirar
                  </button>
                </td>
                <td><%= listaAlimentos.get(j).get("cantidad")%></td>
              </tr>
             <% }%>
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
        
         function agregarAlimento(event) {
        event.preventDefault(); // Evita la acción predeterminada del formulario

        // Obtiene los datos del formulario
        var nombre = document.getElementById("customNombre").value;
        var fecha = document.getElementById("customFecha").value;
        var cantidad = document.getElementById("customCantidad").value;

        // Realiza una llamada AJAX para enviar los datos al controlador
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "AgregarAlimentoController", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
    // Manejar la respuesta del servidor, por ejemplo, actualizar la tabla

    // Analizar la respuesta JSON del servidor
    var response = JSON.parse(xhr.responseText);

    if (response.status === "success") {
        // La respuesta fue exitosa, puedes realizar acciones de actualización aquí

        // Por ejemplo, podrías limpiar el formulario y cerrar el modal
        document.getElementById("customForm").reset();
        $("#customModal").modal("hide");

        // Actualizar la tabla (aquí asumimos que tienes una función para hacer esto)
        agregarUltimoElemento(nombre, fecha, cantidad);

    } else {
        // Manejar casos de respuesta con error
        console.error("Error al agregar alimento: " + response.message);
        // Puedes mostrar un mensaje de error o realizar otras acciones según tus necesidades
    }
}

        };
        xhr.send("customNombre=" + nombre + "&customFecha=" + fecha + "&customCantidad=" + cantidad);
    }
    
    
    function agregarUltimoElemento(nombre, fecha, cantidad) {
            var ultimoElemento = alimentosJSON[alimentosJSON.length - 1];
            var tablaBody = document.getElementById("tablaAlimentos");

            var row = "<tr>" +
                "<th scope='row'><span class='material-symbols-outlined'> edit_square </span></th>" +
                "<td>" + nombre + "</td>" +
                "<td>" + fecha + "</td>" +
                "<td class='center-vertical'>" +
                "<button type='button' class='btn btn-warning'>" + "Pronto a Expirar" + "</button>" +
                "</td>" +
                "<td>" + cantidad + "</td>" +
                "</tr>";

            tablaBody.innerHTML += row;
        }
    
var alimentosJSON = [
            <% for (int i = 0; i < listaAlimentos.size(); i++) { %>
                {
                    "nombre": "<%= listaAlimentos.get(i).get("nomb_alim") %>",
                    "fechaCaducidad": "<%= listaAlimentos.get(i).get("fecha_cad") %>",
                    "cantidad": <%= listaAlimentos.get(i).get("cantidad") %>
                }<%= (i < listaAlimentos.size() - 1) ? "," : "" %>
            <% } %>
        ];
        function actualizarTabla() {
            
            var tabla = document.getElementById("tablaAlimentos");
            tabla.innerHTML = "";

            console.log(alimentosJSON)
            alimentosJSON.forEach(function (alimento) {
                var row = "<tr>" +
                    "<th scope='row'><span class='material-symbols-outlined'> edit_square </span></th>" +
                    "<td>" + alimento.nombre + "</td>" +
                    "<td>" + obtenerFormatoFecha(alimento.fechaCaducidad) + "</td>" +
                    "<td class='center-vertical'>" +
                    "<button type='button' class='btn btn-warning'>Pronto a expirar</button>" +
                    "</td>" +
                    "<td>" + alimento.cantidad + "</td>" +
                    "</tr>";

                tabla.innerHTML += row;
            });
        }

        function obtenerFormatoFecha(fecha) {
            // Esta función convierte la fecha a un formato deseado
            var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            return new Date(fecha).toLocaleDateString('es-ES', options);
        }

        window.onload = function () {
            actualizarTabla();
        };
    
    
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.min.js"></script>
  </body>
</html>
