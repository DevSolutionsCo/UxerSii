import "./styleepopup.css";
import { ReactNode } from "react";
import { useEffect, useState } from "react";

interface Props {
  children?: ReactNode;
  titulo?: ReactNode;
  texbtn?: ReactNode;
}

function Popup(props: Props) {
  const [modalAbierto, setModalAbierto] = useState(true);

  useEffect(() => {
    console.log(`El modal está ${modalAbierto ? "abierto" : "cerrado"}`);
  }, [modalAbierto]);

  // const abrirModal = () => {
  //   setModalAbierto(true);
  // };

  const cerrarModal = () => {
    setModalAbierto(false);
  };
  return (
    <div>
    {modalAbierto && (
    <div className="popup" id="abrir-pop">
      <div className="nav-popup font-bold">
        <div className="text-navbar-popup">
          <p className="titulo-popup">{props.titulo}</p>
        </div>
        <div className="btn-exit">
          <button className="exit font-mono" onClick={cerrarModal}>x</button>
        </div>
      </div>
      {props.children}
      <div>
        <button className="btn-seguir px-6 py-3 relative rounded-xl font-bold text-black w-full">
          {props.texbtn}
        </button>
      </div>
    </div>
    )}
    </div>
  );
}

export default Popup;
