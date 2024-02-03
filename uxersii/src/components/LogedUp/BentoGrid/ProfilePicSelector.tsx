import profilePic1 from "../../../assets/profile-pics/perf1.jpeg";
import profilePic2 from "../../../assets/profile-pics/perf2.jpeg";
import profilePic3 from "../../../assets/profile-pics/perf3.jpeg";
import profilePic4 from "../../../assets/profile-pics/perf4.jpeg";
import profilePic5 from "../../../assets/profile-pics/perf5.jpeg";
import profilePic6 from "../../../assets/profile-pics/perf6.jpeg";
import profilePic7 from "../../../assets/profile-pics/perf7.jpeg";
import Popup from "../../Popups/Popup";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  handlePicSelection: (selectedPic: string) => void;
  handleFotoPerfilChange?: (nuevaFoto: string) => void; // Añadido el operador de opción (?)
}

function ProfilePicSelector(props: Props) {
  const profilePics = [
    profilePic1,
    profilePic2,
    profilePic3,
    profilePic4,
    profilePic5,
    profilePic6,
    profilePic7,
  ];

  const handlePicSelection = (selectedPic: string) => {
    if (props.handleFotoPerfilChange) {
      props.handleFotoPerfilChange(selectedPic);
    }
    props.handlePicSelection(selectedPic);
    props.onClose();
  };

  return (
    <Popup
      titulo="Selecciona tu foto de perfil"
      texbtn="Guardar cambios"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <div className="grid grid-cols-3 gap-4">
        {profilePics.map((pic, index) => (
          <button key={index} onClick={() => handlePicSelection(pic)}>
            <img
              src={pic}
              alt={`Profile Pic ${index + 1}`}
              className="w-44 h-44 object-cover rounded-md cursor-pointer"
            />
          </button>
        ))}
      </div>
    </Popup>
  );
}

export default ProfilePicSelector;
