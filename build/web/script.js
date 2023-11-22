console.log("Script cargado");

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

function validarFormulario() {
  // Lógica de validación del formulario

  var nombreInput = document.getElementById("nombH");
  var fechNac = document.getElementById("fechNac");
  var correo = document.getElementById("correoH");
  var pass = document.getElementById("passwH");
  var genero = document.getElementById("genero");
  var nombUs = document.getElementById("nombUserH");
  var CP = document.getElementById("CPH");

  if (!validateNombre(nombreInput)) {
    Toast.fire({
      icon: "error",
      title: "Ingresa un nombre valido",
    });
    return false;
  } else if (!validaFech(fechNac)) {
    Toast.fire({
      icon: "error",
      title: "Ingresa una fecha valida",
    });
    return false;
  } else if (!validaCorreo(correo)) {
    Toast.fire({
      icon: "error",
      title: "Ingresa un correo valido",
    });
    return false;
  } else if (!validaPass(pass)) {
    Toast.fire({
      icon: "error",
      title: "Ingresa una contrase&#241;a de 6 - 20 caracteres",
    });
    return false;
  } else if (!validaGen(genero)) {
    Toast.fire({
      icon: "error",
      title: "Ingresa un genero",
    });
    return false;
  } else if (!validaNombUser(nombUs)) {
    Toast.fire({
      icon: "error",
      title: "Ingresa un nombre de usuario valido",
    });
    return false;
  } else if (!validaCP(CP)) {
    Toast.fire({
      icon: "error",
      title: "Ingresa un Codigo postal valido",
    });
    return false;
  }

  // Evita que se envíe el formulario si hay errores

  return true;
}

function validateNombre(nombreInput) {
  if (!nombreInput || !nombreInput.value || nombreInput.value.length < 3) {
    nombreInput.classList.add("invalid-input");
    return false;
  } else {
    nombreInput.classList.remove("invalid-input");
    return true;
  }
}

function validaFech(fechNacInput) {
  if (!fechNacInput || !fechNacInput.value) {
    fechNacInput.classList.add("invalid-input");
    return false;
  } else {
    fechNacInput.classList.remove("invalid-input");
    return true;
  }
}

function validaCorreo(correoHInput) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (
    correoHInput &&
    correoHInput.value &&
    emailPattern.test(correoHInput.value)
  ) {
    correoHInput.classList.remove("invalid-input");
    return true;
  } else {
    if (correoHInput) {
      correoHInput.classList.add("invalid-input");
    }
    return false;
  }
}

function validaPass(passwHInput) {
  if (
    !passwHInput ||
    passwHInput.value.length < 6 ||
    passwHInput.value.length > 20
  ) {
    passwHInput.classList.add("invalid-input");
    return false;
  } else {
    passwHInput.classList.remove("invalid-input");
    return true;
  }
}

function validaGen(generoInput) {
  if (!generoInput || generoInput.value === "Selecciona tu genero") {
    generoInput.classList.add("invalid-input");
    return false;
  } else {
    generoInput.classList.remove("invalid-input");
    return true;
  }
}

function validaNombUser(nombUserH) {
  if (!nombUserH || !nombUserH.value) {
    nombUserH.classList.add("invalid-input");
    return false;
  } else {
    nombUserH.classList.remove("invalid-input");
    return true;
  }
}

function validaCP(CPHInput) {
  if (!CPHInput || !CPHInput.value) {
    CPHInput.classList.add("invalid-input");
    return false;
  } else {
    CPHInput.classList.remove("invalid-input");
    return true;
  }
}

// Logica de hogar

var botonEnvio = document.getElementById("envio");

document.addEventListener("DOMContentLoaded", function () {
  botonEnvio.addEventListener("click", function (event) {
    event.preventDefault();

    // Obtener referencias a los elementos
    var nombre = document.getElementsByName("nombH")[0].value;
    var apellidoPat = document.getElementsByName("apelliP")[0].value;
    var apellidoMat = document.getElementsByName("apelliM")[0].value;
    var fechNac = document.getElementsByName("fechNac")[0].value;
    var correoH = document.getElementsByName("correoH")[0].value;
    var passwH = document.getElementsByName("passwH")[0].value;
    var genero = document.getElementsByName("genero")[0].value;
    var nombUserH = document.getElementsByName("nombUserH")[0].value;
    var CPH = document.getElementsByName("CPH")[0].value;

    // Validar el formulario
    var formularioValido = validarFormulario();

    if (formularioValido) {
      // Si el formulario es válido, realizar la solicitud AJAX
      enviarSolicitudAjax(
        nombre,
        apellidoPat,
        apellidoMat,
        fechNac,
        correoH,
        passwH,
        genero,
        nombUserH,
        CPH
      );
    } else {
      // Si el formulario no es válido, puedes mostrar un mensaje o realizar otra acción
      console.log("Formulario no válido");
    }
  });
});

function enviarSolicitudAjax(
  nombre,
  apellidoPat,
  apellidoMat,
  fechNac,
  correoH,
  passwH,
  genero,
  nombUserH,
  CPH
) {
  var soli = new XMLHttpRequest();
  soli.open("POST", "signUp.jsp", true);
  soli.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  soli.onreadystatechange = function () {
    console.log(soli.responseText);
    var jsonResponse = JSON.parse(soli.responseText);

    if (jsonResponse.con1) {
      Toast.fire({
        icon: "error",
        title: "Correo ya registrado",
      });
    } else if (jsonResponse.con2) {
      Toast.fire({
        icon: "error",
        title: "Nombre de usuario ya registrado",
      });
    } else if (jsonResponse.con3) {
      window.location.href = "main.jsp";
    }
  };

  // Construir los parámetros
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
    "&tipo=h";

  // Enviar la solicitud
  soli.send(params);
}

var Envio = document.getElementById("envioE");
document.addEventListener("DOMContentLoaded", function () {
  Envio.addEventListener("click", function (event) {
    event.preventDefault();

    // Obtener referencias a los elementos
    var nombEST = document.getElementsByName("nombEST")[0].value;
    var UbicacionEST = document.getElementsByName("UbicacionEST")[0].value;
    var passEST = document.getElementsByName("passEST")[0].value;
    var correoEST = document.getElementsByName("correoEST")[0].value;
    var contactosEST = document.getElementsByName("contactosEST")[0].value;
    var redesEST = document.getElementsByName("redesEST")[0].value;

    // Validar el formulario
    var formularioValido = validarFormulario();

    if (formularioValido) {
      // Si el formulario es válido, realizar la solicitud AJAX
      enviarSolicitudAjax(
        nombEST,
        UbicacionEST,
        passEST,
        correoEST,
        contactosEST,
        redesEST
      );
    } else {
      // Si el formulario no es válido, puedes mostrar un mensaje o realizar otra acción
      console.log("Formulario no válido");
    }
  });
});

function enviarSolicitudAjax(
  nombEST,
  UbicacionEST,
  passEST,
  correoEST,
  contactosEST,
  redesEST
) {
  var soli = new XMLHttpRequest();
  soli.open("POST", "signUp.jsp", true);
  soli.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  soli.onreadystatechange = function () {
    console.log(soli.responseText);
    var jsonResponse = JSON.parse(soli.responseText);

    if (jsonResponse.con1) {
      Toast.fire({
        icon: "error",
        title: "Correo ya registrado",
      });
    } else if (jsonResponse.con2) {
      Toast.fire({
        icon: "error",
        title: "Nombre de usuario ya registrado",
      });
    } else if (jsonResponse.con3) {
      window.location.href = "main.jsp";
    }
  };

  // Construir los parámetros
  var params =
    "nombEST=" +
    encodeURIComponent(nombEST) +
    "&ubicacionEST=" +
    encodeURIComponent(UbicacionEST) +
    "&passEST=" +
    encodeURIComponent(passEST) +
    "&correoEST=" +
    encodeURIComponent(correoEST) +
    "&contactosEST=" +
    encodeURIComponent(contactosEST) +
    "&redesEST=" +
    encodeURIComponent(redesEST) +
    "&tipo=e";
  soli.send(params);
}

//logica signIn

var bsignIN = document.getElementById("bsignIN");
document.addEventListener("DOMContentLoaded", function () {
  event.preventDefault();
  bsignIN.addEventListener("click", function (event) {
    var formulario = document.getElementById("signIn");

    formulario.addEventListener("submit", function (submitEvent) {
      submitEvent.preventDefault();

      // Aquí puedes agregar lógica para manejar el envío del formulario, como realizar una solicitud AJAX. alch no entendi que dice gpt aqui, no se si arruine todo
      var correoIN = document.getElementsByName("correoIN")[0].value;
      var passIN = document.getElementsByName("passIN")[0].value;
      console.log(correoIN);

      var soli = new XMLHttpRequest();
      soli.open("POST", "signIn.jsp", true);
      soli.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      soli.onreadystatechange = function () {
        console.log(soli.responseText);
        var jsonResponse = JSON.parse(soli.responseText);

        if (jsonResponse.con1) {
          window.location.href = "main.jsp";
        } else if (jsonResponse.con2) {
          window.location.href = "main.jsp";
        } else if (jsonResponse.con3) {
          window.location.href = "main.jsp";
        } else if (jsonResponse.con4) {
          window.alert("Contraseña o correo incorrectos");
        }
      };
      var params =
        "correoIN=" +
        encodeURIComponent(correoIN) +
        "&passIN=" +
        encodeURIComponent(passIN);

      soli.send(params);
    });
  });
});
