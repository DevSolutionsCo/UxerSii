import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
interface Props {
  imagen?: string;
  title?: string;
  precio?: string;
  fecha?: string;
  cantidad?: string;
}

function HoverCarrito(props: Props) {
  return (
    <div className="border border-black/5 flex justify-start w-full h-full items-center rounded-lg">
      <div className="p-2 ">
        <img src={props.imagen} className="w-auto h-20" />
      </div>
      <div className="mr-auto ml-5 min-w-56">
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <p>Precio: {props.precio} </p>
        <p>Fecha de caducidad: {props.fecha} </p>
        <p className="flex gap-8 items-center">
          <span>Cantidad: {props.cantidad}</span>
          <ButtonGroup
            variant="text"
            aria-label="Basic button group"
            color="inherit"
          >
            <Button startIcon={<AddIcon />} color="success"></Button>
            <Button startIcon={<RemoveIcon />} color="error"></Button>
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
