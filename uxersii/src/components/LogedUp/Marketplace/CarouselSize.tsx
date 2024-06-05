import BotonLogin from "@/components/Signed out/login/BotonLogin";
import { Card } from "@/components/ui/card";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

import clickSound from '../../../assets/zapsplat_vehicles_aircraft_call_bell_dual_tone_44562.mp3';

// Define la interfaz para Producto
interface Producto {
  imagen: string;
  fecha_cad: string;
  nomb_alim: string;
  cantidad: number;
  costo: number;
  id_alim: number;
}

interface Props {
  products: Producto[];
}

// Función para obtener las cookies
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getCookie(name: string): any {
  const cookieArr = document.cookie.split("; ");
  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split("=");
    if (name === cookiePair[0]) {
      return JSON.parse(cookiePair[1]);
    }
  }
  return null;
}

// Función para establecer las cookies
function setCookie(name: string, value: unknown, days: number = 30): void {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + JSON.stringify(value) + ";" + expires + ";path=/";
}

export function CarouselSize(props: Props) {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = (product: Producto) => {
    const cart = getCookie("carritoProvi") || [];
    const productIndex = cart.findIndex((item: Producto) => item.id_alim === product.id_alim);
    console.log(cart)
    if (productIndex !== -1) {
      cart[productIndex].cantidad += 1; // Incrementa la cantidad si ya existe en el carrito
    } else {
      cart.push({ ...product, cantidad: 1 }); // Agrega el producto al carrito
    }

    setCookie("carritoProvi", cart);
    setShowAlert(true); // Mostrar alerta o mensaje de confirmación
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  return (
     <Carousel className="w-[60%] ">
      <CarouselContent>
        {props.products.map((product, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card className="h-[350px] cursor-pointer">
                <div className="flex flex-col p-4 h-full">
                  <div className="flex justify-center items-center pb-4">
                    <img
                      src={product.imagen}
                      className="w-32 h-32 pb-1"
                      alt="Product Image"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow">
                    <p className="w-full">
                      {product.fecha_cad}
                      <p className="text-xl font-bold">{product.nomb_alim}</p>
                      <span>Cantidad: {product.cantidad}</span>
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-lg font-bold">
                      ${product.costo}
                      <span className="text-sm">MXN</span>
                    </span>
                    <BotonLogin className="bg-[#F03849] border-2 px-4 py-2 rounded-md font-bold text-white flex items-center justify-center w-auto sm:w-1/3 mt-2"
                    onClick={() => {
                      playSound();
                      handleAddToCart(product)}}
                    >
                      
                      <AddShoppingCartIcon />
                    </BotonLogin>
                  </div>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      {showAlert && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md">
          Producto agregado al carrito
        </div>
      )}
    </Carousel>
  );
}
