import { useState } from "react";
import Popup from "../Popups/Popup";

import BotonIndex from "../Signed out/NabVarComponent/Boton";
function Donacion() {
  const [showPopup, setShowPopup] = useState(false);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleShowPopup = () => {
    setShowPopup(true);
  };
  return (
    <div>
      <h1 className="text-5xl">
        Cris, configure el popup para pasarle una funcion en un botoncito y que
        se abra y se cierre. Puedes borrar todo el ejemplo del boton que te voy
        a poner
      </h1>
      <BotonIndex
        onClick={handleShowPopup}
        className="border-2 px-6 py-3 relative rounded-xl font-bold text-white bg-green-900 w-full"
      >
        Picale
      </BotonIndex>
      {/* Espacio Publicitario */}
      <Popup
        titulo="Escoge un punto movil"
        texbtn="Confirmar seleccion de punto movil"
        onClose={handleClosePopup}
        isOpen={showPopup}
      ></Popup>
    </div>
  );
}

export default Donacion;
