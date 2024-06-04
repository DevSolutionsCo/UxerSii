
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import "../MainScreen/fuenteMain.css"
import { CarouselSize } from "@/components/LogedUp/Marketplace/CarouselSize"

export function Carrouselprods() {
  const products = [
    {
      
      name: 'Tomates',
      date: '2022/08/24',
      quantity: 12,
      price: "50",
      img: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FfVNj8%2FMAGFu4fVNj8%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAAXffWIbLM5bVPiSIqkdkPRmY179qXWiw8I2oni3NAb5&exp=1717523387&osig=AAAAAAAAAAAAAAAAAAAAANyGqXsWyKp58SXz4UxDTlDsjjRg1aW4vz2Ii2bSxuz3&signer=media-rpc&x-canva-quality=thumbnail', // replace with the actual image URL
    },
    {
   
      name: 'Zanahorias',
      date: '2022/08/24',
      quantity: 12,
      price: "50",
      img: 'https://media.canva.com/v2/image-resize/format:PNG/height:199/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2F3dZp0%2FMAGFu53dZp0%2F1%2Fp.png/watermark:F/width:199?csig=AAAAAAAAAAAAAAAAAAAAAISAjU9z2K5Hmkc8ETjQVhVp5_oOFuoq9xuj3oOWw1gH&exp=1717523389&osig=AAAAAAAAAAAAAAAAAAAAAObtWfVp2QcduiZpJlKO1V6ZocyAB4WMRJ5xzMjY1HqZ&signer=media-rpc&x-canva-quality=thumbnail', // replace with the actual image URL
    },
    {
      
      name: 'Naranjas',
      date: '2022/08/24',
      quantity: 12,
      price: "50",
      img: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2Fk9wT8%2FMAGFuyk9wT8%2F1%2Fp.png/watermark:F/width:124?csig=AAAAAAAAAAAAAAAAAAAAAAxgOwXa4ECimS9tJpOautQ5EmHyeFxsay4szeLRwpZB&exp=1717524952&osig=AAAAAAAAAAAAAAAAAAAAAEFqVZvhUNiT5b9v1KpDAK1N5Y-pF0-JMju4gawqI2bu&signer=media-rpc&x-canva-quality=thumbnail', // replace with the actual image URL
    },
    {
      
      name: 'Lechuga',
      date: '2022/08/24',
      quantity: 12,
      price: "50",
      img: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FatpQU%2FMAGFu6atpQU%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAACVVj2qWk9GDoTnTFrqTbFv1XCJKxkLJv0sFMnWOceiz&exp=1717525052&osig=AAAAAAAAAAAAAAAAAAAAAFiMqlNmt9okrQ5Hnk-w0JBNx9k2uk-6oykk9cwbj2l7&signer=media-rpc&x-canva-quality=thumbnail', // replace with the actual image URL
    },
    {
      
      name: 'Tomates',
      date: '2022/08/24',
      quantity: 12,
      price: "50",
      img: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FfVNj8%2FMAGFu4fVNj8%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAAXffWIbLM5bVPiSIqkdkPRmY179qXWiw8I2oni3NAb5&exp=1717523387&osig=AAAAAAAAAAAAAAAAAAAAANyGqXsWyKp58SXz4UxDTlDsjjRg1aW4vz2Ii2bSxuz3&signer=media-rpc&x-canva-quality=thumbnail', // replace with the actual image URL
    },
    {
   
      name: 'Zanahorias',
      date: '2022/08/24',
      quantity: 12,
      price: "50",
      img: 'https://media.canva.com/v2/image-resize/format:PNG/height:199/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2F3dZp0%2FMAGFu53dZp0%2F1%2Fp.png/watermark:F/width:199?csig=AAAAAAAAAAAAAAAAAAAAAISAjU9z2K5Hmkc8ETjQVhVp5_oOFuoq9xuj3oOWw1gH&exp=1717523389&osig=AAAAAAAAAAAAAAAAAAAAAObtWfVp2QcduiZpJlKO1V6ZocyAB4WMRJ5xzMjY1HqZ&signer=media-rpc&x-canva-quality=thumbnail', // replace with the actual image URL
    },
    {
      
      name: 'Naranjas',
      date: '2022/08/24',
      quantity: 12,
      price: "50",
      img: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2Fk9wT8%2FMAGFuyk9wT8%2F1%2Fp.png/watermark:F/width:124?csig=AAAAAAAAAAAAAAAAAAAAAAxgOwXa4ECimS9tJpOautQ5EmHyeFxsay4szeLRwpZB&exp=1717524952&osig=AAAAAAAAAAAAAAAAAAAAAEFqVZvhUNiT5b9v1KpDAK1N5Y-pF0-JMju4gawqI2bu&signer=media-rpc&x-canva-quality=thumbnail', // replace with the actual image URL
    },
    {
      
      name: 'Lechuga',
      date: '2022/08/24',
      quantity: 12,
      price: "50",
      img: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FatpQU%2FMAGFu6atpQU%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAACVVj2qWk9GDoTnTFrqTbFv1XCJKxkLJv0sFMnWOceiz&exp=1717525052&osig=AAAAAAAAAAAAAAAAAAAAAFiMqlNmt9okrQ5Hnk-w0JBNx9k2uk-6oykk9cwbj2l7&signer=media-rpc&x-canva-quality=thumbnail', // replace with the actual image URL
    },    {
      
      name: 'Tomates',
      date: '2022/08/24',
      quantity: 12,
      price: "50",
      img: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FfVNj8%2FMAGFu4fVNj8%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAAXffWIbLM5bVPiSIqkdkPRmY179qXWiw8I2oni3NAb5&exp=1717523387&osig=AAAAAAAAAAAAAAAAAAAAANyGqXsWyKp58SXz4UxDTlDsjjRg1aW4vz2Ii2bSxuz3&signer=media-rpc&x-canva-quality=thumbnail', // replace with the actual image URL
    },
    {
   
      name: 'Zanahorias',
      date: '2022/08/24',
      quantity: 12,
      price: "50",
      img: 'https://media.canva.com/v2/image-resize/format:PNG/height:199/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2F3dZp0%2FMAGFu53dZp0%2F1%2Fp.png/watermark:F/width:199?csig=AAAAAAAAAAAAAAAAAAAAAISAjU9z2K5Hmkc8ETjQVhVp5_oOFuoq9xuj3oOWw1gH&exp=1717523389&osig=AAAAAAAAAAAAAAAAAAAAAObtWfVp2QcduiZpJlKO1V6ZocyAB4WMRJ5xzMjY1HqZ&signer=media-rpc&x-canva-quality=thumbnail', // replace with the actual image URL
    },
    {
      
      name: 'Naranjas',
      date: '2022/08/24',
      quantity: 12,
      price: "50",
      img: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2Fk9wT8%2FMAGFuyk9wT8%2F1%2Fp.png/watermark:F/width:124?csig=AAAAAAAAAAAAAAAAAAAAAAxgOwXa4ECimS9tJpOautQ5EmHyeFxsay4szeLRwpZB&exp=1717524952&osig=AAAAAAAAAAAAAAAAAAAAAEFqVZvhUNiT5b9v1KpDAK1N5Y-pF0-JMju4gawqI2bu&signer=media-rpc&x-canva-quality=thumbnail', // replace with the actual image URL
    },
    {
      
      name: 'Lechuga',
      date: '2022/08/24',
      quantity: 12,
      price: "50",
      img: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FatpQU%2FMAGFu6atpQU%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAACVVj2qWk9GDoTnTFrqTbFv1XCJKxkLJv0sFMnWOceiz&exp=1717525052&osig=AAAAAAAAAAAAAAAAAAAAAFiMqlNmt9okrQ5Hnk-w0JBNx9k2uk-6oykk9cwbj2l7&signer=media-rpc&x-canva-quality=thumbnail', // replace with the actual image URL
    },
  ];

  return (
    <>
      <section className="my-44 ">
        <div>
          <p className="bg-white danfo text-center text-4xl ">Los productos que ofrecemos tienen un control de calidad con el <br /><span className="text-[#F63E4F]"> uso de Inteligencia artificial</span></p>
        </div>
        <div className="flex items-center justify-center bg-white py-10">
        <CarouselSize products={products}></CarouselSize>

        </div>
      </section>
    </>
  )
}


