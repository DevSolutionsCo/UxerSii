
 import CardsIndex from "./CardsIndex";
import caja from "../../../assets/Pasted-20240101-153552.svg"
import market from "../../../assets/marketplace.png"
import "../MainScreen/fuenteMain.css"

function Screen2Index() {
  return (
    
    <>
      <section className="bg-white flex flex-col items-center justify-start pt-10 lg:pt-20 scroll-animation ">
     
        <CardsIndex />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mt-8 ">
          <div className="flex items-center justify-center bg-orange-200 p-4 rounded-lg shadow">
            <div className="flex items-center">
              <span className="text-lg font-garet">
                Nuestro sistema de compra venta ayuda a que ... blan
                lalaldlladflaas
              </span>
              <img
                src={market}
                alt="Carrito de compra"
                className="w-48 lg:w-60 h-48 lg:h-60 mr-0 ml-3"
              />
            </div>
          </div>
          <div className="flex items-center justify-center bg-blue-200 p-4 rounded-lg shadow">
            <div className="flex items-center">
              <img
                src={caja}
                alt="Caja de productos"
                className="w-48 lg:w-60 h-48 lg:h-60 mr-3 ml-0"
              />
              <span className="text-lg font-garet">
                Nuestro sistema de compra venta ayuda a que ... blan
                lalaldlladflaas
              </span>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default Screen2Index;
