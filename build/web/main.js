document.getElementById("burger-icon").addEventListener("click", function () {
  // Verificamos si el sidebar tiene la clase 'active-sidebar'
  var sidebarActivo = document
    .getElementById("sidebar")
    .classList.contains("active-sidebar");

  // Si el sidebar está activo, quitamos las clases; de lo contrario, las agregamos
  if (sidebarActivo) {
    document.getElementById("sidebar").classList.remove("active-sidebar");
    document.getElementById("burger-icon").classList.remove("active");
    document.getElementById("main-content").classList.add("tamoActivo");
    document.getElementById("main-content").classList.remove("main-content");
  } else {
    document.getElementById("sidebar").classList.add("active-sidebar");
    document.getElementById("burger-icon").classList.add("active");
    document.getElementById("main-content").classList.remove("tamoActivo");
    document.getElementById("main-content").classList.add("main-content");
  }
});

$(document).ready(function () {
  // Espera a que el documento HTML esté completamente cargado y listo
  $("#main-content").load("inicio.jsp");

  $(".sidebar a").on("click", function (e) {
    // Selecciona todos los elementos <a> dentro de elementos con la clase 'sidebar'
    // y asigna un evento de clic a cada uno

    e.preventDefault(); // Evita el comportamiento predeterminado del enlace, que es la navegación a otra página

    // Obtén el texto del enlace clicado
    var linkText = $(this).text();

    if (linkText === "Inicio") {
      $("#main-content").load("inicio.jsp");
    } else if (linkText === "Alimentos") {
      $("#main-content").load("alimentos-main.jsp");
    } else if (linkText === "Puntos Moviles") {
      $("#main-content").load("punto-movil.html");
    }
  });
  //Botoncillos de inicio osea las cards chiquillas

  $(document).ready(function () {
    console.log("documento listo");

    $(document).on("click", "#donativo-card", function () {
      $("#main-content").load("alimentos-main.jsp");
    });

    $(document).on("click", "#productos-card", function () {
      $("#main-content").load("alimentos-gestion.jsp");
    });    $(document).on("click", "#soporte-card", function () {
      $("#main-content").load("chatuser.jsp");
    });
  });

  //Botoncillos de Alimentos
  $(document).on("click", ".cards button", function (e) {
    e.preventDefault();
    var textillo = $(this).text();

    if (textillo === "Vamos a ello!") {
      console.log("clicsiloo");
      $("#main-content").load("alimentos-gestion.jsp");
    } else {
    }
  });
});
