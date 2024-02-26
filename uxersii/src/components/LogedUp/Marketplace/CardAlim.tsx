import React from 'react'
import BotonLogin from '../../Signed out/login/BotonLogin';
interface props{
img:string;
fecha:string;
title:string;
peso:string;
precio:string;
} 

function CardAlim(props: props) {
    return (
      <div className="my-4 p-2 border border-black rounded-md">
        <img src={props.img} className="w-full h-24 object-cover rounded-t-md" alt="Imagen del producto" />
        <div className="p-2">
          <h2 className="text-sm font-semibold">{props.fecha}</h2>
          <h2 className="text-base font-bold">{props.title}</h2>
          <h2 className="text-sm">Cantidad: <span className="font-bold">{props.peso}</span></h2>
          <h2 className="text-sm">{props.precio}</h2>
          <BotonLogin className="mt-2 bg-[#C3DDFF] border-2 px-4 py-2 rounded-md font-bold text-black w-full">Agregar</BotonLogin>
        </div>
      </div>
    );
  }
  
  export default CardAlim;
  