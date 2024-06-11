import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
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
    {/* <Link to="/main">
      <ListItemButton onClick={handleItemClick}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Inicio" />
      </ListItemButton>
    </Link> */}
    <Link to="marketplace">
      <ListItemButton onClick={handleItemClick}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Inicio" />
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

    <Link to="perfil">
      <ListItemButton onClick={handleItemClick}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItemButton>
    </Link>

    <Link to="ranking">
      <ListItemButton onClick={handleItemClick}>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Ranking" />
      </ListItemButton>
    </Link>

    <Link to="puntos">
      <ListItemButton onClick={handleItemClick}>
        <ListItemIcon>
          <LocationOnIcon />
        </ListItemIcon>
        <ListItemText primary="Puntos Moviles" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  handleItemClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
) => (
  <React.Fragment>
    <Link to="/">
      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Cerrar sesión" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
