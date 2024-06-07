/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { generateUrl } from "../../../apis/PruebasSignUp.api";
import CarritoNav from "../Marketplace/CarritoNav";
import CardAlimSelec from "./CardAlimSelec";
import CardTotalTicket from "./CardTotalTicket";

const url = generateUrl();

interface Producto {
  imagen: string;
  fecha_cad: string;
  nomb_alim: string;
  cantidad: number;
  costo: number;
  id_alim: number;
  id_carrito: number;
}

function ListaCompras() {
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [id_hog, setIdHogar] = useState("");

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

  function getCookie2(name: string): string | null {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i].trim();
      if (cookie.indexOf(cookieName) == 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }

    return null;
  }

  function setCookie(name: string, value: unknown, days: number = 30): void {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + JSON.stringify(value) + ";" + expires + ";path=/";
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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${url}carritog/${id_hog}/`);

        setCarrito(response.data.productos);
        console.log(response.data.productos);
              migrateProvisionalCart();

      } catch (error) {
        console.error("Error al realizar la solicitud GET:", error);
      }
    }
    fetchData(); // Llama a la función al cargar el componente

    async function migrateProvisionalCart() {
      const provisionalCartString = getCookie2("carritoProvi");
      let provisionalCart: Producto[] = [];

      if (provisionalCartString) {
        try {
          provisionalCart = JSON.parse(provisionalCartString);
          console.log(provisionalCart)
        } catch (error) {
          console.error("Error parsing provisional cart cookie:", error);
          return; // Exit if parsing fails
        }
      }

      if (provisionalCart.length > 0) {
        for (const product of provisionalCart) {
          for (let i = 0; i < product.cantidad; i++) {
            try {
              await axios.post(`${url}carritop/`, {
                id_alim: product.id_alim,
                id_hog,
                cantidad: 1
              });
            } catch (error) {
              console.error("Error al migrar producto al carrito definitivo:", error);
            }
          }
        }
        // Limpiar el carrito provisional después de migrar
        setCookie("carritoProvi", [], -1);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_hog]);

  return (
    <>
      <section className="mx-10">
        <div className="mx-32 my-10 justify-between items-center hidden ">
          <CarritoNav productosCarrito={carrito} />
        </div>
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-3/4 mb-4 md:mb-0">
            <CardAlimSelec productosCarrito={carrito} />
          </div>
          <div className="w-full md:w-1/4">
            <CardTotalTicket productosCarrito={carrito}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListaCompras;
