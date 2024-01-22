import { ListaPruebas } from './ListaPruebas';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function PruebasBack() {
  // Utilizar el estado para nombreUser
  const [nombreUser, setNombreUser] = useState('');

  useEffect(() => {
    const obtenerDatosUsuario = () => {
      const datosUsuarioString: string | null = localStorage.getItem('usuario');

      // Verificar si el valor no es null antes de usarlo
      if (datosUsuarioString !== null) {
        const datosUsuario = JSON.parse(datosUsuarioString);
        // Actualizar el estado con el nuevo valor
        setNombreUser(datosUsuario.nombUserH);
      } else {
        console.error('Los datos del usuario no están disponibles.');
      }
    };

    obtenerDatosUsuario();
    
  }, []); 

  return (
    <>
      <div>
        <h1 style={{ fontSize: '30px' }}>Bienvenido de Vuelta {nombreUser}</h1>
        <h1 style={{ fontSize: '30px' }}><Link to="/pruebasBack-create">Crear tarea</Link></h1>
        <p>__________________________________________</p>
      </div>
      <ListaPruebas />
    </>
  );
}
