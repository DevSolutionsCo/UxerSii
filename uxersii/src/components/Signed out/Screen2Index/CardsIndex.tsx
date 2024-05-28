// import { clsx } from "clsx";
// import { ReactNode } from "react";
import fyv from "../../../assets/verdura.png"
import enl from "../../../assets/fish-food.png"
import cere from "../../../assets/cereal.png"
import oil from "../../../assets/oil_3982805.png"
import drinks from "../../../assets/drinks_416013.png"
import "../MainScreen/fuenteMain.css"
// interface props {
//   title: string;
//   children: ReactNode;
//   foto?: string;
//   className?: string;
//   margin?: string;
// }

function CardsIndex() {
  return (
    // <article
    //   className={clsx(
    //     "gap-12 px-8 border-2 mx-8 mb-8 rounded-3xl py-10 grid grid-cols-5 auto-rows-fr items-center sm:grid-cols-2 sm:grid-rows-2 sm:row-span-1 sm:auto-rows-auto sm:max-w-[24rem] sm:max-h-[22rem] transition-all ease-in-out duration-500 sm:hover:transform sm:hover:scale-110",
    //     props.margin
    //   )}
    // >
    //   <picture className="col-span-2 mx-auto sm:col-span-1 sm:row-span-2 mt-3">
    //     <div
    //       className={clsx(
    //         "w-24 h-24 flex items-center justify-center rounded-xl sm:w-16 sm:h-16 ",
    //         props.className
    //       )}
    //     >
    //       <img
    //         src={props.foto}
    //         alt="foto"
    //         className="h-18 w-16 sm:w-11 sm:h-11"
    //       />
    //     </div>
    //   </picture>
    //   <div className="col-span-3 overflow-y-auto max-h-[18rem]">
    //     <h2 className="text-2xl font-bold">{props.title} </h2>
    //     <div className="max-h-[12rem] overflow-y-auto overflow-x-hidden no-scrollbar">
    //       <p>{props.children}</p>
    //     </div>
    //   </div>
    // </article>

<div className="flex justify-center mb-28 font-alice">
  <div className="grid grid-cols-5 gap-4 mb-8">
    <button className="flex flex-col items-center bg-[#B3CD7B] p-3 rounded-xl focus:outline-none">
      <img src={fyv} alt="Frutas y verduras" className="w-16 h-16 mb-2" />
      <span className="text-center">Frutas y verduras</span>
    </button>
    <button className="flex flex-col items-center  bg-[#F7B368] p-5 rounded-xl focus:outline-none">
      <img src={enl} alt="Enlatados" className="w-16 h-16 mb-2" />
      <span className="text-center">Enlatados</span>
    </button>
    <button className="flex flex-col items-center bg-[#FBEA71] p-5 rounded-xl focus:outline-none">
      <img src={cere} alt="Cereales y granos" className="w-16 h-16 mb-2" />
      <span className="text-center">Cereales y granos</span>
    </button>
    <button className="flex flex-col items-center  bg-[#FF776D] p-5 rounded-xl focus:outline-none">
      <img
        src={oil}
        alt="Aceites y condimentos"
        className="w-16 h-16 mb-2"
      />
      <span className="text-center">Aceites y condimentos</span>
    </button>
    <button className="flex flex-col items-center bg-[#FFC0FA] p-5 rounded-xl focus:outline-none">
      <img src={drinks} alt="Bebidas" className="w-16 h-16 mb-2" />
      <span className="text-center">Bebidas</span>
    </button>
  </div>
</div>

  );
}

export default CardsIndex;
