
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Carrouselprods() {
    const products = [
        {
            id: 1,
            name: 'Tomates',
            date: '2022/08/24',
            quantity: 12,
            price: 50,
            image: 'url/to/tomato-image', // replace with the actual image URL
        },
        {
            id: 2,
            name: 'Zanahorias',
            date: '2022/08/24',
            quantity: 12,
            price: 50,
            image: 'url/to/carrot-image', // replace with the actual image URL
        },
        {
            id: 3,
            name: 'Naranjas',
            date: '2022/08/24',
            quantity: 12,
            price: 50,
            image: 'url/to/orange-image', // replace with the actual image URL
        },
        {
            id: 4,
            name: 'Lechuga',
            date: '2022/08/24',
            quantity: 12,
            price: 50,
            image: 'url/to/lettuce-image', // replace with the actual image URL
        },
    ];

  return (

    <div className="flex items-center justify-center bg-white py-10">
    
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-2/3 "
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  
    </div>
  )
}


