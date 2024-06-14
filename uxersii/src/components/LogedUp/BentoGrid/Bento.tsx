import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { generateUrl } from "../../../apis/PruebasSignUp.api";
import foto from "../../../assets/profile-pics/default-img.jpg";
import Popup from "../../Popups/Popup";

import Inputs from "../../Signed out/login/Inputs";
import BentoItem from "./BentoItem";
import ProfilePicSelector from "./ProfilePicSelector";

const url = generateUrl();

function getCookie(name: string): string | null {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].trim();
    if (cookie.indexOf(cookieName) == 0) {
      return JSON.parse(cookie.substring(cookieName.length, cookie.length));
    }
  }

  return null;
}

function setCookie(name: string, value: unknown, days: number = 30): void {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie =
    name + "=" + JSON.stringify(value) + ";" + expires + ";path=/";
}

function Bento() {
  const datosUsuarioStringL = getCookie("usuarioL");

  const [nombreUser, setNombreUser] = useState("");
  const [correoUser, setCorreoH] = useState("");
  const [correoUserAn, setCorreoHAnt] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [passwUser, setPasswUser] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const obtenerDatosUsuario = () => {
      // Verificar si el valor no es null antes de usarlo
      if (datosUsuarioStringL !== null) {
        const datosUsuario = JSON.parse(datosUsuarioStringL);
        //console.log(datosUsuario)
        // Actualizar el estado con el nuevo valor
        setNombreUser(datosUsuario.nombUserH);
        setCorreoH(datosUsuario.correo_hog);
        setCorreoHAnt(datosUsuario.correo_hog);
        if (datosUsuario.fotoPerfil) {
          setFotoPerfil(datosUsuario.fotoPerfil);
        } else {
          setFotoPerfil("/src/assets/profile-pics/default-img.jpg");
        }

        //setPasswUser(datosUsuario.contra_hog);
      } else {
        console.error("Los datos del usuario no están disponibles.");
      }
    };

    obtenerDatosUsuario();
  }, []);
  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // const navigate = useNavigate()
  const params = useParams();
  console.log(params);

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    try {
      const response = await axios.post(`${url}actuali/`, {
        nombreUser,
        correoUser,
        passwUser,
        correoUserAn,
        fotoPerfil,
      });

      //const usuario = new Usuario(datosUsuario);
      //console.log(usuario);
      setCookie("usuarioL", JSON.stringify(response.data));
      location.reload();
      // Maneja la respuesta según tus necesidades

      // Solo navega si la autenticación fue exitosa
      //navigate("/main");
    } catch (error) {
      // Manejo de errores
      window.alert("Error al iniciar sesión");
      console.error("Error al iniciar sesión:", error);
    }
  };
  // En Bento.tsx
  const [showProfilePicSelector, setShowProfilePicSelector] = useState(false); // Nuevo estado para controlar la visibilidad de ProfilePicSelector
  const [fotoPerfil, setFotoPerfil] = useState(foto);
  const handleSelectProfilePic = () => {
    // Muestra el componente ProfilePicSelector al hacer clic en el botón
    setShowProfilePicSelector(true);
  };

  const handleFotoPerfilChange = (nuevaFoto: string) => {
    setFotoPerfil(nuevaFoto);
    setShowProfilePicSelector(false); // Cierra ProfilePicSelector después de la selección
  };

  return (
    <>
      <section className="w-[90%] min-h-screen  lg:pl-20 m-auto">
        <BentoItem
          className="col-span-10 lg:col-span-4 "
          title={nombreUser}
          correoUser={correoUser}
          fotoUser={fotoPerfil}
          clickbutton={handleShowPopup}
          handleFotoPerfilChange={handleFotoPerfilChange}
        ></BentoItem>
      </section>

      {showPopup && (
        <form onSubmit={handleLogin}>
          <Popup
            titulo="Edita la informacion de tu perfil"
            texbtn="Guardar cambios"
            isOpen={showPopup}
            onClose={handleClosePopup}
          >
            <button
              type="button"
              onClick={handleSelectProfilePic}
              className="h-52 w-52"
            >
              <img src={fotoPerfil} alt="" />
            </button>
            <div className="">
              <Inputs
                labelsito="Nombre del usuario"
                placeholder={nombreUser}
                onChange={(e) => setNombreUser(e.target.value)}
                className=""
              />
              <Inputs
                labelsito="Correo del usuario"
                placeholder={correoUser}
                onChange={(e) => setCorreoH(e.target.value)}
              />
              <Inputs
                labelsito="Contraseña"
                placeholder={"Ingresa tu nueva contraseña"}
                onChange={(e) => setPasswUser(e.target.value)}
              />
            </div>
          </Popup>
        </form>
      )}

      {showProfilePicSelector && (
        <ProfilePicSelector
          isOpen={showProfilePicSelector}
          onClose={() => setShowProfilePicSelector(false)}
          handlePicSelection={(selectedPic: string) => {
            handleFotoPerfilChange(selectedPic);
            // Puedes realizar cualquier acción adicional aquí
          }}
          handleFotoPerfilChange={handleFotoPerfilChange}
        />
      )}
    </>
  );
}

export default Bento;
