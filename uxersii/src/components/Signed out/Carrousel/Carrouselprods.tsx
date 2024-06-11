/* eslint-disable @typescript-eslint/no-unused-vars */

import { CarouselSize } from "@/components/LogedUp/Marketplace/CarouselSize";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { generateUrl } from "../../../apis/PruebasSignUp.api";
import "../MainScreen/fuenteMain.css";

interface PuntoMovil {
  nomb_punto: string;
  direccion: string;
  horario: string;
  latitud: number;
  longitud: number;
  almacenamiento: number;
  id_punto: number;
  // Agrega otras propiedades según la estructura real de tus datos
}

function getCookie(name: string): string | null {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].trim();
    if (cookie.indexOf(cookieName) == 0) {
      return JSON.parse(cookie.substring(cookieName.length, cookie.length));
    }
  }

  return null;
}

export function Carrouselprods() {
  const [productos, setProductos] = useState([]);
  const [puntos, setPuntos] = useState<PuntoMovil[]>([]);
  const [puntosMoviles, setPuntosMoviles] = useState<PuntoMovil[]>([]);
  const [latitud, setLatitud] = useState<number>(0);
  const [id_punto, setIdPunto] = useState<number>(0);
  const [longitud, setLongitud] = useState<number>(0);
  const [nombUserH, setNombreUser] = useState("");
  const [estatus, setEstatus] = useState("En proceso");

  const url = generateUrl();
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
    const datosUsuarioStringL = getCookie("usuarioL");

    if (datosUsuarioStringL !== null) {
      const datosUsuario = JSON.parse(datosUsuarioStringL);
      setNombreUser(datosUsuario.nombUserH);
    } else {
      console.error("Los datos del usuario no están disponibles.");
    }
  }, []);

  useEffect(() => {
    console.log("Ubicación obtenida:");
    console.log("Latitud: " + latitud + ", " + longitud);
  }, [latitud, longitud]);

  useEffect(() => {
    async function fetchData() {
      console.log(nombUserH + " hola");
      try {
        const response = await axios.get(`${url}puntosm/`);
        setPuntosMoviles(response.data.puntosmoviles);
        setPuntos(response.data.puntosmoviles);
      } catch (error) {
        console.error("Error al realizar la solicitud GET:", error);
      }
    }
    fetchData();
  }, [url, nombUserH]);

  useEffect(() => {
    if (latitud === 0 || longitud === 0 || puntosMoviles.length === 0) return;

    const deg2rad = (deg: number) => {
      return deg * (Math.PI / 180);
    };

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
      return R * c; // Distancia en kilómetros
    };

    let puntoMasCercano: PuntoMovil | undefined;
    let distanciaMinima = Number.MAX_VALUE;

    puntosMoviles.forEach((punto) => {
      const distancia = calcularDistancia(
        latitud,
        longitud,
        punto.latitud,
        punto.longitud
      );
      if (distancia < distanciaMinima) {
        distanciaMinima = distancia;
        puntoMasCercano = punto;
      }
    });

    if (puntoMasCercano && puntoMasCercano.id_punto !== id_punto) {
      setIdPunto(puntoMasCercano.id_punto);
    }

    puntoMasCercanoRef.current = puntoMasCercano;
  }, [latitud, longitud, puntosMoviles]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get(`${url}alimentos/${id_punto}/`);
        setProductos(response.data.productos);
      } catch (error) {
        console.error("Error al realizar la solicitud GET:", error);
      }
    };

    if (id_punto !== 0) {
      fetchProductos();
    }
  }, [id_punto, url]);

  return (
    <>
      <section className="">
        <div className="flex items-center justify-center py-10">
          <CarouselSize products={productos}></CarouselSize>
        </div>
      </section>
    </>
  );
}
