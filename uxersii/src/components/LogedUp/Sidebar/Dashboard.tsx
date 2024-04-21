import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import darklogo from "../../../assets/logoLightTheme.svg";
import { mainListItems, secondaryListItems } from "./listItems";

const drawerWidth: number = 230;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "absolute",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleItemClick = () => {
    setOpen(false); // Cierra la barra lateral cuando se hace clic en un elemento de la lista
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="hidden lg:flex">
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [2],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems(handleItemClick)}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems(handleItemClick)}
          </List>
        </Drawer>
      </div>

      <nav className="flex flex-col justify-between items-center px-4 lg:px-10 lg:flex-row bg-slate-50 dark:bg-zinc-800 w-screen lg:hidden">
        <div className="flex items-center mt-4">
          <img
            className="h-24 w-24 cursor-pointer"
            src={darklogo}
            alt="Dark Logo"
          />
        </div>

        <div
          className={`lg:flex ${
            isOpen ? "flex" : "hidden"
          } flex-col lg:flex-row items-center `}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 sm:space-x-4 gap-6 items-center font-semibold text-lg dark:text-white">
            <List component="nav">
              {mainListItems(handleItemClick)}
              <Divider sx={{ my: 1 }} />
              {secondaryListItems(handleItemClick)}
            </List>
          </ul>
        </div>
        <div
          className={`lg:flex  ${
            isOpen ? "flex" : "hidden"
          } flex-col lg:flex-row items-center`}
        >
          <div
            className="mt-4 lg:mt-0 flex lg:flex-row lg:justify-between lg:items-center flex-col
        "
          ></div>
        </div>

        {/* Icono de menú para dispositivos móviles */}
        <div
          className="lg:hidden cursor-pointer my-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined text-black">menu</span>
        </div>
      </nav>

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "hidden",
          paddingTop: "20px",
        }}
      >
        <section className="h-screen w-screen overflow-x-hidden">
          <Outlet />
        </section>
      </Box>
    </>
  );
}
