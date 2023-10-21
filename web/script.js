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
    formulario.action = "/tu/endpoint"; // Agrega el atributo action

    formulario.innerHTML = `
            <input type="text" placeholder="Nombre">
            <input type="text" placeholder="Apellido paterno">
            <input type="text" placeholder="Apellido materno">
            <input type="text" placeholder="Fecha de nacimiento" onfocus = "(this.type='date')">
            <input type="email" placeholder="Correo electrónico">
            <input type="password" placeholder="Contraseña">
            <select id="genero" name="genero" class="genero">
                <option value="Selecciona tu genero">Selecciona tu genero</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="No binario">No binario</option>
                <option value="Prefiero no decirlo">Prefiero no decirlo</option>
            </select>
            <input type="text" placeholder="Nombre de usuario">
            <input type="text" placeholder="Descripcion de ti">
            <input type="number" placeholder="Codigo postal">
            <button type="submit">Enviar</button>
        `;

    formContainerhog.appendChild(formulario);
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
