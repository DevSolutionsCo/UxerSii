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
interface Iframe {
  src: string;
  width: number;
  height: number;
  id : number;
}

interface PuntoMovil {
  id_punto: number;
}

const iframes: Iframe[] = [
  { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7524.004959764598!2d-99.18047170845563!3d19.455459893575757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8bd9777a765%3A0x57501a5479751d18!2sCentro%20de%20Estudios%20Cient%C3%ADficos%20y%20Tecnol%C3%B3gicos%20N%C2%B0%209%20%22Juan%20de%20Dios%20B%C3%A1tiz%22%20IPN!5e0!3m2!1ses-419!2smx!4v1711947813208!5m2!1ses-419!2smx",
    width: 400, height: 300, id: 1},
  { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.024320161513!2d-99.17425433093136!3d19.453469586383957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8bdcff0650b%3A0x3727a3ff328352ef!2sPetroleras!5e0!3m2!1ses-419!2smx!4v1712002729321!5m2!1ses-419!2smx",
    width: 400, height: 300 , id: 2},
  { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.534587332926!2d-99.13482492494096!3d19.432505040684134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fecd34ddc421%3A0xe753afb2e882cd22!2sZ%C3%B3calo%2Ftenochtitlan!5e0!3m2!1ses-419!2smx!4v1712002787167!5m2!1ses-419!2smx",
    width: 400, height: 300, id: 3 },
  { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.159254803753!2d-99.18694252494343!3d19.31889454430264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce00071fca0bad%3A0x9989fa5b4f526717!2sUniversidad%20Nacional%20Aut%C3%B3noma%20de%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1712002832572!5m2!1ses-419!2smx",
    width: 600, height: 450 , id: 4},
  { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.278761869222!2d-99.27216632494263!3d19.357078743088685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d200b61f4f9119%3A0xeb1aa1132041ced2!2sParque%20La%20Mexicana!5e0!3m2!1ses-419!2smx!4v1712002888449!5m2!1ses-419!2smx",
    width: 400, height: 300, id: 5 }
];

function Marketplace() {
  const [productosPunto, setProductosPunto] = useState<Producto[]>([]);
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [id_hog, setIdHogar] = useState("");
  const [iframeIndex, setIframeIndex] = useState<number>(0); // Estado para el índice del iframe seleccionado
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
        <CarritoNav productosCarrito={carrito} />
        <SelectPuntos onSelectPunto={handleSelectPunto} />

        {productosPunto.length > 0 && (
          <iframe
            src={iframes[idSeleccionado].src}
            width={iframes[idSeleccionado].width}
            height={iframes[idSeleccionado].height}
            loading="lazy"
          ></iframe>
        )}

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
