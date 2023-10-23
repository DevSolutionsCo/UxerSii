document.getElementById("burger-icon").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("active-sidebar");
  document.getElementById("burger-icon").classList.toggle("active"); // Agregamos o quitamos la clase 'active'
});
