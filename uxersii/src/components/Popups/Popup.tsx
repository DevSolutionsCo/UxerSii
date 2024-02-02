import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";
import "./styleepopup.css";

interface Props {
  children?: ReactNode;
  titulo?: ReactNode;
  texbtn?: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
}

function Popup(props: Props) {
  const [modalAbierto, setModalAbierto] = useState(!!props.isOpen);

  useEffect(() => {
<<<<<<< HEAD
    console.log(`El modal está ${modalAbierto ? "abierto" : "cerrado"}`);
  }, [modalAbierto]);

  const abrirModal = () => {
     setModalAbierto(true);
   };
=======
    setModalAbierto(!!props.isOpen);
  }, [props.isOpen]);
>>>>>>> ffd7029b1e7744dd51fd9c13131a7a1d3b91f061

  const cerrarModal = () => {
    setModalAbierto(false);
    props.onClose();
  };

  return (
<<<<<<< HEAD
    <>
      <button className="btn-ope px-8 py-5 relative rounded-xl font-bold text-black w-full" onClick={abrirModal}>Abrir Modal</button>
      {modalAbierto && (
        <div className="popup" id="abrir-pop">
=======
    <div>
      {modalAbierto && (
        <div className={clsx("popup", { "abrir-pop": modalAbierto })}>
>>>>>>> ffd7029b1e7744dd51fd9c13131a7a1d3b91f061
          <div className="nav-popup font-bold">
            <div className="text-navbar-popup">
              <p className="titulo-popup">{props.titulo}</p>
            </div>
            <div className="btn-exit">
              <button className="exit font-mono" onClick={cerrarModal}>
                x
              </button>
            </div>
          </div>
<<<<<<< HEAD
          {props.children}
=======
          <div className="p-6">{props.children}</div>
>>>>>>> ffd7029b1e7744dd51fd9c13131a7a1d3b91f061
          <div>
            <button className="btn-seguir px-6 py-3 relative rounded-xl font-bold text-black w-full">
              {props.texbtn}
            </button>
          </div>
        </div>
      )}
<<<<<<< HEAD
    </>
=======
    </div>
>>>>>>> ffd7029b1e7744dd51fd9c13131a7a1d3b91f061
  );
}

export default Popup;
