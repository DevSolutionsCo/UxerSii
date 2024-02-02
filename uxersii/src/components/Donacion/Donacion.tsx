 import Popup from '../Popups/Popup';
import "./Donacion.css";


function Donacion() {
  return (
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
      
    </div>
  );
}

export default Donacion;
