import Navbar from "../NabVarComponent/Nabvar";
import MainScreen from "../MainScreen/MainScreen";
import Screen2Index from "../Screen2Index/Screen2Index";
import { Carrouselprods } from "../Carrousel/Carrouselprods";

function Index() {
  return (
    <>
    <div className="bg-white">
      <Navbar />


      <MainScreen />
      <Screen2Index />

      <Carrouselprods/>
      </div>
    </>
  );
}

export default Index;
