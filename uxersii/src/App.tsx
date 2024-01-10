import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PruebasBack } from "./PruebaBack/PruebasBack";
import { PruebasBackForm } from "./PruebaBack/PruebasBackForm";
import { Navigation } from "./PruebaBack/Navigation"
import Index from "./components/Index/Index";

function App() {
  return (
    <>
      <BrowserRouter>

        
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/menuPruebasBack" element={<Navigation />} />
          <Route path="/pruebasBack" element={<PruebasBack />} />
          <Route path="/pruebasBack-create" element={<PruebasBackForm />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
