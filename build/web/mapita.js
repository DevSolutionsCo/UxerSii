function initMap() {
    // Coordenadas del centro del mapa (puedes ajustar estas coordenadas)
    var centerCoordinates = { lat: 19.454513245250173, lng: -99.17524305989036 };
        // Configuración inicial del mapa
        map = new google.maps.Map(document.getElementById('map'), {
            center: centerCoordinates,
            zoom: 8
        });
}
       function distanciaHaversine(coord1, coord2) {
        const radioTierra = 6371; // Radio medio de la Tierra en kilómetros
    
        const [lat1, lon1] = coord1;
        const [lat2, lon2] = coord2;
    
        const dLat = ((lat2 - lat1)*Math.PI) / 180;
        const dLon = ((lon2 - lon1)*Math.PI) / 180;
    
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos((lat1*Math.PI) / 180) * Math.cos((lat2*Math.PI) / 180) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
        const distancia = radioTierra * c;
    
        return distancia;
}

function toRadian(grados) {
    return grados * (Math.PI / 180);
}


// Implementación de DBSCAN
function dbscan(datos, epsilon, minPuntos) {
    const clusters = new Array(datos.length).fill(0);
    let clusterActual = 0;

    for (let i = 0; i < datos.length; i++) {
        if (clusters[i] !== 0) continue;

        const vecinos = [];

        for (let j = 0; j < datos.length; j++) {
            if (distanciaHaversine(datos[i], datos[j]) < epsilon) {
                vecinos.push(j);
            }
        }

        if (vecinos.length < minPuntos) {
            clusters[i] = -1;  // Punto de ruido
        } else {
            clusterActual++;
            asignarCluster(i, vecinos, clusterActual);
        }
    }

    return clusters;

    function asignarCluster(punto, vecinos, cluster) {
        clusters[punto] = cluster;

        for (const vecino of vecinos) {
            if (clusters[vecino] === 0) {
                asignarCluster(vecino, encontrarVecinos(vecino), cluster);
            }
        }
    }

    function encontrarVecinos(punto) {
        const vecinos = [];

        for (let i = 0; i < datos.length; i++) {
            if (distanciaHaversine(datos[punto], datos[i]) < epsilon) {
                vecinos.push(i);
            }
        }

        return vecinos;
    }
}

// Implementación de K-means
function kmeans(datos, k) {
    
    const centroides = inicializarCentroides(datos, k);
    let cambios = true;

    let iteracion = 0;

    for (let index = 0; index < k; index++) {
        
        const asignaciones = asignarPuntosACluster(datos, centroides);
        cambios = actualizarCentroides(datos, asignaciones, centroides);
    }

    // Agrega nombres a los centroides
    const centroidesConNombres = centroides.map((centroide, index) => {
        const [lat, lng] = centroide;
        return { lat, lng, name: `Lugar ${index + 1}` };
    });

    return centroidesConNombres;

    function inicializarCentroides(datos, k) {
        const centroides = [];

        // Selecciona aleatoriamente k puntos como centroides iniciales
        const indicesAleatorios = [];
        while (indicesAleatorios.length < k) {
            const indice = Math.floor(Math.random() * datos.length);
            if (!indicesAleatorios.includes(indice)) {
                indicesAleatorios.push(indice);
                centroides.push(datos[indice].slice());
            }
        }

        return centroides;
    }

    function asignarPuntosACluster(datos, centroides) {

        const asignaciones = [];

        for (const punto of datos) {
            let distanciaMinima = Infinity;
            let clusterAsignado = -1;

            for (let i = 0; i < k; i++) {
                const distancia = distanciaHaversine(punto, centroides[i]);
                if (distancia < distanciaMinima) {
                    distanciaMinima = distancia;
                    clusterAsignado = i;
                }
            }

            asignaciones.push(clusterAsignado);
        }

        return asignaciones;
    }

    function actualizarCentroides(datos, asignaciones, centroides) {
        const nuevosCentroides = [];
    
        for (let i = 0; i < centroides.length; i++) {
            const puntosEnCluster = [];
    
            for (let j = 0; j < datos.length; j++) {
                if (asignaciones[j] === i) {
                    puntosEnCluster.push(datos[j]);
                }
            }
    
            if (puntosEnCluster.length > 0) {
                const nuevoCentroide = calcularPromedio(puntosEnCluster);
                nuevosCentroides.push(nuevoCentroide);
            }
        }
    
        const cambios = !arraysIguales(centroides, nuevosCentroides);
        centroides.splice(0, centroides.length, ...nuevosCentroides);
    
        return cambios;  // Devuelve true si hubo cambios, false en caso contrario
    }
    

    function calcularPromedio(puntos) {
        const suma = puntos.reduce((acum, punto) => punto.map((coord, index) => acum[index] + coord), Array.from({ length: puntos[0].length }, () => 0));
        return suma.map(valor => valor / puntos.length);
    }

    function arraysIguales(arr1, arr2) {
        return arr1.length === arr2.length && arr1.every((valor, index) => valor === arr2[index]);
    }
}

const datos = [[40.7128, -74.0060], // Times Square
[40.7589, -73.9851], // Central Park
[40.7060, -74.0088], // Battery Park
[40.7418, -73.9893], // Grand Central Terminal
[40.7489, -73.9680], // United Nations Headquarters
[40.7233, -73.9823], // Washington Square Park
[40.7696, -73.9772], // The Museum of Modern Art (MoMA)
[40.7555, -73.9867], // Rockefeller Center
[40.7437, -74.0071], // One World Trade Center
[40.7309, -73.9872], // Empire State Building
[40.7587, -73.9787], // Bryant Park
[40.7143, -74.0060], // Financial District
[40.7650, -73.9790], // Radio City Music Hall
[40.7267, -73.9950], // Greenwich Village
[40.7492, -73.9912]];  // Chelsea Market
const clustersDBSCAN = dbscan(datos, 1, 3);

// Filtra el ruido (puntos que pertenecen al cluster -1)
const conjuntoPuntos = datos.filter((punto, index) => clustersDBSCAN[index] !== -1);
console.log("conjunto: ", conjuntoPuntos);
console.log("Etiquetas DBSCAN:", clustersDBSCAN);

// Aplica K-means para encontrar el punto central
const cantidadClustersDBSCAN = Math.max(...clustersDBSCAN);
console.log("canti:", cantidadClustersDBSCAN );

var centroidesKMeans = kmeans(conjuntoPuntos, cantidadClustersDBSCAN);
console.log("Centroide encontrado:", centroidesKMeans);

    // Generar o modificar datos
var data = [
    { "lat": -34.4, "lng": 150.7, "name": "Lugar A" },
    { "lat": -34.5, "lng": 150.8, "name": "Lugar B" },
    { "lat": -34.6, "lng": 150.9, "name": "Lugar C" }
    // Puedes agregar más lugares aquí
];

// Convertir datos a formato JSON
var jsonData = JSON.stringify(centroidesKMeans);

// Llamar a la función para pasar los datos al otro script
pasarDatosAlOtroScript(jsonData);

   
   var map;
// Variables globales para el mapa y marcadores
var map;
var markers = [];

// Función para recibir datos del otro script
function pasarDatosAlOtroScript(jsonData) {
    // Convertir el JSON de nuevo a un objeto
    var lugares = JSON.parse(jsonData);

    // Inicializar el mapa si aún no se ha hecho
    if (!map) {
        initMap();
    }

    // Llamar a una función para manejar los datos y agregar marcadores
    manejarDatos(lugares);
}

// Función para manejar los datos recibidos y agregar marcadores
function manejarDatos(centroidesKMeans) {
    // Limpiar marcadores existentes si los hay
    clearMarkers();

    // Agregar marcadores para cada lugar
    lugares.forEach(function(lugar) {
        var marker = new google.maps.Marker({
            position: { lat: lugar.lat, lng: lugar.lng },
            map: map,
            title: lugar.name
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