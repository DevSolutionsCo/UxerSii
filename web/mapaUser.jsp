<%-- 
    Document   : mapaUser
    Created on : 27 nov. 2023, 20:50:23
    Author     : javis
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://xmlns.jcp.org/jsp/jstl/core" prefix="c" %>

<%@ page import="java.util.List" %>
<%@page import="corcho.mapa.Mapa"%>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mapa Dinámico</title>
    <style>
        /* Estilo opcional para el contenedor del mapa */
        #map {
            height: 400px;
            width: 100%;
        }
    </style>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3WWoaZWJZUVIs8i4Y9s2GcxXrSVs_iic&callback=initMap"></script>
</head>
<body>

    <%
        Mapa mapita = new Mapa();
        List<PuntoColecta> puntosColecta = mapa.getPuntosColectaFijo(); // supongamos que obtienes la lista de alguna manera
        request.setAttribute("puntosFijos", puntosColecta);
        RequestDispatcher dispatcher = request.getRequestDispatcher("/mapaUser.jsp");
        dispatcher.forward(request, response);
    %>
<!-- Contenedor para el mapa -->
<div id="map"></div>

<c:set var="puntos" value="${requestScope   .puntos}" />

<script>
    // Crear un array de JavaScript y llenarlo con los datos de Java
    var puntosColectaArray = [];

    // Iterar sobre la lista de puntos de colecta en Java
    <c:forEach var="punto" items="${puntos}">
        // Crear un objeto JavaScript para cada punto de colecta
        var puntoColecta = {
            id: ${punto.id},
            nombre: '${punto.nombre}',
            latitud: ${punto.latitud},
            longitud: ${punto.longitud},
            responsable: '${punto.responsable}',
            almacenamiento: ${punto.almacenamiento},
            horario: '${punto.horario}',
            fechaCreacion: '${punto.fechaCreacion}',
            estado: '${punto.estado}',
            descripcion: '${punto.descripcion}'
        };

        // Agregar el objeto al array de puntos de colecta
        puntosColectaArray.push(puntoColecta);
    </c:forEach>

    // Puedes utilizar puntosColectaArray en tu código JavaScript
    console.log(puntosColectaArray);

    function initMap() {
        
    // Coordenadas del centro del mapa (puedes ajustar estas coordenadas)
        var centerCoordinates = { lat: 40.7589, lng: -73.9851 };
        // Configuración inicial del mapa
        map = new google.maps.Map(document.getElementById('map'), {
            center: centerCoordinates,
            zoom: 15
        });
        manejarDatos(centroidesKMeans);
    }
    
    function manejarDatos(lugares) {
    var marker;
    var markers = [];
    var cuantos = 0;
    var openInfoWindow;
    // Agregar marcadores para cada lugar
    lugares.forEach(function(lugar) {
        cuantos++;
         marker =  new google.maps.Marker({
            position: { lat: lugar.lat, lng: lugar.lng },
            map: map,
            title: lugar.name
        });
        var infoWindow = new google.maps.InfoWindow({
        content: '<h3>' + lugar.name + '</h3><p>' + 'El punto ' + cuantos  + '</p>'
        });

        // Agrega un evento 'click' al marcador para mostrar el InfoWindow
        marker.addListener('click', function() {
        // Cierra cualquier InfoWindow abierto anteriormente
        if (openInfoWindow) {
            openInfoWindow.close();
        }

        // Abre el InfoWindow del marcador actual
        infoWindow.setContent('<h3>' + lugar.name + '</h3><p>' + 'El punto ' + cuantos  + '</p>');

        infoWindow.open(map, marker);
        // Almacena la referencia al InfoWindow abierto actualmente
        openInfoWindow = infoWindow;
    });

        // Almacenar el marcador en el array markers
        markers.push(marker);
    });
}

// Función para limpiar los marcadores del mapa
function clearMarkers() {
    markers.forEach(function(marker) {
        marker.setMap(null);
    });
    markers = [];
}
    
</script>