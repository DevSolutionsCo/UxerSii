// Importa ReactNode desde la librería 'react'
import { ReactNode } from "react";

// Define la interfaz para las propiedades del componente BotonIndex
interface BotonIndexProps {
  // La propiedad 'children' debe ser de tipo ReactNode
  children: ReactNode;
  newClassName?: string; 

}


function BotonIndex(props: BotonIndexProps) {
  return (
  
    <button
      className={`border-2 px-6 py-3 relative rounded-xl text-white font-bold  ${props.newClassName}`}
    >
      {props.children}
    </button>
  );
}

export default BotonIndex;
