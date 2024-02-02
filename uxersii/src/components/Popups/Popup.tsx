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
    setModalAbierto(!!props.isOpen);
  }, [props.isOpen]);

  const cerrarModal = () => {
    setModalAbierto(false);
    props.onClose();
  };

  return (
    <>

      {modalAbierto && (
         <div className={clsx("popup", { "abrir-pop": modalAbierto })}>
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
          <div>
            <button className="btn-seguir px-6 py-3 relative rounded-xl font-bold text-black w-full">
              {props.texbtn}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
