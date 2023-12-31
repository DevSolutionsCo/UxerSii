import logo from '../../assets/logo.svg';
import BotonIndex from './Boton';
import LinksNav from './LinksNav';


import { useState } from 'react';

function Nabvar() {
  const [isOpen, setIsOpen] = useState(false); //El useState te genera dos cosas, en este caso mi variable se llama "isOpen" que hace referencia a cuando el menu esta abierto, aqui en la propiedad que esta despues "useState(false)" se declara la variable isOpen como un valor false predeterminado, esto con el fin de que el menu al inicio este cerrado, y con la funcion de la linea 38  "onClick={() => setIsOpen(!isOpen)}" se le cambia el estado para que en vez de ser false, sea true, en la linea 24 "${isOpen ? 'flex' : 'hidden'}" eso es equivalente a un ifelse, lo que esta despues del ? es lo que se ejecuta en la parte del if y lo que esta despues de : es lo que se ejecuta en el else, poniendo al inicio "isOpen" significa que isOpen === true, es practicamente lo mismo 

  return (
    <nav className="flex flex-col justify-between items-center mt-4 px-4 sm:px-10 sm:flex-row">
      <div className="flex items-center">
        <img className="h-24 w-24 cursor-pointer" src={logo} alt="Logo" />
      </div>
 
      <div className={`sm:flex ${isOpen ? 'flex' : 'hidden'} flex-col sm:flex-row items-center `}>
            <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 gap-6 items-center font-semibold text-lg">
          <LinksNav>Features</LinksNav>
          <LinksNav>Pricing</LinksNav>
          <LinksNav>Community</LinksNav>
          <LinksNav>Support</LinksNav>
        </ul></div>
      <div className={`sm:flex ${isOpen ? 'flex' : 'hidden'} flex-col sm:flex-row items-center`}>


        <div className="mt-4 sm:mt-0">
          <BotonIndex newClassName="border-green-500 text-green-500 bg-white hover:bg-green-500 hover:text-white z-10">
            Log in
          </BotonIndex>
          <BotonIndex newClassName="border-green-500 bg-green-500 text-white hover:bg-white hover:text-green-500 -ml-4">
            Register
          </BotonIndex>
        </div>
      </div>

      {/* Icono de menú para dispositivos móviles */}
      <div className="sm:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>
    </nav>
  );
}


export default Nabvar

/*

* ? Explicacion de como se hizo responsive segun chatGPT
*Importación de Recursos y Componentes:

*Se importan recursos como el logo (logo) y componentes (BotonIndex y LinksNav) desde archivos locales.
*Se importa el hook useState desde React para gestionar el estado local del componente.
*Definición del Componente Navbar:

*El componente Navbar es una función de React que devuelve el JSX (estructura del componente).
*Se utiliza el estado local (isOpen y setIsOpen) para controlar si el menú de navegación está abierto o cerrado.
*Estructura del Navbar:

*Se utiliza la etiqueta <nav> como contenedor principal del navbar.
*Se utiliza la clase de Tailwind CSS flex para establecer un contenedor flexible que distribuye los elementos en una fila (flex-row) en pantallas pequeñas y en una columna (flex-col) en pantallas grandes.
*Se utiliza justify-between para distribuir el espacio entre los elementos de manera uniforme.
*Logo:

*El logo se muestra con la etiqueta <img>. La clase h-24 y w-24 establece la altura y el ancho del logo, y cursor-pointer indica que el cursor se transformará en un puntero cuando se coloque sobre el logo.
*Lista de Enlaces (ul):

*Se utiliza una lista desordenada (<ul>) para los enlaces (LinksNav).
*La estructura de la lista se maneja de manera diferente en pantallas pequeñas (flex-col) y en pantallas grandes (sm:flex-row).
*Cada enlace (LinksNav) representa un ítem de la lista.
*Botones de Acción:

*Se utiliza otro contenedor (<div>) para los botones de acción (BotonIndex) que contienen las opciones "Log in" y "Register".
*Al igual que con la lista de enlaces, la estructura de este contenedor se gestiona de manera diferente en pantallas pequeñas y grandes.
*Icono del Menú para Dispositivos Móviles:

*Se utiliza un icono (<svg>) para representar un ícono de menú en dispositivos móviles.
*La clase sm:hidden indica que este icono solo será visible en pantallas pequeñas.
*Manejo de Estado y Eventos:

*El estado isOpen se actualiza al hacer clic en el icono de menú, alternando entre abierto y cerrado.
*Exportación del Componente:

*El componente Navbar se exporta al final del archivo para que pueda ser utilizado en otros archivos de React.


*/