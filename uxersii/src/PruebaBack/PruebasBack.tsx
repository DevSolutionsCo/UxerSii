import {ListaPruebas} from './ListaPruebas'
import {Link} from 'react-router-dom'


export function PruebasBack() {
  return (
    <>
    <div>
      <h1 style={{ fontSize: '30px'}}><Link to="/pruebasBack-create">Crear tarea</Link></h1>
      <p>__________________________________________</p>
    </div>
    <ListaPruebas />
      
    </>
  )
}

