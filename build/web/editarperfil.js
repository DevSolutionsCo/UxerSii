// Inicio js Hogar

function habilitarInputs() {
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
}

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

//Fin hogar

//Inicio est

function habilitarInputs() {
    // Obtén los elementos de input por su ID
    var nombEST = document.getElementById('nombEST');
    var UbicacionEST = document.getElementById('UbicacionEST');
    var passEST = document.getElementById('passEST');
    var contactosEST = document.getElementById('contactosEST');
    var correoEST = document.getElementById('correoEST');
    var red_esta = document.getElementById('red_esta');
    var red_link_esta = document.getElementById('red_link_esta');

    // Habilita los inputs
    nombEST.disabled = false;
    nombEST.focus();
    UbicacionEST.disabled = false;
    passEST.disabled = false;
    contactosEST.disabled = false;
    correoEST.disabled = false;
    red_esta.disabled = false;
    red_link_esta.disabled = false;
}

function mostrarInput_est() {
      var opcionesSelect = document.getElementById('red_esta');
      var inputContainer = document.getElementById('container_input_red');
      var campoDeTexto = document.getElementById('red_link_esta');

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

//fin est
