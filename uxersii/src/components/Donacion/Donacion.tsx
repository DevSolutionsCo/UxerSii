/* eslint-disable @typescript-eslint/no-unused-vars */
import Popup from "../Popups/Popup";
import "./Donacion.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

interface PuntoMovil {
  nomb_punto: string;
  direccion: string;
  horario: string;
  latitud: number;
  longitud: number;
  almacenamiento: number;
  // Agrega otras propiedades según la estructura real de tus datos
}

function Donacion() {
  const [puntos, setPuntos] = useState<PuntoMovil[]>([]);
  const [puntosMoviles, setPuntosMoviles] = useState<PuntoMovil[]>([]);
  const [puntoMasCercano, setPuntoMas] = useState<PuntoMovil[]>([]);
  const [latitud, setLatitud] = useState<number>(0);
  const [longitud, setLongitud] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nombMas, setNombMas] = useState("");
  const [horarioMas, setHorarioMas] = useState("");

  const puntoMasCercanoRef = useRef<PuntoMovil | undefined>(undefined);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLatitud(position.coords.latitude);
          setLongitud(position.coords.longitude);
        },
        function (error) {
          console.error("Error al obtener la ubicación: " + error.message);
        }
      );
    } else {
      console.error("Geolocalización no está soportada por este navegador");
    }
  }, []);

  useEffect(() => {
    // Esta función de devolución de llamada se ejecutará cada vez que latitud o longitud se actualicen
    console.log("Ubicación obtenida:");
    console.log("Latitud: " + latitud + ", " + longitud);
  }, [latitud, longitud]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/uxersiiPruebas/api/v1/puntosm/",
          {
            // Puedes incluir parámetros de consulta aquí si es necesario
          }
        );

        setPuntosMoviles(response.data.puntosmoviles);
        console.log(response.data);
        // Maneja la respuesta según tus necesidades
        setPuntos(response.data.puntosmoviles);
        console.log(puntosMoviles);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error) {
        // Manejo de errores
        console.error("Error al realizar la solicitud GET:", error);
      }
    }

    fetchData(); // Llama a la función al cargar el componente
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const deg2rad = (deg: number) => {
      return deg * (Math.PI / 180);
    };

    /*
    Esto es para comprobar si si te da el mas cercano
    const latitud1= 19.331529;
    const longitud1= -99.209383;
    */

    const ubicacionUsuario = { latitud, longitud };

    const calcularDistancia = (
      lat1: number,
      lon1: number,
      lat2: number,
      lon2: number
    ) => {
      const R = 6371; // Radio de la Tierra en kilómetros
      const dLat = deg2rad(lat2 - lat1);
      const dLon = deg2rad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distancia = R * c; // Distancia en kilómetros
      return distancia;
    };

    let puntoMasCercano: PuntoMovil | undefined;
    let distanciaMinima = Number.MAX_VALUE;

    puntosMoviles.forEach((punto) => {
      const distancia = calcularDistancia(
        ubicacionUsuario.latitud,
        ubicacionUsuario.longitud,
        punto.latitud,
        punto.longitud
      );

      if (distancia < distanciaMinima) {
        distanciaMinima = distancia;
        puntoMasCercano = punto;
      }
    });

    if (
      JSON.stringify(puntoMasCercano) !==
      JSON.stringify(puntoMasCercanoRef.current)
    ) {
      setPuntoMas(puntoMasCercano ? [puntoMasCercano] : []);
      setNombMas(puntoMasCercano ? puntoMasCercano.nomb_punto : "");
      setHorarioMas(puntoMasCercano ? puntoMasCercano.horario : "");
    }

    puntoMasCercanoRef.current = puntoMasCercano;
  });

  const [showPopup, setShowPopup] = useState(false);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleShowPopup = () => {
    setShowPopup(true);
  };

  return (
    <div className="content">
      <div className="texto">
        <p className="text-emot">
          Recuerda que una <br /> pequeña ayuda <br /> hace una gran diferecia{" "}
        </p>
      </div>
      <div>
        <button
          className="btn-ope px-8 py-5 relative rounded-xl font-bold text-black w-full"
          onClick={handleShowPopup}
        >
          DONAR
        </button>
      </div>
      <Popup
        titulo="Escoge un punto movil"
        texbtn="Confirmar seleccion de punto movil"
        onClose={handleClosePopup}
        isOpen={showPopup}
      >
        <article className="pop-don-hog-1 p-5 relative rounded-xl border bg-white/40 h-full shadow-xl shadow-black flex flex-col justify-between">
          <input
            type="number"
            placeholder="Codigo postal "
            className="zip-code shadow-sm  shadow-black w-full h-8 p-5"
            minLength={5}
            maxLength={5}
          />

          <article className="pop-don-hog-1 p-5  relative rounded-xl border bg-white/40 h-full shadow-2xl shadow-black flex flex-col justify-between">
            <section>
              <p>
                <span className="font-extrabold">Punto movil mas cercano</span>
                <br />
                <p>{nombMas}</p>
                <br />
                <span className="font-extralight">Horario: {horarioMas} </span>
              </p>
            </section>
          </article>
        </article>
      </Popup>

      <Popup
        titulo="Escoge un punto movil"
        texbtn="Confirmar seleccion de punto"
        onClose={handleClosePopup}
      ></Popup>
    </div>
  );
}

export default Donacion;
