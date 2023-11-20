/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function habilitarInputsE() {
    // Obtén los elementos de input por su ID
    var nombEST = document.getElementById('nombEST');
    var UbicacionEST = document.getElementById('UbicacionEST');
    var passEST = document.getElementById('passEST');
    var contactosEST = document.getElementById('tel_est');
    var correoEST = document.getElementById('correoEST');
    var red_esta = document.getElementById('redesEST');
    var red_link_esta = document.getElementById('red_link_esta');
    var desc_est = document.getElementById('desc_est');

    // Habilita los inputs
    nombEST.disabled = false;
    nombEST.focus();
    UbicacionEST.disabled = false;
    passEST.disabled = false;
    contactosEST.disabled = false;
    correoEST.disabled = false;
    red_esta.disabled = false;
    red_link_esta.disabled = false;
    desc_est.disabled=false;
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

function guardarEST(){
    var nombreInput = document.getElementById("nombEST");
  var UbicacionInput = document.getElementById("UbicacionEST");
  var passESTInput = document.getElementById("passEST");
  var correoESTInput = document.getElementById("correoEST");
  var tel_estInput = document.getElementById("tel_est");
  var redesESTInput = document.getElementById("redesEST");
  //var desc_est = document.getElementById("desc_est");
  
  var nombEST = document.getElementsByName("nombEST")[0].value;
      var UbicacionEST = document.getElementsByName("UbicacionEST")[0].value;
      var passEST = document.getElementsByName("passEST")[0].value;
      var correoEST = document.getElementsByName("correoEST")[0].value;
      var tel_est = document.getElementsByName("tel_est")[0].value;
      var redesEST = document.getElementsByName("redesEST")[0].value;
      //var desc_est = document.getElementsByName("desc_est")[0].value;

      var soli = new XMLHttpRequest();
      soli.open("POST", "editarPerfil.jsp", true);
      soli.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      
      
      soli.onreadystatechange = function () {
        console.log(soli.responseText)
              var jsonResponse = JSON.parse(soli.responseText);                    

              if (jsonResponse.con1){
                        window.alert("nombre de establecimiento ya registrado");
                    }else if (jsonResponse.con2){
                       window.location.href = "perfil.jsp";
                    }

          };
        
        var params =
        "nombEST=" +
        encodeURIComponent(nombEST) +
        "&ubicacionEST=" +
        encodeURIComponent(UbicacionEST) +
        "&passEST=" +
        encodeURIComponent(passEST) +
        "&correoEST=" +
        encodeURIComponent(correoEST) +
        "&tel_est=" +
        encodeURIComponent(tel_est) +
        "&redesEST=" +
        encodeURIComponent(redesEST) +
        "&tipo=e"; //+ 
        //encodeURIComponent(desc_est) +
        //"&desc_est=";
      soli.send(params);
        
        }
