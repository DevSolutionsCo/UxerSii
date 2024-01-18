import {Link} from 'react-router-dom'


export function Navigation() {
  return (
    <><div>Navigation</div>
        <div>
            <Link to="/pruebasBack"><h1>Pruebas Back Form</h1></Link>
        
            <Link to="/pruebasBack-create">create tarea</Link>\

            <Link to="/pruebasBackSignUp">Sign Up</Link>

        </div>
    </>

  )
}

