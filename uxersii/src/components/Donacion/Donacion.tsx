<<<<<<< HEAD
 import Popup from '../Popups/Popup';
import "./Donacion.css";

=======
import { useState } from "react";
import Popup from "../Popups/Popup";
>>>>>>> ffd7029b1e7744dd51fd9c13131a7a1d3b91f061

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
<<<<<<< HEAD
    <div className="content">
      <div className="texto">
        <p className="text-emot">
          Recuerda que una <br /> pequeña ayuda <br /> hace una gran diferecia{" "}
        </p>
      </div>
      <div>
        <Popup
              titulo="Escoge un punto movil"
              texbtn="Confirmar seleccion de punto movil"
            ></Popup>
      </div>
      
=======
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
>>>>>>> ffd7029b1e7744dd51fd9c13131a7a1d3b91f061
    </div>
  );
}

export default Donacion;
