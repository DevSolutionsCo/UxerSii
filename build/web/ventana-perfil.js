var modal = document.getElementById('miModal');
var abrirModalBtn = document.getElementById('abrirModalBtn');

abrirModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
    modal.style.animation = 'fadeIn 0.5s';
});

function cerrarModal() {
    modal.style.animation = 'fadeOut 0.5s';
    setTimeout(function() {
        modal.style.display = 'none';
        modal.style.animation = '';
    }, 500);
}