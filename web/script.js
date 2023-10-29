

const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

var botonHogar = document.getElementById("viewform-hogar");
var botonOrg = document.getElementById("viewform-org");
var botonEst = document.getElementById("viewform-est");
var text = document.getElementById("textitoborra");
var formContainer = document.getElementById("form-container");

var formContainerhog = document.getElementById("form-hogar");
var formContainerorg = document.getElementById("form-org");
var formContainerest = document.getElementById("form-est");
var textacc = document.getElementById("Create-acc");

// Logica de hogar
let currentStep = 1;

// Variable para realizar un seguimiento de si la validación ya se ha realizado

function validateNombre(nombreInput) {
  if (nombreInput.value === "" && nombreInput.value.length < 3) {
    nombreInput.classList.add("invalid-input");
    return false;
  } else {
    nombreInput.classList.remove("invalid-input");
    return true;
  }
}


function validaApellidos(apelliInput){
    if (apelliInput.value === ""){
        apelliInput.classList.add("invalid-input");
        return false;
    }else{
        apelliInput.classList.remove("invalid-input");
        return true;
    }
}

function validaFech(fechNacInput){
    if (fechNacInput.value === ""){
        fechNacInput.classList.add("invalid-input");
        return false;
    }else{
        fechNacInput.classList.remove("invalid-input");
        return true;
    }
}

function validaCorreo(correoHInput){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(correoHInput.value)) {
      correoHInput.classList.remove("invalid-input");
      return true;
    } else {
      correoHInput.classList.add("invalid-input");
      return false;
    }
}

function validaPass(passwHInput){
    if (passwHInput.value.length < 6 || passwHInput.value.length > 20){
        passwHInput.classList.add("invalid-input");
        return false;
    }else{
        passwHInput.classList.remove("invalid-input");
        return true;
    }
}

function validaGen(generoInput){
    if (generoInput.value === "Selecciona tu genero"){
        generoInput.classList.add("invalid-input");
        return false;
    }else{
        generoInput.classList.remove("invalid-input");
        return true;
    }
}

function validaGen(generoInput){
    if (generoInput.value === "Selecciona tu genero"){
        generoInput.classList.add("invalid-input");
        return false;
    }else{
        generoInput.classList.remove("invalid-input");
        return true;
    }
}

function validaNombUser(nombUserH){
    if (nombUserH.value === ""){
        nombUserH.classList.add("invalid-input");
        return false;
    }else{
        nombUserH.classList.remove("invalid-input");
        return true;
    }
}

function validaCP(CPHInput){
    if (CPHInput.value === ""){
        CPHInput.classList.add("invalid-input");
        return false;
    }else{
        CPHInput.classList.remove("invalid-input");
        return true;
    }
}


// Función para avanzar al siguiente paso
function nextStep(currentStepId, nextStepId) {
    
  const currentStepElement = document.getElementById(currentStepId);
  const nextStepElement = document.getElementById(nextStepId);
  var nombreInput = document.getElementById("nombH");
  var apelliPInput = document.getElementById("apelliP");
  var apelliMInput = document.getElementById("apelliM");
  var fechNacInput = document.getElementById("fechNac");
  var correoHInput = document.getElementById("correoH");
  var passwHInput = document.getElementById("passwH");
  var generoInput = document.getElementById("genero");
  var nombUserH = document.getElementById("nombUserH");
  var CPHInput = document.getElementById("CPH");
  var validacionRealizada1 = false;
  
  // Verificar si la validación ya se ha realizado
  while (!validacionRealizada1) {
      
      
        if (currentStep === 1){
    if (!validateNombre(nombreInput)) {
        window.alert("ingresa un nombre valido");
            break;
    }else{
        validacionRealizada1 = true; // Marcar que la validación se ha realizado
            break;
    }
        }
        
    if (currentStep === 2){
        if (!validaApellidos(apelliPInput)){
            window.alert("ingresa apellido valido");
            break;
        }else{
            validacionRealizada1 = true;
            break;
        }
    }
    
    
        if (currentStep === 3){
            if (!validaApellidos(apelliMInput)){
                window.alert("ingresa apellido valido");
                break;
            }else{
                validacionRealizada1 = true;
                break;
            }
        } 
        
    if (currentStep === 4){
            if (!validaFech(fechNacInput)){
                window.alert("ingresa una fecha valida");
                break;
            }else{
                validacionRealizada1 = true;
                break;
            }
        }
    if (currentStep === 5){
            if (!validaCorreo(correoHInput)){
                window.alert("ingresa un correo valido");
                break;
            }else{
                validacionRealizada1 = true;
                break;
            }
        }
    
    if (currentStep === 6){
            if (!validaPass(passwHInput)){
                window.alert("ingresa una contraseña de 6 - 20 caracteres");
                break;
            }else{
                validacionRealizada1 = true;
                break;
            }
        }
    if (currentStep === 7){
            if (!validaGen(generoInput)){
                window.alert("selecciona un genero");
                break;
            }else{
                validacionRealizada1 = true;
                break;
            }
        }
    if (currentStep === 8){
            if (!validaNombUser(nombUserH)){
                window.alert("ingresa un nombre de usuario valido");
                break;
            }else{
                validacionRealizada1 = true;
                break;
            }
        }
    if (currentStep === 9){
            if (!validaNombUser(nombUserH)){
                window.alert("ingresa un codigo postal valido");
                break;
            }else{
                validacionRealizada1 = true;
                break;
            }
        }
        
  
        
    }
    if (validacionRealizada1){
        if (currentStepElement && nextStepElement) {
          currentStepElement.classList.remove("active");
          nextStepElement.classList.add("active");
        }
        if (currentStepId !== nextStepId) {
          currentStep++;
          validacionRealizada1 = false;
        }
          }
    }


function previousStep(currentStepId, prevStepId) {
  const currentStepElement = document.getElementById(currentStepId);
  const prevStepElement = document.getElementById(prevStepId);

  if (currentStepElement && prevStepElement) {
    currentStepElement.classList.remove("active");
    prevStepElement.classList.add("active");
  }

  // Decrementa currentStep solo si se pasa al paso anterior
  if (currentStep > 1 && currentStepId !== prevStepId) {
    currentStep--;
  }
}

function reloadPage() {
  location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
  botonHogar.addEventListener("click", function (event) {
    event.preventDefault();

    var formulario = document.createElement("form");
    formulario.id = "registro-hogar";
    formulario.action = "/signUp.jsp"; // Agrega el atributo action

    formulario.innerHTML = `
    <div class="form-step active" id="step1">
      <h2>Nombre</h2>
      <input type="text" id="nombH" placeholder="Nombre" name="nombH">
      <button onclick="nextStep('step1', 'step2')" type="button">Siguiente</button>
      <button onclick="reloadPage()" type="button">Regresar</button>
      </div>
    <div class="form-step" id="step2">
      <h2>Apellido Paterno</h2>
      <input type="text" id="apelliP" placeholder="Apellido paterno" name="apelliP">
      <button  onclick="nextStep('step2', 'step3')" type="button">Siguiente</button>
    </div>
    <div class="form-step" id="step3">
      <h2>Apellido Materno</h2>
      <input type="text" id="apelliM" placeholder="Apellido materno" name="apelliM">
      <button  onclick="nextStep('step3', 'step4')" type="button">Siguiente</button>
    </div>
    <div class="form-step" id="step4">
      <h2>Fecha de nacimiento</h2>
      <input type="date" id="fechNac" placeholder="Fecha de nacimiento" min="1922-01-01" max="2008-12-31" name="fechNac">
      <button  onclick="nextStep('step4', 'step5')" type="button">Siguiente</button>
    </div>
    <div class="form-step" id="step5">
      <h2>Correo Electrónico</h2>
      <input type="email" id="correoH" placeholder="Correo electrónico" name="correoH">
      <button  onclick="nextStep('step5', 'step6')" type="button">Siguiente</button>
    </div>

    <div class="form-step" id="step6">
    <h2>Contraseña</h2>
    <input type="password" id="passwH" placeholder="Contraseña" name="passwH">
    <button  onclick="nextStep('step6', 'step7')" type="button">Siguiente</button>
  </div>

  <div class="form-step" id="step7">
  <h2>Genero</h2>
  <select name="genero" id="genero" name="genero" class="genero" id="genero">
  <option value="Selecciona tu genero">Selecciona tu genero</option>
  <option value="Masculino">Masculino</option>
  <option value="Femenino">Femenino</option>
  <option value="No binario">No binario</option>
  <option value="Prefiero no decirlo">Prefiero no decirlo</option>
</select>
  <button  onclick="nextStep('step7', 'step8')" type="button">Siguiente</button>
</div>

<div class="form-step" id="step8">
<h2>Nombre de usuario</h2>
<input type="text" id="nombUserH" placeholder="Ingresa tu nombre de usuario" name="nombUserH">
<button  onclick="nextStep('step8', 'step9')" type="button">Siguiente</button>
</div>

<div class="form-step" id="step9">
<h2>Codigo Postal</h2>
<input type="number" id="CPH" placeholder="Codigo postal" name="CPH">
            <button type="submit">Enviar</button>
            <button onclick="previousStep('step9', 'step8')" type="button">Regresar</button>

</div>
  `;

    // Cambiar el tipo de botón a 'button' para evitar el envío del formulario
    var buttons = formulario.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].type = "button";
    }

    var submitButton = formulario.querySelector(
      "div#step9 button[type='button']"
    );
    if (submitButton) {
      submitButton.type = "submit";
    }

    var backButton2 = formulario.querySelector(
      "div#step2 button[type='button']"
    );
    backButton2.insertAdjacentHTML(
      "afterend",
      `<button onclick="previousStep('step2', 'step1')" type="button">Regresar</button>`
    );

    // Botón de regresar para el paso 3
    var backButton3 = formulario.querySelector(
      "div#step3 button[type='button']"
    );
    backButton3.insertAdjacentHTML(
      "afterend",
      `<button onclick="previousStep('step3', 'step2')" type='button'>Regresar</button>`
    );

    var backButton4 = formulario.querySelector(
      "div#step4 button[type='button']"
    );
    backButton4.insertAdjacentHTML(
      "afterend",
      `<button onclick="previousStep('step4', 'step3')" type="button">Regresar</button>`
    );

    var backButton5 = formulario.querySelector(
      "div#step5 button[type='button']"
    );
    backButton5.insertAdjacentHTML(
      "afterend",
      `<button onclick="previousStep('step5', 'step4')" type="button">Regresar</button>`
    );

    var backButton6 = formulario.querySelector(
      "div#step6 button[type='button']"
    );
    backButton6.insertAdjacentHTML(
      "afterend",
      `<button onclick="previousStep('step6', 'step5')" type="button">Regresar</button>`
    );

    var backButton7 = formulario.querySelector(
      "div#step7 button[type='button']"
    );
    backButton7.insertAdjacentHTML(
      "afterend",
      `<button onclick="previousStep('step7', 'step6')" type="button">Regresar</button>`
    );

    var backButton8 = formulario.querySelector(
      "div#step8 button[type='button']"
    );
    backButton8.insertAdjacentHTML(
      "afterend",
      `<button onclick="previousStep('step8', 'step7')" type="button">Regresar</button>`
    );

    formContainerhog.appendChild(formulario);
    
    
   


    formulario.addEventListener("submit", function (submitEvent) {
      submitEvent.preventDefault();

      // Aquí puedes agregar lógica para manejar el envío del formulario, como realizar una solicitud AJAX. alch no entendi que dice gpt aqui, no se si arruine todo
      var nombre = document.getElementsByName("nombH")[0].value;
      var apellidoPat = document.getElementsByName("apelliP")[0].value;
      var apellidoMat = document.getElementsByName("apelliM")[0].value;
      var fechNac = document.getElementsByName("fechNac")[0].value;
      var correoH = document.getElementsByName("correoH")[0].value;
      var passwH = document.getElementsByName("passwH")[0].value;
      var genero = document.getElementsByName("genero")[0].value;
      var nombUserH = document.getElementsByName("nombUserH")[0].value;
      var CPH = document.getElementsByName("CPH")[0].value;

      var soli = new XMLHttpRequest();
      soli.open("POST", "signUp.jsp", true);
      soli.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      soli.onreadystatechange = function () {
        if (soli.readyState == 4 && soli.status == 200) {
          window.location.href = "main.jsp";
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
        encodeURIComponent(genero)  +
        "&nombUserH=" +
        encodeURIComponent(nombUserH) +
        "&CPH=" +
        encodeURIComponent(CPH);
      soli.send(params);
    });

    botonHogar.remove();
    botonOrg.remove();
    botonEst.remove();
    text.remove();
    textacc.remove();
  });
});
//logica de organizacion

document.addEventListener("DOMContentLoaded", function () {
  botonOrg.addEventListener("click", function (event) {
    event.preventDefault();

    var formulario = document.createElement("form");
    formulario.id = "registro-org";
    formulario.action = "/tu/endpoint"; // Agrega el atributo action

    formulario.innerHTML = `
      <input type="text" placeholder="Nombre Organizacion">
      <input type="text" placeholder="Ubicacion">
      <input type="email" placeholder="Correo electrónico">
      <input type="password" placeholder="Contraseña">
      <input type="text" placeholder="Contactos">
      <input type="text" placeholder="Redes">
      <input type="number" placeholder="ID oficial">
      <input type="number" placeholder="Descripcion ">
      <button type="submit">Enviar</button>
          `;

    formContainerorg.appendChild(formulario);
    formulario.addEventListener("submit", function (submitEvent) {
      submitEvent.preventDefault();
      // Aquí puedes agregar lógica para manejar el envío del formulario, como realizar una solicitud AJAX. alch no entendi que dice gpt aqui, no se si arruine todo
    });

    botonHogar.remove();
    botonOrg.remove();
    botonEst.remove();
    text.remove();
  });
});

// Logica de establecimiento

document.addEventListener("DOMContentLoaded", function () {
  botonEst.addEventListener("click", function (event) {
    event.preventDefault();

    var formulario = document.createElement("form");
    formulario.id = "registro-org";
    formulario.action = "/tu/endpoint"; // Agrega el atributo action

    formulario.innerHTML = `
        <input type="text" placeholder="Nombre Organizacion">
        <input type="text" placeholder="Ubicacion">
        <input type="email" placeholder="Correo electrónico">
        <input type="password" placeholder="Contraseña">
        <input type="text" placeholder="Contactos">
        <input type="text" placeholder="Redes">
        <input type="number" placeholder="Descripcion ">
        <button type="submit">Enviar</button>
            `;

    formContainerest.appendChild(formulario);
    formulario.addEventListener("submit", function (submitEvent) {
      submitEvent.preventDefault();
      // Aquí puedes agregar lógica para manejar el envío del formulario, como realizar una solicitud AJAX. alch no entendi que dice gpt aqui, no se si arruine todo
    });

    botonHogar.remove();
    botonOrg.remove();
    botonEst.remove();
    text.remove();
  });
});
