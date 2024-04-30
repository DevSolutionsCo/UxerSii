// Marketplace.tsx
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

interface PuntoMovil {
  id_punto: number;
}

function Marketplace() {
  const [productosPunto, setProductosPunto] = useState<Producto[]>([]);
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
        <CarritoNav productosCarrito={carrito} />
        <SelectPuntos onSelectPunto={handleSelectPunto} />
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
      </section>
    </>
  );
}

export default Marketplace;
