/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { generateUrl } from "../../../apis/PruebasSignUp.api";
import CarritoNav from "../Marketplace/CarritoNav";
import { useState, useEffect } from "react";
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
}

function ListaCompras() {
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [id_hog, setIdHogar] = useState("");


  function getCookie(name: string): string | null {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
  
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
          console.log(id_hog)
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
          console.log(response.data.productos)
        } catch (error) {
          console.error("Error al realizar la solicitud GET:", error);
        }
      }
      fetchData(); // Llama a la función al cargar el componente
      console.log(id_hog)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id_hog]);
  

  return (
    <>
      <section className="mx-10">
        <div className="mx-32 my-10 flex justify-between items-center ">
          <CarritoNav productosCarrito={carrito} />
        </div>
        <div className="flex flex-col md:flex-row items-start">
        

          <div className="w-full md:w-3/4 mb-4 md:mb-0">
            <CardAlimSelec 
              productosCarrito={carrito}/>
          </div>
          <div className="w-full md:w-1/4">
            <CardTotalTicket />
          </div>
        </div>
      </section>
    </>
  );
}

export default ListaCompras;
