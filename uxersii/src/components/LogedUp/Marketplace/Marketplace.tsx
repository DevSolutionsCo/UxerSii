// Marketplace.tsx
import axios from "axios";
import { useState } from "react";
import SelectPuntos, { PuntoMovil } from "./SelectPuntos";

function Marketplace() {
  const [productosPunto, setProductosPunto] = useState<any[]>([]);

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
        {productosPunto.map((producto: any, index: number) => (
          <div className="w-56 h-56 my-10" key={index}>
            <div className="prod">
              <img
                src={producto.imagen}
                alt="Producto"
                className="w-44 img-prod"
              />
              <div className="desc">
                <span className="font-extralight time-cad">
                  {producto.fecha_cad}
                </span>
                <h5 className="font-bold name-prod">{producto.nomb_alim}</h5>
                <span className="font-medium">{producto.cantidad}kg</span>
                <div className="flex flex-row justify-between items-center">
                  <h4 className="price font-semibold">$120</h4>
                  <div>
                    <button className="font-extrabold btn-agregar">+</button>
                    <button className="font-bold btn-rest">-</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Marketplace;
