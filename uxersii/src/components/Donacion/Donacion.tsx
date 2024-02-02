import Popup from "../Popups/Popup";
import "./Donacion.css";
import { useState } from "react";

function Donacion() {
  const [showPopup, setShowPopup] = useState(false);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleShowPopup = () => {
    setShowPopup(true);
  };
  return (
    <div className="content">
      <div className="texto">
        <p className="text-emot">
          Recuerda que una <br /> pequeña ayuda <br /> hace una gran diferecia{" "}
        </p>
      </div>
      <div>
        <button className="btn-ope px-8 py-5 relative rounded-xl font-bold text-black w-full" onClick={handleShowPopup}>DONAR</button>
      </div>
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
