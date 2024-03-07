import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import BotonLogin from "../../Signed out/login/BotonLogin";
import HoverCarrito from "./HoverCarrito";
const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: "2px solid #fff", // Border color
    padding: "0 4px",
    backgroundColor: "#C3DDFF", // Custom background color
    color: "#000", // Custom text color
  },
});

interface Producto {
  imagen: string;
  fecha_cad: string;
  nomb_alim: string;
  cantidad: number;
}

interface CarritoNavProps {
  productosCarrito: Producto[];
}

function CarritoNav({ productosCarrito }: CarritoNavProps) {
  const [hoverCarritoVisible, setHoverCarritoVisible] = useState(false);

  const totalItems = productosCarrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

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
          <div
            className="absolute top-12 -right-9 bg-white rounded shadow-md p-2 w-[400px]"
            onMouseEnter={() => setHoverCarritoVisible(true)}
            onMouseLeave={() => setHoverCarritoVisible(false)}
          >
            {productosCarrito.map((producto, index) => (
              <HoverCarrito
                key={index}
                precio="22"
                imagen={producto.imagen}
                title={producto.nomb_alim}
                cantidad={producto.cantidad.toString()}
                fecha={producto.fecha_cad}
              />
            ))}

            <BotonLogin className="mt-2 bg-[#C3DDFF] border-2 px-4 py-2 rounded-md font-bold text-black self-end w-full">
              Pagar
            </BotonLogin>
          </div>
        )}
      </div>
    </nav>
  );
}

export default CarritoNav;
