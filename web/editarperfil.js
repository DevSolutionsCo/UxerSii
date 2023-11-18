function habilitarInputs() {
    // Obtén los elementos de input por su ID
    var nombH = document.getElementById('nombH');
    var apelliP = document.getElementById('apelliP');
    var apelliM = document.getElementById('apelliM');
    var fechNac = document.getElementById('fechNac');
    var correoH = document.getElementById('correoH');
    var passwH = document.getElementById('passwH');
    var genero = document.getElementById('genero');
    var nombUserH = document.getElementById('nombUserH');
    var CPH = document.getElementById('CPH');
    var red_hogar = document.getElementById('red_hogar');
    var red_link_hogar = document.getElementById('red_link_hogar');

    // Habilita los inputs
    nombH.disabled = false;
    nombH.focus();
    apelliP.disabled = false;
    apelliM.disabled = false;
    fechNac.disabled = false;
    correoH.disabled = false;
    passwH.disabled = false;
    genero.disabled = false;
    nombUserH.disabled = false;
    CPH.disabled = false;
    red_hogar.disabled = false;
    red_link_hogar.disabled = false;
}

function habilitarInputs() {
    // Obtén los elementos de input por su ID
    var nombEST = document.getElementById('nombEST');
    var UbicacionEST = document.getElementById('UbicacionEST');
    var passEST = document.getElementById('passEST');
    var contactosEST = document.getElementById('contactosEST');
    var correoEST = document.getElementById('correoEST');
    var red_esta = document.getElementById('red_esta');
    var red_link_esta = document.getElementById('red_link_esta');

    // Habilita los inputs
    nombEST.disabled = false;
    nombEST.focus();
    UbicacionEST.disabled = false;
    passEST.disabled = false;
    contactosEST.disabled = false;
    correoEST.disabled = false;
    red_esta.disabled = false;
    red_link_esta.disabled = false;
}