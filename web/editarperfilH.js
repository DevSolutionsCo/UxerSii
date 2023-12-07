
function habilitarInputsH() {
    // Obtén los elementos de input por su ID
    var nombH = document.getElementById('nombH');
    var apelliP = document.getElementById('apelliP');
    var apelliM = document.getElementById('apelliM');
    var fechNac = document.getElementById('fechNac');
    var correoH = document.getElementById('correoH');
    var passwH = document.getElementById('passwH');
    var genero = document.getElementById('genero');
    var nombUserH = document.getElementById('nombUserH');
    var CPH = document.getElementById('CPH');
    var red_hogar = document.getElementById('red_hogar');
    var red_link_hogar = document.getElementById('red_link_hogar');
    var descH = document.getElementById('desc_hog');

    // Habilita los inputs
    nombH.disabled = false;
    nombH.focus();
    apelliP.disabled = false;
    apelliM.disabled = false;
    fechNac.disabled = false;
    correoH.disabled = false;
    passwH.disabled = false;
    genero.disabled = false;
    nombUserH.disabled = false;
    CPH.disabled = false;
    red_hogar.disabled = false;
    red_link_hogar.disabled = false;
    descH.disabled = false;
}
function seleccionarImagen(imagen) {
    // Obtiene la URL de la imagen seleccionada
    var nuevaImagenSrc = imagen.src;

    // Extrae la parte relativa de la URL de la imagen seleccionada
    var rutaRelativa = nuevaImagenSrc.substring(nuevaImagenSrc.lastIndexOf("resources/"));

    // Actualiza la imagen predefinida con la imagen seleccionada
    document.getElementById("selectedImage").src = nuevaImagenSrc;

    // Actualiza el valor del campo oculto con la ruta relativa de la imagen seleccionada
    document.getElementById("fotoH").value = rutaRelativa;

    // Cierra el modal después de seleccionar una imagen (opcional)
    $("#imageModal").modal("hide");
}



// Agrega un listener al clic en el div de perfil-usuario-avatar
document
        .getElementById("avatarClick")
        .addEventListener("click", function () {
            // Muestra el modal al hacer clic
            $("#imageModal").modal("show");
        });
function mostrarInput_hogar() {
    var opcionesSelect = document.getElementById('red_hogar');
    var inputContainer = document.getElementById('container_input_red');
    var campoDeTexto = document.getElementById('red_link_hogar');

    // Obtén el valor seleccionado
    var opcionSeleccionada = opcionesSelect.value;

    // Muestra u oculta el campo de texto según la opción seleccionada
    if (opcionSeleccionada === 'ninguna') {
        inputContainer.style.display = 'none';
        campoDeTexto.value = '';  // Limpia el valor del campo de texto si está oculto
    } else {
        inputContainer.style.display = 'list-item';
        campoDeTexto.focus();  // Coloca el foco en el campo de texto
    }
}

function guardarH() {
    var nombreInput = document.getElementById("nombH");
    var apelliPInput = document.getElementById("apelliP");
    var apelliMInput = document.getElementById("apelliM");
    var fechNacInput = document.getElementById("fechNac");
    var correoHInput = document.getElementById("correoH");
    var passwHInput = document.getElementById("passwH");
    var generoInput = document.getElementById("genero");
    var nombUserH = document.getElementById("nombUserH");
    var CPHInput = document.getElementById("CPH");
    var desc_hogInput = document.getElementById("desc_hog");
     var fotoH = document.getElementById("fotoH");

    var nombre = document.getElementsByName("nombH")[0].value;
    var apellidoPat = document.getElementsByName("apelliP")[0].value;
    var apellidoMat = document.getElementsByName("apelliM")[0].value;
    var fechNac = document.getElementsByName("fechNac")[0].value;
    var correoH = document.getElementsByName("correoH")[0].value;
    var passwH = document.getElementsByName("passwH")[0].value;
    var genero = document.getElementsByName("genero")[0].value;
    var nombUserH = document.getElementsByName("nombUserH")[0].value;
    var CPH = document.getElementsByName("CPH")[0].value;
    var desc_hog = document.getElementsByName("desc_hog")[0].value;
    var fotoH = document.getElementsByName("fotoH")[0].value;

    console.log(desc_hog);
    var soli = new XMLHttpRequest();
    soli.open("POST", "editarPerfil.jsp", true);
    soli.setRequestHeader(
            "Content-type",
            "application/x-www-form-urlencoded"
            );
    soli.onreadystatechange = function () {
        console.log(soli.responseText)
        var jsonResponse = JSON.parse(soli.responseText);

        if (jsonResponse.con1) {
            window.alert("nombre de usuario ya registrado");
        } else if (jsonResponse.con2) {
            window.location.href = "perfil.jsp";
        }

    };
    var params =
            "nombH=" +
            encodeURIComponent(nombre) +
            "&apellidoP=" +
            encodeURIComponent(apellidoPat) +
            "&apellidoM=" +
            encodeURIComponent(apellidoMat) +
            "&fechNac=" +
            encodeURIComponent(fechNac) +
            "&correoH=" +
            encodeURIComponent(correoH) +
            "&passwH=" +
            encodeURIComponent(passwH) +
            "&genero=" +
            encodeURIComponent(genero) +
            "&nombUserH=" +
            encodeURIComponent(nombUserH) +
            "&CPH=" +
            encodeURIComponent(CPH) +
            "&desc_hog=" +
            encodeURIComponent(desc_hog) +
            "&fotoH="+
            encodeURIComponent(fotoH)+
            "&tipo=h";
    
    soli.send(params);
}

