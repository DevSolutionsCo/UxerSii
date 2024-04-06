import SelectPuntos from "../Marketplace/SelectPuntos";
import axios from "axios";
import { generateUrl } from "../../../apis/PruebasSignUp.api";
import CarritoNav from "../Marketplace/CarritoNav";
import { useState } from "react";
import CardAlimSelec from "./CardAlimSelec";
import CardTotalTicket from "./CardTotalTicket";

const url = generateUrl();

interface Producto {
  imagen: string;
  fecha_cad: string;
  nomb_alim: string;
  cantidad: number;
  costo: number;
}
interface PuntoMovil {
  id_punto: number;
}
function ListaCompras() {
  const [carrito] = useState<Producto[]>([]);
  const handleSelectPunto = async (punto: PuntoMovil) => {
    try {
      await axios.get(`${url}alimentos/${punto.id_punto}/`);
    } catch (error) {
      console.error("Error al realizar la solicitud GET:", error);
    }
  };

  return (
    <>
      <section className="mx-10">
        <div className="mx-32 my-10 flex justify-between items-center ">
          <SelectPuntos onSelectPunto={handleSelectPunto} />
          <CarritoNav productosCarrito={carrito} />
        </div>
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-3/4 mb-4 md:mb-0">
            <CardAlimSelec />
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
