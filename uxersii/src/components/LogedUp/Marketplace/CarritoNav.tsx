// CarritoNav.tsx
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import BotonLogin from "../../Signed out/login/BotonLogin";
import HoverCarrito from "./HoverCarrito";

interface Producto {
  imagen: string; // Agregar la propiedad imagen al producto
  fecha_cad: string;
  nomb_alim: string;
  cantidad: number;
  costo: number;
}

interface CarritoNavProps {
  productosCarrito: Producto[];
}

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: "2px solid #fff",
    padding: "0 4px",
    backgroundColor: "#C3DDFF",
    color: "#000",
  },
});

function CarritoNav({ productosCarrito }: CarritoNavProps) {
  // Objeto para almacenar la cantidad total de cada producto
  const cantidades: { [key: string]: number } = {};

  // Consolidar las cantidades de los productos
  productosCarrito.forEach((producto) => {
    if (cantidades[producto.nomb_alim]) {
      cantidades[producto.nomb_alim] += producto.cantidad;
    } else {
      cantidades[producto.nomb_alim] = producto.cantidad;
    }
  });

  const totalItems = productosCarrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );
  const [hoverCarritoVisible, setHoverCarritoVisible] = useState(false);

  return (
    <nav className="w-auto flex justify-end relative">
      <div
        onMouseEnter={() => setHoverCarritoVisible(true)}
        onMouseLeave={() => setHoverCarritoVisible(false)}
      >
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={totalItems}>
            <ShoppingCartIcon fontSize="large" />
          </StyledBadge>
        </IconButton>
        {hoverCarritoVisible && (
          <div className="absolute top-12 -right-9 bg-white rounded shadow-md p-2 w-[470px] overflow-auto max-h-[50vh] scrollbar-thin ">
            {Object.entries(cantidades).map(([nombre, cantidad], index) => {
              const producto = productosCarrito.find(
                (p) => p.nomb_alim === nombre
              );
              if (!producto) return null;
              return (
              
                <HoverCarrito
                  key={index}
                  precio={"$" + producto.costo.toString()} // Pasa el precio del producto al HoverCarrito
                  title={nombre}
                  fecha={producto.fecha_cad}
                  cantidad={cantidad.toString()}
                  imagen={producto.imagen}
                />
              );
            })}
            <BotonLogin className="mt-2 bg-[#C3DDFF] border-2 px-4 py-2 rounded-md font-bold text-black self-end w-full">
              Ver el carrito
            </BotonLogin>
          </div>
        )}
      </div>
    </nav>
  );
}

export default CarritoNav;
