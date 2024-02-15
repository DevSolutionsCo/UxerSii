import PlaceIcon from "@mui/icons-material/Place";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";

function SelectPuntos() {
  const [punto, setPunto] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setPunto(event.target.value as string);
  };
  return (
    <FormControl className="w-72 h-10 ">
      <InputLabel
        id="demo-simple-select-label"
        className="text-white "
        color="primary"
      >
        <PlaceIcon />
        Puntos moviles
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={punto}
        label="‎ ‎ ‎ ‎ ‎ Puntos moviles"
        onChange={handleChange}
        className=" text-white"
        variant="outlined"
      >
        <MenuItem value={0}>Aqui van los puntos</MenuItem>
        {/* En value creo que debe  */}
        <MenuItem value={1}>Twenty</MenuItem>
        {/* <MenuItem value={30}>Thirty</MenuItem> */}
      </Select>
    </FormControl>
  );
}

export default SelectPuntos;
