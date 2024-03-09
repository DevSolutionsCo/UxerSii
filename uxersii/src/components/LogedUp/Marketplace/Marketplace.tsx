// Marketplace.tsx
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import axios from "axios";
import * as React from "react";
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
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
function Marketplace() {
  const [productosPunto, setProductosPunto] = useState<Producto[]>([]);
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [alerta, setAlerta] = useState<boolean>(false);

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
    if (producto.cantidad > 0) {
      setCarrito([...carrito, producto]);
    } else {
      setAlerta(true); // Mostrar alerta cuando no hay más elementos disponibles
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
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
              cantidad={producto.cantidad} // Asegúrate de pasar la propiedad cantidad
              onAddToCart={() => handleAgregarAlCarrito(producto)} // Pasar producto como argumento
            />
          ))}
        </div>
        {alerta && (
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Modal title
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
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
              <Typography gutterBottom>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </Typography>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Save changes
              </Button>
            </DialogActions>
          </BootstrapDialog>
        )}
      </section>
    </>
  );
}

export default Marketplace;
