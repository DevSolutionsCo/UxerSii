// Item.tsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Breadcrumb from "./Breadcrumb";
import InfoText from "./InfoText";
interface Producto {
  img: string;
  fecha: string;
  title: string;
  peso: string;
  precio: string;
}

function Item() {
  const location = useLocation();
  const [producto, setProducto] = useState<Producto | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const img = searchParams.get("img");
    const fecha = searchParams.get("fecha");
    const title = searchParams.get("title");
    const peso = searchParams.get("peso");
    const precio = searchParams.get("precio");

    if (img && fecha && title && peso && precio) {
      setProducto({ img, fecha, title, peso, precio });
    } else {
      setProducto(null);
    }
  }, [location.search]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <section className="mx-32 my-10 flex flex-col">
      <Breadcrumb name={producto.title}></Breadcrumb>
      <div className="grid grid-cols-5 grid-rows-3 gap-4 h-[70vh] my-4">
        <img
          src={producto.img}
          className="col-span-3 row-span-3 w-full h-full rounded-2xl"
        />
        <div className="col-span-2 row-span-3 bg-gray-200 p-10 rounded-2xl">
          <InfoText
            title={producto.title}
            info="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, placeat? Repellendus autem, rerum laboriosam adipisci et totam earum veritat"
            cantidad={producto.peso}
            caducidad={producto.fecha}
            price={producto.precio}
          />
        </div>
      </div>
      <div className="w-full ml-10">
        {/* <CarouselSize products={productos}></CarouselSize> */}
      </div>
    </section>
  );
}

export default Item;
