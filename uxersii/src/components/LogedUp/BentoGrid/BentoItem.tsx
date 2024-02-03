import clsx from "clsx";
import { ReactNode, useState } from "react";
import ProfilePicSelector from "./ProfilePicSelector";
interface props {
  className?: string;
  title: string;
  correoUser?: string;
  fotoUser?: string;
  clickbutton?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  handleFotoPerfilChange?: (nuevaFoto: string) => void;
}

function BentoItem(props: props) {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <article
      className={clsx(
        "p-5 relative rounded-xl border bg-white/40 h-full shadow-xl shadow-black flex flex-col justify-between",
        props.className
      )}
    >
      {props.fotoUser && (
        <button
          type="button"
          onClick={handleShowPopup}
          className="cursor-pointer  h-44 w-44"
        >
          <img src={props.fotoUser} className="rounded-full h-44 w-44" />
        </button>
      )}
      <div>
        <h2 className="text-3xl text-black font-bold ">{props.title}</h2>

        {props.correoUser && (
          <>
            <p className="text-xl text-slate-700 ">{props.correoUser}</p>
            <button
              className="cursor-pointer py-3 text-[1.24rem]"
              onClick={props.clickbutton}
            >
              Configuración de la cuenta
            </button>
            {props.children}
          </>
        )}
      </div>
      {showPopup && (
        <ProfilePicSelector
          isOpen={true}
          onClose={handleClosePopup}
          handlePicSelection={(selectedPic: string) => {
            // Lógica para manejar la selección de la foto de perfil
            console.log(`Seleccionaste la foto de perfil: ${selectedPic}`);
            // Puedes realizar cualquier acción adicional aquí

            // Cierra el Popup después de la selección
            handleClosePopup();
          }}
          handleFotoPerfilChange={props.handleFotoPerfilChange}
        />
      )}
    </article>
  );
}

export default BentoItem;
