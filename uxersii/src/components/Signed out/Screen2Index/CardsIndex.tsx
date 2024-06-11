import cere from "../../../assets/cereal.png";
import drinks from "../../../assets/drinks_416013.png";
import enl from "../../../assets/fish-food.png";
import oil from "../../../assets/oil_3982805.png";
import fyv from "../../../assets/verdura.png";
import "../MainScreen/fuenteMain.css";

function CardsIndex() {
  return (
    <div className="flex justify-center mb-28 font-alice">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 w-full px-4">
        <button className="flex flex-col items-center bg-[#B3CD7B] p-3 rounded-xl focus:outline-none w-full">
          <img src={fyv} alt="Frutas y verduras" className="w-16 h-16 mb-2" />
          <span className="text-center">Frutas y verduras</span>
        </button>
        <button className="flex flex-col items-center bg-[#F7B368] p-5 rounded-xl focus:outline-none w-full">
          <img src={enl} alt="Enlatados" className="w-16 h-16 mb-2" />
          <span className="text-center">Enlatados</span>
        </button>
        <button className="flex flex-col items-center bg-[#FBEA71] p-5 rounded-xl focus:outline-none w-full">
          <img src={cere} alt="Cereales y granos" className="w-16 h-16 mb-2" />
          <span className="text-center">Cereales y granos</span>
        </button>
        <button className="flex flex-col items-center bg-[#FF776D] p-5 rounded-xl focus:outline-none w-full">
          <img
            src={oil}
            alt="Aceites y condimentos"
            className="w-16 h-16 mb-2"
          />
          <span className="text-center">Aceites y condimentos</span>
        </button>
        <button className="flex flex-col items-center bg-[#FFC0FA] p-5 rounded-xl focus:outline-none w-full">
          <img src={drinks} alt="Bebidas" className="w-16 h-16 mb-2" />
          <span className="text-center">Bebidas</span>
        </button>
      </div>
    </div>
  );
}

export default CardsIndex;
