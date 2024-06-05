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

export function CarouselSize(props: Props) {
  return (
    <Carousel className="w-[60%] ">
      <CarouselContent>
        {props.products.map((product, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card className="h-[350px] cursor-pointer">
                <div className="flex p-4 flex-col">
                  <div className="flex justify-center items-center pb-4">
                  <img src={product.imagen} className="w-32 h-32 pb-1" />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <p>
                      {product.fecha_cad}
                      <p className="text-xl font-bold">
                        {product.nomb_alim}
                      </p>
                      <span>Cantidad:{product.cantidad}</span>
                    </p>
                  </div>
                  <div className="flex justify-between w-full mt-[45px] items-center">
                    <span>
                      <span className="text-lg ml-16 font-bold ">${product.costo}<span className="text-sm">MXN</span> </span>
                    </span>
                    <BotonLogin className="mt-2 bg-[#F03849] border-2 px-4 py-2 rounded-md font-bold text-white self-end w-1/3">
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
    </Carousel>
  );
}
