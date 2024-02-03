import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import foto from "../../../assets/profile-pics/perf3.jpeg";
import Popup from "../../Popups/Popup";
import Backgroundx2 from "../../Signed out/MainScreen/Backgroundx2";
import Inputs from "../../Signed out/login/Inputs";
import BentoItem from "./BentoItem";
import ProfilePicSelector from "./ProfilePicSelector";

function Bento() {
  const [nombreUser, setNombreUser] = useState("");
  const [correoUser, setCorreoH] = useState("");
  const [correoUserAn, setCorreoHAnt] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [passwUser, setPasswUser] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const obtenerDatosUsuario = () => {
      const datosUsuarioStringS: string | null =
        localStorage.getItem("usuarioS");
      const datosUsuarioStringL: string | null =
        localStorage.getItem("usuarioL");

      // Verificar si el valor no es null antes de usarlo
      if (datosUsuarioStringL !== null) {
        const datosUsuario = JSON.parse(datosUsuarioStringL);
        //console.log(datosUsuario)
        // Actualizar el estado con el nuevo valor
        setNombreUser(datosUsuario.nombUserH);
        setCorreoH(datosUsuario.correo_hog);
        setCorreoHAnt(datosUsuario.correo_hog);
        //setPasswUser(datosUsuario.contra_hog);
      } else if (datosUsuarioStringS !== null) {
        const datosUsuario = JSON.parse(datosUsuarioStringS);
        setNombreUser(datosUsuario.usuario.nombUserH);
        setCorreoH(datosUsuario.usuario.correo_hog);
        setCorreoHAnt(datosUsuario.usuario.correo_hog);
        //setPasswUser(datosUsuario.usuario.contra_hog);
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
      const response = await axios.post(
        "http://127.0.0.1:8000/uxersiiPruebas/api/v1/actuali/",
        {
          nombreUser,
          correoUser,
          passwUser,
          correoUserAn,
        }
      );

      console.log(response.data);
      console.log("SI lo actualice vv");
      //const usuario = new Usuario(datosUsuario);
      //console.log(usuario);
      localStorage.setItem("usuarioL", JSON.stringify(response.data));
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
    <Backgroundx2>
      <section className="w-full min-h-screen grid grid-cols-10 auto-rows-[25rem] gap-10 mx-auto p-20 ">
        <BentoItem
          className="col-span-10 md:col-span-4 "
          title={nombreUser}
          correoUser={correoUser}
          fotoUser={fotoPerfil}
          clickbutton={handleShowPopup}
          handleFotoPerfilChange={handleFotoPerfilChange}
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
    </Backgroundx2>
  );
}

export default Bento;
