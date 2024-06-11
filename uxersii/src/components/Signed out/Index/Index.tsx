import { Carrouselprods } from "../Carrousel/Carrouselprods";
import Footer from "../Footer/Footer";
import MainScreen from "../MainScreen/MainScreen";
import Navbar from "../NabVarComponent/Nabvar";
import Screen2Index from "../Screen2Index/Screen2Index";

function Index() {
  return (
    <>
      <div className="bg-white">
        <Navbar />

        <MainScreen />
        <Screen2Index />
        <div className="my-44 mx-6 sm:mx-0 lg:mx-0">
          <p className="bg-white danfo text-center text-4xl ">
            Los productos que ofrecemos tienen un control de calidad con el
            <br />
            <span className="text-[#F63E4F]">
              uso de Inteligencia artificial
            </span>
          </p>
        </div>
        <Carrouselprods />
        <Footer />
      </div>
    </>
  );
}

export default Index;
