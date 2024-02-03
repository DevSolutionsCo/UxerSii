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
        <button
          className="btn-ope px-8 py-5 relative rounded-xl font-bold text-black w-full"
          onClick={handleShowPopup}
        >
          DONAR
        </button>
      </div>
      <Popup
        titulo="Escoge un punto movil"
        texbtn="Confirmar seleccion de punto movil"
        onClose={handleClosePopup}
        isOpen={showPopup}
      >
        <article className="pop-don-hog-1 p-5 relative rounded-xl border bg-white/40 h-full shadow-xl shadow-black flex flex-col justify-between">
            <input type="number" placeholder="Codigo postal " className="zip-code shadow-sm  shadow-black w-80 h-8 p-5 " minLength={5} maxLength={5} />
            <section>
              <p >
              <span className="font-extrabold">Punto movil mas cercano</span>
              <br />
              Direccion del punto movil
              <br />
              <span className="font-extralight">Horario</span>
              </p>
            </section>
        </article>
      </Popup>
    </div>
  );
}

export default Donacion;
