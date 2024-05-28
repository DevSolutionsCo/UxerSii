import caja from "../../../../../assets/canasta.png";
// import Background from "./Background";
import "./fuenteMain.css";
function MainScreen() {
  // * ! sm es para la version Desktop

  return (
    <>
      {/* <Background>
        <div
          className="dark:bg-gradient-to-t dark:from-transparent dark:via-zinc-900/50 dark:to-zinc-900/80 
          bg-gradient-to-t from-transparent via-gray-400/30 to-gray-300/80
         sm:flex sm:flex-row overflow-hidden sm:items-center sm:-mt-24 px-10 sm:h-screen py-24"
        >
          <div>
            <h1 className="text-4xl font-semibold text-center p-6 lg:p-12 dark:text-white lg:text-6xl">
              Ayuda a<span className="text-green-500"> combatir </span>
              el desperdicio de alimentos en la{" "}
              <span className="text-red-500">Ciudad de Mexico</span>
            </h1>

            <h2 className="dark:text-white lg:px-16 font-semibold text-center lg:text-xl">
              Si quieres saber más acerca de como podemos frenar el desperdicio
              de la comida en CDMX, te invitamos a q te registres o inicies
              sesión para poder mantenerte al tanto de que puedes hacer para
              unirte a esta causa
            </h2>
          </div>
          <picture className="hidden lg:flex w-3/5 h-3/5 pt-16">
            <img src={caja} alt="" />
          </picture>
        </div>
        <img src={caja} alt=""className="w-48 h-48 ml-6" />
      </Background> */}
<div className="flex items-center justify-center min-h-screen bg-white">
  <div className="bg-custom-pink p-6 md:p-10 lg:p-20 rounded-lg flex flex-col md:flex-row items-center justify-between shadow-lg w-full max-w-screen-2xl transform -translate-y-16 h-auto md:h-auto lg:h-auto">
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
