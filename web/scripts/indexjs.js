document
  .getElementById("accountTypeBtn")
  .addEventListener("click", function () {
    document.getElementById("accountTypeDropdown").classList.toggle("show");
  });

window.onclick = function (event) {
  if (!event.target.matches(".btn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
