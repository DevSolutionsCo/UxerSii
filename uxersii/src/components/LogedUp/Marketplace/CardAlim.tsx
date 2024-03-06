// CardAlim.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import BotonLogin from "../../Signed out/login/BotonLogin";

interface Props {
  img: string;
  fecha: string;
  title: string;
  peso: string;
  precio: string;
  onAddToCart: () => void;
}

function CardAlim(props: Props) {
  const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0);

  const handleClickAgregar = () => {
    setCantidadEnCarrito(cantidadEnCarrito + 1);
    props.onAddToCart(); // Llama a la función para actualizar el estado del carrito
  };

  return (
    <div className="my-4 p-2 border shadow-black/50 shadow-sm rounded-md flex flex-col h-full cursor-pointer">
      <Link
        to={`item?img=${props.img}&fecha=${props.fecha}&title=${props.title}&peso=${props.peso}&precio=${props.precio}`}
      >
        {" "}
        <img
          src={props.img}
          className="w-full h-24 object-cover rounded-t-md"
          alt="Imagen del producto"
        />
        <div className="flex-grow flex flex-col justify-between p-2">
          <div className="py-7">
            <h2 className="text-sm font-semibold">{props.fecha}</h2>
            <h2 className="text-base font-bold">{props.title}</h2>
            <h2 className="text-sm">
              Cantidad: <span className="font-bold">{props.peso}</span>
            </h2>
            <h2 className="text-sm">{props.precio}</h2>
          </div>
        </div>
      </Link>
      <BotonLogin
        className="mt-2 bg-[#C3DDFF] border-2 px-4 py-2 rounded-md font-bold text-black self-end w-full"
        onClick={handleClickAgregar}
      >
        Agregar
      </BotonLogin>
    </div>
  );
}

export default CardAlim;
