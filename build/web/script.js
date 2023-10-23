const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const regresar = document.getElementById("regresar");

regresar.addEventListener("click", () => {
  location.reload();
});

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

// Logica de hogar

document.addEventListener("DOMContentLoaded", function () {
  botonHogar.addEventListener("click", function (event) {
    event.preventDefault();

    var formulario = document.createElement("form");
    formulario.id = "registro-hogar";
    formulario.action = "/signUp.jsp"; // Agrega el atributo action

    formulario.innerHTML = `
    
            <input type="text" placeholder="Nombre" name="nombH">
            <input type="text" placeholder="Apellido paterno" name="apelliP">
            <input type="text" placeholder="Apellido materno" name="apelliM">
            <input type="date" placeholder="Fecha de nacimiento" min="1922-01-01" max="2008-12-31" name="fechNac">
            <input type="email" placeholder="Correo electrónico" name="correoH">
            <input type="password" placeholder="Contraseña" name="passwH">
            <select name="genero" name="genero" class="genero" id="genero">
                <option value="Selecciona tu genero">Selecciona tu genero</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="No binario">No binario</option>
                <option value="Prefiero no decirlo">Prefiero no decirlo</option>
            </select>
            <input type="text" placeholder="Nombre de usuario" name="nombUserH">
            <input type="text" placeholder="Descripcion de ti" name="descH">
            <input type="number" placeholder="Codigo postal" name="CPH">
            <button type="submit">Enviar</button>
        `;

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
        var descH = document.getElementsByName("descH")[0].value;
        var CPH = document.getElementsByName("CPH")[0].value;
       

        var soli = new XMLHttpRequest();
        soli.open("POST", "signUp.jsp", true);
        soli.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        soli.onreadystatechange = function() {
        if (soli.readyState == 4 && soli.status == 200) {
            console.log(soli.responseText);
        }
    };
    var params = "nombH=" + encodeURIComponent(nombre) + "&apellidoP=" + encodeURIComponent(apellidoPat)
    + "&apellidoM=" + encodeURIComponent(apellidoMat) + "&fechNac=" + encodeURIComponent(fechNac)
    + "&correoH=" + encodeURIComponent(correoH) + "&passwH=" + encodeURIComponent(passwH)
     + "&genero=" + encodeURIComponent(genero) + "&nombUserH=" + encodeURIComponent(nombUserH)
      + "&descH=" + encodeURIComponent(descH) + "&CPH=" + encodeURIComponent(CPH);
    soli.send(params);
      
    });

    botonHogar.remove();
    botonOrg.remove();
    botonEst.remove();
    text.remove();
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
