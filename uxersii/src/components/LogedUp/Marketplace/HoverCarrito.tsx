// HoverCarrito.tsx
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";

interface Props {
  imagen?: string;
  title?: string;
  precio?: string;
  fecha?: string;
  cantidad?: string;
}

function HoverCarrito(props: Props) {
  const [cantidad, setCantidad] = useState(parseInt(props.cantidad || "0"));

  const aumentarCantidad = () => {
    setCantidad((prevCantidad) => prevCantidad + 1);
  };

  const disminuirCantidad = () => {
    if (cantidad > 0) {
      setCantidad((prevCantidad) => prevCantidad - 1);
    }
  };

  return (
    <div className="border border-black/5 flex justify-start w-full h-full items-center rounded-lg">
      <div className="p-2 ">
        <img src={props.imagen} className="w-auto h-20" alt="Product" />
      </div>
      <div className="mr-auto ml-5 min-w-56">
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <p>Precio: {props.precio} </p>
        <p>Fecha de caducidad: {props.fecha} </p>
        <p className="flex gap-8 items-center">
          <span>Cantidad: {cantidad}</span>
          <ButtonGroup
            variant="text"
            aria-label="Basic button group"
            color="inherit"
          >
            <Button
              onClick={aumentarCantidad}
              startIcon={<AddIcon />}
              color="success"
            ></Button>
            <Button
              onClick={disminuirCantidad}
              startIcon={<RemoveIcon />}
              color="error"
            ></Button>
          </ButtonGroup>
        </p>
      </div>
      <div className="font-black m-auto px-1">
        <DeleteIcon sx={{ fontSize: 30 }} />
      </div>
    </div>
  );
}

export default HoverCarrito;
