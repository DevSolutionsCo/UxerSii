import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { Link } from "react-router-dom";
const handleLogout = () => {
  // Aquí colocarías la lógica para cerrar sesión, por ejemplo:
  // 1. Limpiar el estado de autenticación
  // 2. Redirigir al usuario a la página de inicio de sesión
  console.log("Sesión cerrada"); // Solo para propósitos de ejemplo
};
export const mainListItems = (
  handleItemClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
) => (
  <React.Fragment>
    <Link to="/main">
      <ListItemButton onClick={handleItemClick}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Inicio" />
      </ListItemButton>
    </Link>
    <Link to="marketplace">
      <ListItemButton onClick={handleItemClick}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Marketplace" />
      </ListItemButton>
    </Link>

    <Link to="donaciones">
      <ListItemButton onClick={handleItemClick}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Donaciones" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  handleItemClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
) => (
  <React.Fragment>
    <Link to='/'>
    <ListItemButton onClick={handleLogout}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Cerrar sesión" />
    </ListItemButton>
    </Link>
  </React.Fragment>
);
