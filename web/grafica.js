/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */


document.addEventListener("DOMContentLoaded", function() {
    // Obtén el contexto del lienzo (canvas)
    var ctx = document.getElementById("miGrafica").getContext("2d");

    // Define los datos para la gráfica (puedes modificar esto según tus necesidades)
    var data = {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
        datasets: [{
            label: "Ventas Mensuales",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            data: [65, 59, 10, 81, 56]
        }]
    };

    // Configura la opción de la gráfica (puedes modificar esto según tus necesidades)
    var options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Crea la instancia de la gráfica
    var myChart = new Chart(ctx, {
        type: 'bar', // Puedes cambiar el tipo de gráfica (bar, line, pie, etc.)
        data: data,
        options: options
    });
});
