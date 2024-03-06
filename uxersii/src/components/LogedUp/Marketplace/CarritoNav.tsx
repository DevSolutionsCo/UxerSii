// CarritoNav.tsx
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

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

interface CarritoNavProps {
  cantidadCarrito: number;
}

function CarritoNav({ cantidadCarrito }: CarritoNavProps) {
  return (
    <Link to="carrito">
      <nav className="w-auto flex justify-end">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={cantidadCarrito}>
            <ShoppingCartIcon fontSize="large" />
          </StyledBadge>
        </IconButton>
      </nav>
    </Link>
  );
}

export default CarritoNav;
