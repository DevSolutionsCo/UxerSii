import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import BotonLogin from "../../Signed out/login/BotonLogin";
import HoverCarrito from "./HoverCarrito";

interface Producto {
  imagen: string;
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
    backgroundColor: "#F63E4F",
    color: "#fff",
  },
});

function CarritoNav({ productosCarrito }: CarritoNavProps) {
  const cantidades: { [key: string]: number } = {};

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
    <nav className="w-auto flex justify-center relative pb-5 lg:justify-end lg:pb-0 z-50">
      <div
        onMouseEnter={() => setHoverCarritoVisible(true)}
        onMouseLeave={() => setHoverCarritoVisible(false)}
        className="relative"
      >
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={totalItems}>
            <ShoppingCartIcon fontSize="large" />
          </StyledBadge>
        </IconButton>

        {hoverCarritoVisible && (
          <div
            className="fixed top-12 left-1/2 transform -translate-x-1/2 bg-white rounded shadow-md p-2 w-[470px] overflow-auto max-h-[50vh] scrollbar-thin translate-y-3/4
          lg:absolute lg:top-12 lg:-right-9 lg:-translate-x-3/4 lg:translate-y-0
          "
          >
            {Object.entries(cantidades).map(([nombre, cantidad], index) => {
              const producto = productosCarrito.find(
                (p) => p.nomb_alim === nombre
              );
              if (!producto) return null;
              return (
                <HoverCarrito
                  key={index}
                  precio={"$" + producto.costo.toString()}
                  title={nombre}
                  fecha={producto.fecha_cad}
                  cantidad={cantidad.toString()}
                  imagen={producto.imagen}
                />
              );
            })}
            <Link to="carrito">
              <BotonLogin className="mt-2 bg-[#F63E4F] border-2 px-4 py-2 rounded-md font-bold text-white self-end w-full">
                Ver el carrito
              </BotonLogin>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default CarritoNav;
