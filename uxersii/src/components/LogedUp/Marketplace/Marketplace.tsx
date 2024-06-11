// Marketplace.tsx
import { Carrouselprods } from "@/components/Signed out/Carrousel/Carrouselprods";
import axios from "axios";
import { useEffect, useState } from "react";
import { generateUrl } from "../../../apis/PruebasSignUp.api";
import CardAlim from "./CardAlim";
import CarritoNav from "./CarritoNav";
import SelectPuntos from "./SelectPuntos";

const url = generateUrl();

interface Producto {
  imagen: string;
  fecha_cad: string;
  nomb_alim: string;
  cantidad: number;
  costo: number;
  id_alim: number;
}
interface Iframe {
  src: string;
  id: number;
}

interface PuntoMovil {
  id_punto: number;
}

const iframes: Iframe[] = [
  {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7524.004959764598!2d-99.18047170845563!3d19.455459893575757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8bd9777a765%3A0x57501a5479751d18!2sCentro%20de%20Estudios%20Cient%C3%ADficos%20y%20Tecnol%C3%B3gicos%20N%C2%B0%209%20%22Juan%20de%20Dios%20B%C3%A1tiz%22%20IPN!5e0!3m2!1ses-419!2smx!4v1711947813208!5m2!1ses-419!2smx",
    id: 0,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3815.058385621122!2d-99.13581581358365!3d19.432610902384916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDI1JzU3LjQiTiA5OcKwMDcnNTkuNSJX!5e0!3m2!1ses!2smx!4v1716862983963!5m2!1ses!2smx",

    id: 1,
  },

  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3765.0691590828237!2d-99.18917492411961!3d19.3228050441768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDE5JzIyLjEiTiA5OcKwMTEnMTEuOCJX!5e0!3m2!1ses!2smx!4v1716863233605!5m2!1ses!2smx",

    id: 2,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3763.8833018420437!2d-99.07467492411875!3d19.374205042541906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDIyJzI3LjEiTiA5OcKwMDQnMTkuNiJX!5e0!3m2!1ses-419!2smx!4v1716863360424!5m2!1ses-419!2smx",

    id: 3,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3760.165546150376!2d-99.03047492411605!3d19.534505037417343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDMyJzA0LjIiTiA5OcKwMDEnNDAuNCJX!5e0!3m2!1ses-419!2smx!4v1716863646234!5m2!1ses-419!2smx",

    id: 4,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3764.215831919184!2d-99.27387492411903!3d19.359805043000268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDIxJzM1LjMiTiA5OcKwMTYnMTYuNyJX!5e0!3m2!1ses-419!2smx!4v1716863708439!5m2!1ses-419!2smx",

    id: 5,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3763.749298950796!2d-99.15817492411865!3d19.38000504235714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDIyJzQ4LjAiTiA5OcKwMDknMjAuMiJX!5e0!3m2!1ses-419!2smx!4v1716863768073!5m2!1ses-419!2smx",

    id: 6,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3764.160426750791!2d-99.170274924119!3d19.36220504292394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDIxJzQzLjkiTiA5OcKwMTAnMDMuNyJX!5e0!3m2!1ses-419!2smx!4v1716863801752!5m2!1ses-419!2smx",

    id: 7,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3764.2135235023616!2d-99.28057492411898!3d19.359905042997212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDIxJzM1LjYiTiA5OcKwMTYnNDAuOCJX!5e0!3m2!1ses-419!2smx!4v1716863830978!5m2!1ses-419!2smx",

    id: 8,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3762.824090956395!2d-99.19447492411798!3d19.420005041081662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDI1JzEyLjAiTiA5OcKwMTEnMzAuOCJX!5e0!3m2!1ses-419!2smx!4v1716863911318!5m2!1ses-419!2smx",

    id: 9,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3762.0130295299923!2d-99.1345749241174!3d19.45500503996377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDI3JzE4LjAiTiA5OcKwMDcnNTUuMiJX!5e0!3m2!1ses-419!2smx!4v1716863939037!5m2!1ses-419!2smx",

    id: 10,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3762.6968481705394!2d-99.1669!3d19.4255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDI1JzMxLjgiTiA5OcKwMTAnMDAuOCJX!5e0!3m2!1ses-419!2smx!4v1716864120764!5m2!1ses-419!2smx",

    id: 11,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3762.5138529450273!2d-99.1942!3d19.4334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDI2JzAwLjIiTiA5OcKwMTEnMzkuMSJX!5e0!3m2!1ses-419!2smx!4v1716864155998!5m2!1ses-419!2smx",

    id: 12,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3764.2598060636933!2d-99.16239999999999!3d19.3579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDIxJzI4LjQiTiA5OcKwMDknNDQuNiJX!5e0!3m2!1ses-419!2smx!4v1716864275297!5m2!1ses-419!2smx",

    id: 13,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3762.9538471785686!2d-99.1777!3d19.4144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDI0JzUxLjgiTiA5OcKwMTAnMzkuNyJX!5e0!3m2!1ses-419!2smx!4v1716864314040!5m2!1ses-419!2smx",

    id: 14,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3762.8728267001347!2d-99.16749999999995!3d19.417900000000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDI1JzA0LjQiTiA5OcKwMTAnMDMuMCJX!5e0!3m2!1ses-419!2smx!4v1716864346033!5m2!1ses-419!2smx",

    id: 15,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3766.7826968149857!2d-99.10199999999999!3d19.248300000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDE0JzUzLjkiTiA5OcKwMDYnMDcuMiJX!5e0!3m2!1ses-419!2smx!4v1716864379235!5m2!1ses-419!2smx",

    id: 16,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3762.770952462834!2d-99.181!3d19.4223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDI1JzIwLjMiTiA5OcKwMTAnNTEuNiJX!5e0!3m2!1ses-419!2smx!4v1716864411597!5m2!1ses-419!2smx",

    id: 17,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3760.879952177722!2d-99.2033!3d19.5038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDMwJzEzLjciTiA5OcKwMTInMTEuOSJX!5e0!3m2!1ses-419!2smx!4v1716864441103!5m2!1ses-419!2smx",

    id: 18,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3766.4336298582575!2d-99.2093!3d19.2635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDE1JzQ4LjYiTiA5OcKwMTInMzMuNSJX!5e0!3m2!1ses-419!2smx!4v1716864485791!5m2!1ses-419!2smx",

    id: 19,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3764.31058352855!2d-99.1861!3d19.3557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDIxJzIwLjUiTiA5OcKwMTEnMTAuMCJX!5e0!3m2!1ses-419!2smx!4v1716864543566!5m2!1ses-419!2smx",

    id: 20,
  },
];

function Marketplace() {
  const [productosPunto, setProductosPunto] = useState<Producto[]>([]);
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [id_hog, setIdHogar] = useState("");
  // const [iframeIndex, setIframeIndex] = useState<number>(0); // Estado para el índice del iframe seleccionado
  const [idSeleccionado, setidSeleccionado] = useState<number>(0);

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

  useEffect(() => {
    const datosUsuarioStringL = getCookie("usuarioL");

    // Verificar si el valor no es null antes de usarlo
    if (datosUsuarioStringL !== null) {
      const datosUsuario = JSON.parse(datosUsuarioStringL);
      //console.log(datosUsuario)
      // Actualizar el estado con el nuevo valor
      setIdHogar(datosUsuario.id_hog);
      console.log(id_hog);
      //setPasswUser(datosUsuario.contra_hog);
    } else {
      console.error("Los datos del usuario no están disponibles.");
    }
  }, []);

  const handleSelectPunto = async (punto: PuntoMovil) => {
    try {
      const response = await axios.get(`${url}alimentos/${punto.id_punto}/`);

      setidSeleccionado(punto.id_punto);
      setProductosPunto(response.data.productos);
    } catch (error) {
      console.error("Error al realizar la solicitud GET:", error);
    }
  };
  const handleAgregarAlCarrito = async (producto: Producto) => {
    const id_alim = producto.id_alim;
    console.log(id_alim);
    const productoExistente = carrito.find(
      (item) => item.nomb_alim === producto.nomb_alim
    );
    if (productoExistente) {
      // Si el producto ya está en el carrito, incrementa su cantidad en 1
      setCarrito(
        carrito.map((item) =>
          item.nomb_alim === producto.nomb_alim
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      // Si el producto no está en el carrito, agrégalo con una cantidad de 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }

    try {
      const response = await axios.post(`${url}carritop/`, {
        id_alim,
        id_hog,
      });
      console.log(response);
    } catch (error) {
      console.error("Error al realizar la solicitud GET:", error);
    }
  };

  return (
    <>
      <section className="lg:mx-32 lg:my-10 mx-5">
        <div className="flex justify-between items-center w-full px-4 my-8">
          <SelectPuntos onSelectPunto={handleSelectPunto} />
          <CarritoNav productosCarrito={carrito} />
        </div>
        {/* 
        {productosPunto.length > 0 && (

        )} */}

        <iframe
          src={iframes[idSeleccionado].src}
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]"
          loading="lazy"
        ></iframe>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 auto-rows-[20rem] mt-10 ">
          {productosPunto.map((producto: Producto, index: number) => (
            <CardAlim
              key={index}
              img={producto.imagen}
              fecha={producto.fecha_cad}
              title={producto.nomb_alim}
              peso={producto.cantidad.toString()}
              precio={producto.costo.toString()}
              cantidad={producto.cantidad} // Asegúrate de pasar la propiedad cantidad
              onAddToCart={() => handleAgregarAlCarrito(producto)} // Pasar producto como argumento
            />
          ))}
        </div>

        <Carrouselprods />
      </section>
    </>
  );
}

export default Marketplace;
