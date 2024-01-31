import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PruebasBack } from "./PruebaBack/PruebasBack";
import { PruebasBackForm } from "./PruebaBack/PruebasBackForm";
import { PruebasSignUp } from "./PruebaBack/PruebasSignUp";
import Index from "./components/Index/Index";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Donacion from './components/Donacion/Donacion';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pruebasBack" element={<PruebasBack />} />
          <Route path="/pruebasBack-create" element={<PruebasBackForm />} />
          <Route path="/pruebasBack/:id" element={<PruebasBackForm />} />
          <Route path="/pruebaSignUp" element={<PruebasSignUp />} />
          <Route path="/pruebaSignUp/:id" element={<PruebasSignUp />} />
          <Route path="/donaciones" element={<Donacion/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
