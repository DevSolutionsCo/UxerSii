import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import BotonLogin from "../../Signed out/login/BotonLogin";

interface Producto {
  img: string;
  fecha: string;
  title: string;
  peso: string;
  precio: string;
  cantidad: number;
}

interface Props extends Producto {
  onAddToCart: (producto: Producto) => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function CardAlim(props: Props) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [agregado, setAgregado] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [unidadesDisponibles, setUnidadesDisponibles] = useState(
    props.cantidad
  );

  const handleClickAgregar = () => {
    if (unidadesDisponibles > 0) {
      props.onAddToCart({
        img: props.img,
        fecha: props.fecha,
        title: props.title,
        peso: props.peso,
        precio: props.precio,
        cantidad: 1, // Siempre agregar solo una unidad
      });
      setAgregado(true); // Solo modificar el estado si se agregó correctamente
      setUnidadesDisponibles(unidadesDisponibles - 1); // Actualizar unidades disponibles
    } else {
      setShowAlert(true); // Mostrar la alerta si no hay suficiente cantidad
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <div className="my-4 p-2 border shadow-black/50 shadow-sm rounded-md flex flex-col h-full cursor-pointer">
      <Link
        to={`item?img=${props.img}&fecha=${props.fecha}&title=${props.title}&peso=${props.peso}&precio=${props.precio}`}
      >
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
            <h2 className="text-sm">${props.precio}</h2>
          </div>
        </div>
      </Link>
      <BotonLogin
        className="mt-2 bg-[#b9f0d1] border-2 px-4 py-2 rounded-md font-bold text-black self-end w-full"
        onClick={handleClickAgregar}
        disabled={!unidadesDisponibles} // Deshabilitar el botón cuando no hay unidades disponibles
      >
        {unidadesDisponibles > 0 ? "Agregar" : "Sin mas existencias"}
      </BotonLogin>
      {showAlert && unidadesDisponibles === 0 && (
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={showAlert}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Error
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography gutterBottom>
              No existen más unidades de este producto.
            </Typography>
          </DialogContent>
        </BootstrapDialog>
      )}
    </div>
  );
}

export default CardAlim;
