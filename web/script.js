const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function() {
    var botonHogar = document.getElementById("viewform-hogar");
    var botonOrg = document.getElementById("viewform-org");
    var botonEst = document.getElementById("viewform-est");
    var text = document.getElementById("textitoborra");
    
    
    var formContainer = document.getElementById("form-hogar");

    botonHogar.addEventListener("click", function(event) {
        event.preventDefault();

        var formulario = document.createElement("form");
        formulario.innerHTML = `
            <input type="text" placeholder="Nombre">
            <input type="text" placeholder="Apellido paterno">
            <input type="text" placeholder="Apellido materno">
            <input type="date" placeholder="Fecha de nacimiento">
            <input type="email" placeholder="Correo electrónico">
            <input type="password" placeholder="Contraseña">
                    <select id="cars" name="cars">
                     <option value="Selecciona tu genero">Selecciona tu genero</option>
                     <option value="Masculino">Masculino</option>
                     <option value="Femenino">Femenino</option>
                     <option value="No binario">No binario</option>
                     <option value="Prefiero no decirlo">Prefiero no decirlo</option>
                     </select>
            <button> Registrarse</button>
        `;

        formContainer.appendChild(formulario);
        formulario.addEventListener("submit", function(submitEvent) {
            submitEvent.preventDefault();
        });

        
        botonHogar.remove();
        botonOrg.remove();
        botonEst.remove();
        text.remove();

    });
});



