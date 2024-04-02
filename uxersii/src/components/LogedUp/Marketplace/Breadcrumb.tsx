import Breadcrumbs from "@mui/material/Breadcrumbs";

import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

interface Alimento {
  name: string;
}

export default function Breadcrumb(props: Alimento) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/main">Main</Link>
        <Link to="/main/marketplace">Marketplace</Link>
        <Typography color="text.primary">{props.name}</Typography>
      </Breadcrumbs>
    </div>
  );
}
