document.getElementById("burger-icon").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("active-sidebar");

  document.getElementById("burger-icon").classList.toggle("active"); // Agregamos o quitamos la clase 'active'
});

$(document).ready(function () {
  // Espera a que el documento HTML esté completamente cargado y listo

  $(".sidebar a").on("click", function (e) {
    // Selecciona todos los elementos <a> dentro de elementos con la clase 'sidebar'
    // y asigna un evento de clic a cada uno

    e.preventDefault(); // Evita el comportamiento predeterminado del enlace, que es la navegación a otra página

    // Obtén el texto del enlace clicado
    var linkText = $(this).text();

    if (linkText === "Inicio") {
      $("#main-content").load("inicio.html");
    }
  });
});

function openModalconf() {
  document.getElementById("modal-config").style.display = "flex";
}

function closeModalconf() {
  document.getElementById("modal-config").style.display = "none";
}

var barraNavegacion = document.getElementById("navBar");
var dropdown = document.getElementById("drop");
var side = document.getElementById("sidebar");
var icono = document.getElementById("icono");

function cambiarTema(opcion) {
  if (opcion === "claro") {
    document.body.style.backgroundColor = "rgb(235, 235, 235)";
    barraNavegacion.classList.add("navbar-clara");
    barraNavegacion.classList.remove("navbar");
    dropdown.classList.add("dropdown-button-claro");
    dropdown.classList.remove("dropdown-button");
    side.classList.add("sidebar-clara");
    side.classList.remove("sidebar");
    icono.classList.remove("oscuro");
    icono.classList.add("claro");
  } else if (opcion === "oscuro") {
    document.body.style.backgroundColor = "rgb(32, 35, 42)";
    barraNavegacion.classList.remove("navbar-clara");
    barraNavegacion.classList.add("navbar");
    dropdown.classList.remove("dropdown-button-claro");
    dropdown.classList.add("dropdown-button");
    side.classList.remove("sidebar-clara");
    side.classList.add("sidebar");
    icono.classList.add("oscuro");
    icono.classList.remove("claro");
  }

  closeModalconf();
}
