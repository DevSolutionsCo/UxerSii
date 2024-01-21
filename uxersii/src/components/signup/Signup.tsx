import { useState } from "react";
import { Link } from "react-router-dom";
import FotoRight from "../../assets/pics/chris-lee-70l1tDAI6rM-unsplash 2.jpg";
import BotonLogin from "../login/BotonLogin";
import Inputs from "../login/Inputs";
import "../login/inecesario.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className="flex-1 flex-col justify-center mx-auto p-4 flex items-center">
          <form className="w-7/12" action="#" method="POST">
            <h2 className="text-4xl font-semibold">Crear una cuenta ahora</h2>
            <p className="text-2xl font-semibold py-10">
              Ingresa tus credenciales
            </p>
            <Inputs
              placeholder="Ingresa tu nombre"
              labelsito="Nombre"
              type="text"
              required
            />
            <Inputs
              placeholder="Ingresa tu correo electronico"
              labelsito="Correo electronico"
              type="email"
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
            />
            <div className="w-full">
              <BotonLogin type="submit">Iniciar sesion</BotonLogin>
              <p className="text-center mt-12">
                Ya tienes una cuenta?{" "}
                <span className="text-indigo-700 font-semibold">
                  <Link to="/login">Inicia sesion</Link>
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

export default Signup;
