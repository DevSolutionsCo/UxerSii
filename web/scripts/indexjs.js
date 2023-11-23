document.addEventListener("DOMContentLoaded", function () {
  var cuentaButton = document.getElementById("cuentaButton");
  var cuentaDropdown = document.getElementById("cuentaDropdown");

  cuentaButton.addEventListener("mouseover", function () {
    cuentaDropdown.classList.add("show");
  });

  cuentaButton.addEventListener("mouseout", function () {
    cuentaDropdown.classList.remove("show");
  });

  cuentaDropdown.addEventListener("mouseover", function () {
    cuentaDropdown.classList.add("show");
  });

  cuentaDropdown.addEventListener("mouseout", function () {
    cuentaDropdown.classList.remove("show");
  });
});
