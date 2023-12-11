<%-- Document : perfil Created on : 18 nov 2023, 18:34:57 Author : ruizl --%>
<%@page import="java.text.SimpleDateFormat"%> <%@page
    import="corcho.users.UserHogar"%> <%@page import="corcho.services.PerfilHogar"%>
    <%@page import="java.sql.DriverManager"%> <%@page import="java.sql.Connection"%>
    <%@page import="java.sql.ResultSet"%> <%@page
        import="java.sql.PreparedStatement"%> <%@page
            import="corcho.services.PerfilEstablec"%> <%@page import="java.util.Date"%>
            <%@page contentType="text/html" pageEncoding="UTF-8"%>
            <!DOCTYPE html>
            <html lang="es">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="styles/perfil.css" />
                    <link
                        rel="stylesheet"
                        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                        />
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                        />
                    <!-- Agrega los estilos de Font Awesome (para el icono) -->
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                        />

                    <script
                        src="https://kit.fontawesome.com/83ffb1b5fc.js"
                        crossorigin="anonymous"
                    ></script>
                    <title>Perfil</title>
                    <style>
                        /* Estilo personalizado para las imágenes en la galería */
                        #imageModal .modal-body img {
                            width: 150px; /* Ancho predefinido */
                            height: 150px; /* Altura predefinida */
                            object-fit: cover; /* Escalar la imagen para llenar el contenedor */
                            margin-bottom: 10px; /* Espacio entre las imágenes */
                            cursor: pointer; /* Cambia el cursor a mano para indicar que las imágenes son seleccionables */
                        }

                        /* Estilo personalizado para la disposición en columnas */
                        #imageModal .modal-body .row {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                        }
                    </style>
                </head>
                <body>
                    <!<!-- CONSULTA -->
                    <% String apellidoP = null;
                        String apellidoM = null;
                        String nomb = null;
                        String genero = null;
                        String passw = null;
                        String correo = null;
                        String fotoH = null;
                        String ubicacion = null;
                        String contacto = null;
                        String idORG = null;
                        String Redes
                                = null;
                        String cpH = null;
                        String fecha = null;
                        String desc = null;
                        int tipo
                                = 0;
                        String userH = (String) session.getAttribute("nombUserH");
                        String userO
                                = (String) session.getAttribute("nombORG");
                        String userE = (String) session.getAttribute("nombEST");
                        if (userH != null) {
                            apellidoP = (String) session.getAttribute("apellidoP");
                            apellidoM = (String) session.getAttribute("apellidoM");
                            nomb = (String) session.getAttribute("nombH");
                            genero = (String) session.getAttribute("genero");
                            fotoH = (String) session.getAttribute("fotoH");
                            passw = (String) session.getAttribute("passwH");
                            correo = (String) session.getAttribute("correoH");
                            fecha = (String) session.getAttribute("fechNac");
                            cpH = (String) session.getAttribute("CPH");
                            if (session.getAttribute("desc_hog") == null) {
                                desc = "";
                            } else {
                                desc
                                        = (String) session.getAttribute("desc_hog");
                            }
                            tipo = 1;
                        } else if (userE
                                != null) {
                            nomb = (String) session.getAttribute("nombEST");
                            ubicacion = (String) session.getAttribute("ubicacionEST");
                            passw = (String) session.getAttribute("passEST");
                            correo = (String) session.getAttribute("correoEST");
                            contacto = (String) session.getAttribute("tel_est");
                            Redes = (String) session.getAttribute("redesEST");
                            if (session.getAttribute("desc_est") == null) {
                                desc = "";
                            } else {
                                desc = (String) session.getAttribute("desc_est");
                            }
                            tipo = 2;
                        }
                        System.out.println(fecha);
                    %>
                    <section class="seccion-perfil-usuario">
                        <div class="perfil-usuario-header">
                            <div class="perfil-usuario-portada">
                                <div class="perfil-usuario-avatar" >
                                    <img
                                        src="<%=fotoH%>"
                                        alt="img-avatar"
                                        id="selectedImage"
                                        />
                                    <button type="button" class="boton-avatar" id="avatarClick" disabled>
                                        <i class="far fa-image"></i>
                                    </button>
                                </div>

                                <!-- Modal -->
                                <div class="modal" tabindex="-1" role="dialog" id="imageModal">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Galería de imágenes</h5>
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
                                                <!-- Contenedor de las imágenes con clase 'row' -->
                                                <div class="row">
                                                    <!-- Imágenes de ejemplo (puedes agregar más) -->
                                                    <div class="col-md-4">
                                                        <img
                                                            src="resources/perf1.jpeg"
                                                            alt="Imagen 1"
                                                            onclick="seleccionarImagen(this)"
                                                            />
                                                    </div>
                                                    <div class="col-md-4">
                                                        <img
                                                            src="resources/perf2.jpeg"
                                                            alt="Imagen 1"
                                                            onclick="seleccionarImagen(this)"
                                                            />
                                                    </div>
                                                    <div class="col-md-4">
                                                        <img
                                                            src="resources/perf3.jpeg"
                                                            alt="Imagen 1"
                                                            onclick="seleccionarImagen(this)"
                                                            />
                                                    </div>
                                                    <div class="col-md-4">
                                                        <img
                                                            src="resources/perf4.jpeg"
                                                            alt="Imagen 1"
                                                            onclick="seleccionarImagen(this)"
                                                            />
                                                    </div>
                                                    <div class="col-md-4">
                                                        <img
                                                            src="resources/perf5.jpeg"
                                                            alt="Imagen 1"
                                                            onclick="seleccionarImagen(this)"
                                                            />
                                                    </div>
                                                    <div class="col-md-4">
                                                        <img
                                                            src="resources/perf6.jpeg"
                                                            alt="Imagen 1"
                                                            onclick="seleccionarImagen(this)"
                                                            />
                                                    </div>

                                                    <!-- Puedes agregar más columnas según sea necesario -->
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button
                                                    type="button"
                                                    class="btn btn-secondary"
                                                    data-dismiss="modal"
                                                    >
                                                    Cerrar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <%if (tipo == 1) {%>
                                <button
                                    type="button"
                                    class="boton-portada-regresar"
                                    onclick="regresar()"
                                    >
                                    <i class="fa-solid fa-rotate-left" style="color: #ffffff;"></i>
                                </button>
                                <script>
                                    function regresar() {
                                        // Utiliza window.location.href para redirigir a la página deseada
                                        window.location.href = 'main.jsp';
                                    }
                                </script>
                                <button
                                    type="button"
                                    class="boton-portada"
                                    onclick="habilitarInputsH()"
                                    >
                                    <i class="fa-solid fa-pen" style="color: #ffffff"></i> Editar Perfil
                                </button>
                                <%} else if (tipo == 2) { %>
                                <button
                                    type="button"
                                    class="boton-portada"
                                    onclick="habilitarInputsE()"
                                    >
                                    <i class="fa-solid fa-pen" style="color: #ffffff"></i> Editar Perfil
                                </button>
                                <%}%>
                            </div>
                        </div>

                        <div class="perfil-usuario-body">
                            <div class="perfil-usuario-bio">
                                <%if (tipo == 1) {%>
                                <h3 class="titulo"><%=nomb%> <%=apellidoP%></h3>
                                <% } else if (tipo == 2) {%>
                                <h3 class="titulo"><%=nomb%></h3>
                                <% } %> <%if (tipo == 1) {%>
                                <input
                                    type="text"
                                    id="desc_hog"
                                    placeholder="Descripción"
                                    name="desc_hog"
                                    class="container"
                                    value="<%=desc%>"
                                    disabled
                                    />
                                <%} else if (tipo == 2) {%>
                                <input
                                    type="text"
                                    id="desc_est"
                                    placeholder="Descripción"
                                    name="desc_est"
                                    class="container"
                                    value="<%=desc%>"
                                    disabled
                                    />
                                <%}%>
                            </div>
                            <!-- Inicio Form hogar -->
                            <%if (tipo == 1) {%>
                            <div class="perfil-usuario-footer hogar">
                                <ul class="lista-datos">
                                    <li>
                                        <input
                                            type="text"
                                            id="nombH"
                                            placeholder="Nombre"
                                            name="nombH"
                                            class="container"
                                            value="<%=nomb%>"
                                            disabled
                                            />
                                    </li>

                                    <li>
                                        <input
                                            type="text"
                                            id="apelliP"
                                            placeholder="Apellido paterno"
                                            name="apelliP"
                                            class="container"
                                            value="<%=apellidoP%>"
                                            disabled
                                            />
                                    </li>

                                    <li>
                                        <input
                                            type="text"
                                            id="apelliM"
                                            placeholder="Apellido materno"
                                            name="apelliM"
                                            class="container"
                                            value="<%=apellidoM%>"
                                            disabled
                                            />
                                    </li>

                                    <li>
                                        <input
                                            type="date"
                                            id="fechNac"
                                            placeholder="Fecha de nacimiento"
                                            min="1922-01-01"
                                            max="2008-12-31"
                                            name="fechNac"
                                            class="container"
                                            value="<%=fecha%>"
                                            disabled
                                            />
                                    </li>

                                    <li>
                                        <input
                                            type="email"
                                            id="correoH"
                                            placeholder="Correo electronico"
                                            name="correoH"
                                            class="container"
                                            value="<%=correo%>"
                                            disabled
                                            />
                                    </li>
                                </ul>
                                <ul class="lista-datos">
                                    <li>
                                        <input
                                            type="password"
                                            id="passwH"
                                            placeholder="Contraseña"
                                            name="passwH"
                                            class="container"
                                            value="<%=passw%>"
                                            disabled
                                            />
                                    </li>
                                    <li>
                                        <select
                                            name="genero"
                                            id="genero"
                                            class="genero container"
                                            disabled
                                            >
                                            <option selected=""><%=genero%></option>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Femenino">Femenino</option>
                                            <option value="No binario">No binario</option>
                                            <option value="Prefiero no decirlo">Prefiero no decirlo</option>
                                        </select>
                                    </li>
                                    <li>
                                        <input
                                            type="text"
                                            id="nombUserH"
                                            placeholder="Ingresa tu nombre de usuario"
                                            name="nombUserH"
                                            class="container"
                                            value="<%=userH%>"
                                            disabled
                                            />
                                    </li>
                                    <li>
                                        <input
                                            type="number"
                                            id="CPH"
                                            placeholder="Codigo postal"
                                            name="CPH"
                                            class="container"
                                            value="<%=cpH%>"
                                            disabled
                                            />
                                    </li>
                                    <li>
                                        <select
                                            name="red"
                                            id="red_hogar"
                                            class="red container"
                                            onchange="mostrarInput_hogar()"
                                            disabled
                                            >
                                            <option value="ninguna">Selecciona tu red</option>
                                            <option value="instagram">Instragram</option>
                                            <option value="facebook">Facebook</option>
                                            <option value="Twiter">Twiter(X)</option>
                                        </select>
                                    </li>
                                    <li id="container_input_red" style="display: none">
                                        <input
                                            type="text"
                                            id="red_link_hogar"
                                            placeholder="Link de tu red"
                                            name="redEST"
                                            class="container"
                                            disabled
                                            />
                                    </li>
                                </ul>
                                <input
                                    type="hidden"
                                    id="fotoH"
                                    name="fotoH"
                                    value="<%=fotoH%>"
                                    />
                                <button type="submit" class="boton-portada btn-guardar-cam boton" onclick="guardarH(); habilitarInputsH(); validarFormularioH()" style="display: none;" id="envioH">
                                    Guardar Cambios
                                </button>
                            </div>
                            <% } else if (tipo == 2) {%>

                            <!-- Fin form hogar -->

                            <!-- Inicio form Estable -->
                            <div class="perfil-usuario-footer">
                                <ul class="lista-datos">
                                    <li>
                                        <input
                                            type="text"
                                            id="nombEST"
                                            placeholder="Nombre del establecimiento"
                                            name="nombEST"
                                            class="container"
                                            value="<%=nomb%>"
                                            disabled
                                            />
                                    </li>

                                    <li>
                                        <input
                                            type="text"
                                            id="UbicacionEST"
                                            placeholder="Ubicacion"
                                            name="UbicacionEST"
                                            class="container"
                                            value="<%=ubicacion%>"
                                            disabled
                                            />
                                    </li>

                                    <li>
                                        <input
                                            type="password"
                                            id="passEST"
                                            placeholder="Contraseña"
                                            name="passEST"
                                            class="container"
                                            value="<%=passw%>"
                                            disabled
                                            />
                                    </li>
                                </ul>
                                <ul class="lista-datos">
                                    <li>
                                        <input
                                            type="text"
                                            id="tel_est"
                                            placeholder="Contacto"
                                            name="tel_est"
                                            class="container"
                                            value="<%=contacto%>"
                                            disabled
                                            />
                                    </li>
                                    <li>
                                        <input
                                            type="email"
                                            id="correoEST"
                                            placeholder="Correo electronico"
                                            name="correoEST"
                                            class="container"
                                            value="<%=correo%>"
                                            disabled
                                            />
                                    </li>
                                    <li>
                                        <select
                                            name="redesEST"
                                            id="redesEST"
                                            class="red container"
                                            onchange="mostrarInput_est()"
                                            disabled
                                            >
                                            <option value="ninguna">Selecciona tu red</option>
                                            <option value="instagram">Instragram</option>
                                            <option value="facebook">Facebook</option>
                                            <option value="Twiter">Twiter(X)</option>
                                        </select>
                                    </li>
                                    <li id="container_input_red" style="display: none">
                                        <input
                                            type="text"
                                            id="red_link_esta"
                                            placeholder="Link de tu red"
                                            name="redEST"
                                            class="container"
                                            disabled
                                            />
                                    </li>
                                </ul>
                                <button type="button" class="boton-portada" onclick="guardarEST()">
                                    Guardar Cambios
                                </button>
                            </div>
                            <%}%>
                            <!-- Fin form Hogar -->

                        </div>
                    </section>
                    <!--====  End of html  ====-->
                    <script src="editarperfilH.js"></script>
                    <script src="editarperfilEST.js"></script>
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                    <script src="script.js"></script>
                </body>
            </html>          
