import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PruebasBack } from "./PruebaBack/PruebasBack";
import { PruebasBackForm } from "./PruebaBack/PruebasBackForm";
import { PruebasSignUp } from "./PruebaBack/PruebasSignUp";
import Donacion from "./components/Donacion/Donacion";
import Bento from "./components/LogedUp/BentoGrid/Bento";
import Carrito from "./components/LogedUp/Carrito/Carrito";
import Item from "./components/LogedUp/Marketplace/Item";
import Marketplace from "./components/LogedUp/Marketplace/Marketplace";
import { default as Sidebar } from "./components/LogedUp/Sidebar/Dashboard";
import Index from "./components/Signed out/Index/Index";
import Login from "./components/Signed out/login/Login";
import Signup from "./components/Signed out/signup/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Sidebar />}>
            <Route index element={<Bento />} />
            <Route path="donaciones" element={<Donacion />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="marketplace/carrito" element={<Carrito />} />
            <Route path="marketplace/item" element={<Item />} />
          </Route>
          <Route path="/" element={<Index />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pruebasBack" element={<PruebasBack />} />
          <Route path="/pruebasBack-create" element={<PruebasBackForm />} />
          <Route path="/pruebasBack/:id" element={<PruebasBackForm />} />
          <Route path="/pruebaSignUp" element={<PruebasSignUp />} />
          <Route path="/pruebaSignUp/:id" element={<PruebasSignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
