import caja from "../../../../../assets/canasta.png";

import "./fuenteMain.css";
function MainScreen() {
  // * ! sm es para la version Desktop

  return (
    <>

<div className="flex items-center justify-center mt-80 ">
  <div className="bg-[#FFE9E8] p-6 md:p-10 lg:p-20 rounded-lg flex flex-col md:flex-row items-center justify-between shadow-lg w-full max-w-screen-2xl transform -translate-y-16 h-auto md:h-auto lg:h-auto">
    <div className="text-center md:text-left md:w-full lg:w-2/3 pl-4 md:pl-0">
      <h1
        className="text-4xl md:text-7xl font-extrabold leading-tight font-alice text-shadow-lg"
        style={{ lineHeight: "1.4", fontWeight: "800" }}
      >
        Nosotros <span className="text-red-600">rescatamos</span>
        <br />
        comida, <span className="text-black">tú la disfrutas</span>
      </h1>
      <p
        className="mt-4 md:mt-6 text-lg md:text-4xl text-black leading-relaxed font-alice text-shadow-lg"
        style={{ lineHeight: "1.6", fontWeight: "800"}}
      >
        Reduce, reutiliza, rescata comida.
      </p>
    </div>
    <img
      src={caja}
      alt=""
      className="w-full h-auto md:w-3/10 lg:w-1/3 mt-8 md:mt-0 md:ml-8"
    />
  </div>
</div>
    </>
  );
}

export default MainScreen;
