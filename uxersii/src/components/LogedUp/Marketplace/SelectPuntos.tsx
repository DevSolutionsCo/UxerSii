// SelectPuntos.tsx
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export interface PuntoMovil {
  nomb_punto: string;
  id_punto: number;
}

interface SelectPuntosProps {
  onSelectPunto: (punto: PuntoMovil) => void;
}

const SelectPuntos: React.FC<SelectPuntosProps> = ({ onSelectPunto }) => {
  const [puntosMoviles, setPuntosMoviles] = useState<PuntoMovil[]>([]);
  const [punto, setPunto] = useState<string>("");

  const handleSelectChange = async (event: SelectChangeEvent) => {
    const selectedId = parseInt(event.target.value as string);
    const selectedPunto = puntosMoviles.find(
      (punto) => punto.id_punto === selectedId
    );
    if (selectedPunto) {
      onSelectPunto(selectedPunto);
      setPunto(String(selectedId)); // Actualizar con el ID del punto
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:8000/uxersiiPruebas/api/v1/puntosm/"
        );
        setPuntosMoviles(response.data.puntosmoviles);
      } catch (error) {
        console.error("Error al realizar la solicitud GET:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <FormControl className="w-72 h-10 ">
      <InputLabel
        id="demo-simple-select-label"
        className="text-white "
        color="primary"
      >
        Puntos móviles
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={punto}
        label="Puntos móviles"
        onChange={handleSelectChange}
        className=" text-white"
        variant="outlined"
      >
        {puntosMoviles.map((punto) => (
          <MenuItem value={punto.id_punto} key={punto.id_punto}>
            {punto.nomb_punto}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectPuntos;
