import axios from "axios";
import { useState } from "react";
import CardAlim from "./CardAlim";
import CarritoNav from "./CarritoNav";
import SelectPuntos from "./SelectPuntos";

interface Producto {
  imagen: string;
  fecha_cad: string;
  nomb_alim: string;
  cantidad: number;
}

interface PuntoMovil {
  id_punto: number;
}

function Marketplace() {
  const [productosPunto, setProductosPunto] = useState<Producto[]>([]);
  const [carrito, setCarrito] = useState<Producto[]>([]);

  const handleSelectPunto = async (punto: PuntoMovil) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/uxersiiPruebas/api/v1/alimentos/${punto.id_punto}/`
      );

      setProductosPunto(response.data.productos);
    } catch (error) {
      console.error("Error al realizar la solicitud GET:", error);
    }
  };

  const handleAgregarAlCarrito = (producto: Producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <>
      <section className="mx-32 my-10">
        <CarritoNav productosCarrito={carrito} />
        <SelectPuntos onSelectPunto={handleSelectPunto} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 auto-rows-[20rem] mt-10">
          {productosPunto.map((producto: Producto, index: number) => (
            <CardAlim
              key={index}
              img={producto.imagen}
              fecha={producto.fecha_cad}
              title={producto.nomb_alim}
              peso={producto.cantidad.toString()}
              precio="22"
              onAddToCart={() => handleAgregarAlCarrito(producto)}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Marketplace;
