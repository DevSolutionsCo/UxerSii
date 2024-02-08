import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";
import "./styleepopup.css";

interface Props {
  children?: ReactNode;
  titulo?: ReactNode;
  texbtn?: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  onOpenNextModal?: () => void;

}

function Popup(props: Props) {
  const [modalAbierto, setModalAbierto] = useState(!!props.isOpen);


  useEffect(() => {
    setModalAbierto(!!props.isOpen);
  }, [props.isOpen]);

  const cerrarModal = () => {
    setModalAbierto(false);
    props.onClose();
  };

  
  const abrirSiguienteModal = () => {
    if (props.onOpenNextModal) {
      props.onOpenNextModal();
    }
  };

  return (
    <div >
      {modalAbierto && (
         <div className={clsx("popup","shadow-xl shadow-black ", { "abrir-pop": modalAbierto })} >
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
          <div className="p-6">{props.children}</div>
          <div className="flex justify-center">
            <button type="submit" className="btn-seguir px-6 py-3  rounded-xl font-bold text-black w-11/12" onClick={abrirSiguienteModal}> 
              {props.texbtn}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
