// Item.tsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
    <div className="mx-32 my-10">
      <img src={producto.img} className="w-80 h-80" />
      <p>Fecha: {producto.fecha}</p>
      <p>Titulo: {producto.title}</p>
      <p>Peso: {producto.peso}</p>
      <p>Precio: {producto.precio}</p>
    </div>
  );
}

export default Item;
