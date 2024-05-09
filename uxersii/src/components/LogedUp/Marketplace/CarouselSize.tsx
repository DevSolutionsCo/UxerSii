import BotonLogin from "@/components/Signed out/login/BotonLogin";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface Product {
  img: string;
  price: string;
  name: string;
}

interface Props {
  products: Product[];
}

export function CarouselSize(props: Props) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {props.products.map((product, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="h-[250px]">
                <div className="flex items-center justify-center p-4 flex-col">
                  <img src={product.img} className="w-48 h-32 pb-1" />
                  <p className="text-xl">
                    {product.name} ${product.price}
                    <span>
                      <span className="text-sm">MXN</span>
                    </span>
                  </p>
                  <BotonLogin className="mt-2 bg-[#b9f0d1] border-2 px-4 py-2 rounded-md font-bold text-black self-end w-full">
                    Agregar al carrito
                  </BotonLogin>
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
