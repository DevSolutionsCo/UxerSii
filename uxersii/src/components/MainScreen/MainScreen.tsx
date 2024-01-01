import caja from "../../assets/Pasted-20240101-153552.svg";
import Background from "./Background";

function MainScreen() {
  // * ! sm es para la version Desktop

  return (
    <>
      <Background>
        <div
          className="dark:bg-gradient-to-tl dark:from-transparent dark:via-zinc-900/50 dark:to-zinc-900/80 
          bg-gradient-to-tl from-transparent via-gray-400/30 to-gray-300/80
        h-screen sm:flex sm:flex-row overflow-hidden sm:items-center sm:-mt-24 px-10"
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
      </Background>
    </>
  );
}

export default MainScreen;
