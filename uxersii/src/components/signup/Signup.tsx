import { useState } from "react";
import { Link } from "react-router-dom";
import FotoRight from "../../assets/pics/chris-lee-70l1tDAI6rM-unsplash 2.jpg";
import BotonLogin from "../login/BotonLogin";
import Inputs from "../login/Inputs";
import {useForm} from 'react-hook-form'
import {SubmitHandler} from 'react-hook-form';
import {useNavigate} from 'react-router-dom'
import "../login/inecesario.css";

import { createUsuario } from '../../apis/PruebasSignUp.api'

interface Usuario {
  //nombre_hog: string;
  //apellido_mat: string;
  //apellido_pat: string;
  correo_hog: string;
  contra_hog: string;
  //desc_hog: string;
  //genero: string;
  nombUserH: string;
  id_hog: number;
  // Agrega cualquier otra propiedad necesaria
}

interface UsuarioInterface {
  usuario: Usuario;
}

function Signup() {
  const { register, handleSubmit} = useForm<UsuarioInterface>();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()

  /*const onSubmit: SubmitHandler<UsuarioInterface> =  (data) => {
    createUsuario(data);
    navigate('/pruebaSignUp');
  };*/

  const onSubmit: SubmitHandler<UsuarioInterface> = async (data) => {
    console.log("Enviando formulario...");
    try {
      await createUsuario(data);
      console.log("Usuario creado exitosamente.");
      navigate('/');
    } catch (error) {
      console.error("Error al crear usuario:", error);
      // Manejar el error según sea necesario
    }
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className="flex-1 flex-col justify-center mx-auto p-4 flex items-center">
        <h2 className="text-4xl font-semibold">Crear una cuenta ahora</h2>
            <p className="text-2xl font-semibold py-10">
              Ingresa tus credenciales
            </p>
          <form className="w-7/12" onSubmit={handleSubmit(onSubmit)}>
            <Inputs
              
              placeholder="Ingresa tu nombre"
              labelsito="Nombre"
              type="text"
              {...register("usuario.nombUserH", { required: true })}
            />
            <Inputs
              
              placeholder="Ingresa tu correo electronico"
              labelsito="Correo electronico"
              type="email"
              {...register("usuario.correo_hog", { required: true })}
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
              {...register("usuario.contra_hog", { required: true })}
            />

            <BotonLogin type="submit">Iniciar sesion</BotonLogin>
          
           
          </form>
          <div className="w-full">
            
            <p className="text-center mt-12">
              Ya tienes una cuenta?{" "}
              <span className="text-indigo-700 font-semibold">
                <Link to="/login">Inicia sesion</Link>
              </span>
            </p>
          </div>
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