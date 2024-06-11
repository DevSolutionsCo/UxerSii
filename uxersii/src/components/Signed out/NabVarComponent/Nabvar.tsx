import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import XIcon from "@mui/icons-material/X";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/LogoUxersii.png";
import mx from "../../../assets/MX-1x1.66.png";

import MobileLogo from "../../../assets/logoLightTheme.svg";
import BotonIndex from "./Boton";
import SearchAppBar from "./SearchBar";

function Nabvar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 z-50 w-full bg-[#F63E4F] flex flex-col">
      {/* Desktop View */}
      <div className="hidden md:flex py-1 justify-between px-28">
        <div className="text-white font-bold">Devsolutions</div>
        <div className="text-white font-bold flex items-center">
          <EmailIcon />
          <span className="ml-2">devsolutionsco@gmail.com</span>
        </div>
        <div className="text-white cursor-pointer flex space-x-4">
          <FacebookIcon />
          <InstagramIcon />
          <XIcon />
        </div>
      </div>
      <div className="bg-white flex flex-col md:flex-row justify-between px-4 md:px-24 items-center">
        <div className="flex flex-col items-center">
          <img
            src={window.innerWidth < 768 ? MobileLogo : Logo}
            className={`w-fit my-3 ${
              window.innerWidth < 768 ? "h-36" : "h-20"
            }`}
            alt="Logo"
          />
          <div className="md:hidden mt-2 my-3">
            <button className="text-black cursor-pointer" onClick={toggleMenu}>
              <MenuIcon />
            </button>
          </div>
        </div>
        <div className="hidden md:flex border-2 border-black bg-slate-50 my-5 w-3/5 rounded-2xl">
          <SearchAppBar />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <BotonIndex className="border-[#F03849] text-[#F03849] bg-white hover:bg-[#F03849] hover:text-white z-10">
              Log in
            </BotonIndex>
          </Link>
          <Link to="/signup">
            <BotonIndex className="border-[#F03849] bg-[#F03849] text-white hover:bg-white hover:text-[#F03849]">
              Register
            </BotonIndex>
          </Link>
        </div>
        <div className="hidden md:flex cursor-help">
          <img
            src={mx}
            alt="Aceites y condimentos"
            className="w-16 h-18 mb-2"
          />
        </div>
      </div>
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } transition-all duration-500 ease-in-out transform ${
          isOpen ? "scale-y-100" : "scale-y-0"
        } origin-top`}
      >
        <div className="bg-white flex flex-col items-center py-2">
          <div className="border-2 border-black bg-slate-50 my-5 w-4/5 rounded-2xl">
            <SearchAppBar />
          </div>
          <Link to="/login" onClick={toggleMenu}>
            <BotonIndex className="border-[#F03849] text-[#F03849] bg-white hover:bg-[#F03849] hover:text-white z-10">
              Log in
            </BotonIndex>
          </Link>
          <Link to="/signup" onClick={toggleMenu}>
            <BotonIndex className="border-[#F03849] bg-[#F03849] text-white hover:bg-white hover:text-[#F03849]">
              Register
            </BotonIndex>
          </Link>
          <div className="cursor-help">
            <img
              src={mx}
              alt="Aceites y condimentos"
              className="w-16 h-18 mb-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nabvar;
