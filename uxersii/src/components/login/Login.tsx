import { useState } from "react";
import { Link } from "react-router-dom";
import FotoRight from "../../assets/pics/chris-lee-70l1tDAI6rM-unsplash 2.jpg";
import BotonLogin from "./BotonLogin";
import Inputs from "./Inputs";
import "./inecesario.css";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function Login() {

  const [correo_hog, setCorreoH] = useState('');
  const [contra_hog, setContraHog] = useState('');
  const navigate = useNavigate()
    const handleLogin = async () => {
      const response = await axios.post('http://127.0.0.1:8000/uxersiiPruebas/api/v1/login/', {
        correo_hog,
        contra_hog,
    });
        try {
           
           // console.log(response.data.mensaje);
            // Maneja la respuesta según tus necesidades
            if(response.data.mensaje === "Inicio de sesion exitoso"){
              navigate('/')
              navigate('/')
            }
           
            //window.alert("keeeeeeeeeeeeeeeeeeeeeee")
            
            //console.log(response.data);
            //console.log("si te hacemos el autenticado");
        } catch (error) {
            // Manejo de errores
            window.alert("ke2")
            //console.error('Error al iniciar sesión:', error);
           // console.log("no te hacemos el autenticado");
        }
    };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className="flex-1 flex-col justify-center mx-auto p-4 flex items-center">
          <form className="w-7/12" >
            <h2 className="text-4xl font-semibold">Bienvenido de regreso</h2>
            <p className="text-2xl font-semibold py-10">
              Ingresa tus credenciales
            </p>

            <Inputs
              placeholder="Ingresa tu correo electronico"
              labelsito="Correo electronico"
              type="email"
              value={correo_hog} onChange={(e) => setCorreoH(e.target.value)}
              required
            />
            <div className="relative w-full flex items-center">
              <label htmlFor="Inputs" className="text-xl font-semibold flex-1">
                Ingrese su contraseña
              </label>
              <button
                onClick={togglePasswordVisibility}
                className="ml-2 focus:outline-none text-indigo-700"
                type="button"
              >
                {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              </button>
            </div>
            <Inputs
              placeholder="Contraseña"
              type={showPassword ? "text" : "password"}
              value={contra_hog} onChange={(e) => setContraHog(e.target.value)}
            />
            <div className="w-full">
              <BotonLogin onClick={handleLogin}>Iniciar sesion</BotonLogin>
              <p className="text-center mt-12">
                No tienes una cuenta?{" "}
                <span className="text-indigo-700 font-semibold">
                  <Link to="/signup">crear una</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
        <div className="hidden lg:block flex-1">
          <picture>
            <img
              src={FotoRight}
              alt="andale"
              className="w-full h-full object-cover rounded-l-3xl rounded-t-3xl"
            />
          </picture>
        </div>
      </div>
    </>
  );
}

export default Login;
