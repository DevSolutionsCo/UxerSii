// Importa ReactNode desde la librería 'react'
import { ReactNode } from "react";

// Define la interfaz para las propiedades del componente BotonIndex
interface BotonIndexProps {
  // La propiedad 'children' debe ser de tipo ReactNode
  children: ReactNode;
  newClassName?: string; 
  onClick?: () => void;
}


function BotonIndex(props: BotonIndexProps) {
  return (
  
    <button
      className={`border-2 px-6 py-3 relative rounded-xl  font-bold  ${props.newClassName}`}onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default BotonIndex;
