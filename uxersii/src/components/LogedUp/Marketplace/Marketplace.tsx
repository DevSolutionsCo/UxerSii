// Marketplace.tsx
import axios from "axios";
import { useState } from "react";
import SelectPuntos, { PuntoMovil } from "./SelectPuntos";
import CardAlim from "./CardAlim";
interface Producto {
  imagen: string;
  fecha_cad: string;
  nomb_alim: string;
  cantidad: number;
}

function Marketplace() {
  const [productosPunto, setProductosPunto] = useState<Producto[]>([]);

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

  return (
    <>
      <section className="mx-32 my-10">
        <SelectPuntos onSelectPunto={handleSelectPunto} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 auto-rows-[20rem]">
  {productosPunto.map((producto: any, index: number) => (
    
      <CardAlim
        img={producto.imagen}
        fecha={producto.fecha_cad}
        title={producto.nomb_alim}
        peso={producto.cantidad}
        precio="22"
      />
    
  ))}
</div>




      </section>
    </>
  );
}

export default Marketplace;
