import MainScreen from "./components/MainScreen/MainScreen";
import Nabvar from "./components/NabVarComponent/Nabvar";
import Screen2Index from "./components/Screen2Index/Screen2Index";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import { PruebasBack  }  from "./PruebaBack/PruebasBack";
import { PruebasBackForm  }  from "./PruebaBack/pruebasBackForm";

function App() {
  return (
    <>
     <BrowserRouter>
      <Nabvar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/" element={<Screen2Index />} />
        <Route path="/pruebasBack" element={<PruebasBack />} />
        <Route path="/pruebasBack-create" element={< PruebasBackForm />} 
        />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
