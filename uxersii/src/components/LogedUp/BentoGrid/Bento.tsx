import BentoItem from "./BentoItem";
import { useEffect, useState } from 'react';


function Bento() {

  const [nombreUser, setNombreUser] = useState('');
  const [correoUser, setCorreoH] = useState('');


  useEffect(() => {
    const obtenerDatosUsuario = () => {
      const datosUsuarioStringS: string | null = localStorage.getItem('usuarioS');
      const datosUsuarioStringL: string | null = localStorage.getItem('usuarioL');

      
      // Verificar si el valor no es null antes de usarlo
      if (datosUsuarioStringL !== null) {
        const datosUsuario = JSON.parse(datosUsuarioStringL);
        //console.log(datosUsuario)
        // Actualizar el estado con el nuevo valor
            setNombreUser(datosUsuario.nombUserH);
            setCorreoH(datosUsuario.correo_hog)
      } else if(datosUsuarioStringS !== null){
        const datosUsuario = JSON.parse(datosUsuarioStringS);
        setNombreUser(datosUsuario.usuario.nombUserH);
        setCorreoH(datosUsuario.usuario.correo_hog)
      }else{
        console.error('Los datos del usuario no están disponibles.');
      }
    };

    obtenerDatosUsuario();
    
  }, []); 

  return (
    <section className="bg-gradient-to-r from-violet-200 to-pink-200 w-full grid grid-cols-10 auto-rows-[25rem] gap-4 mx-auto p-20 h-screen ">
      <BentoItem
        className="col-span-10 md:col-span-4"
        title={nombreUser}
        correoUser={correoUser}
      ></BentoItem>
      <BentoItem
        className="col-span-10 md:col-span-6"
        title="Ranking donadores"
      ></BentoItem>
      <BentoItem
        className="col-span-10 md:col-span-6"
        title="Puntos moviles"
      ></BentoItem>
      <BentoItem
        className="col-span-10 md:col-span-4"
        title="Soporte tecnico"
      ></BentoItem>
    </section>
  );
}

export default Bento;
