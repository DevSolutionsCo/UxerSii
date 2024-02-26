
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
      <div className="my-4 p-2 border shadow-black/50 shadow-sm rounded-md flex flex-col h-full">
        <img src={props.img} className="w-full h-24 object-cover rounded-t-md" alt="Imagen del producto" />
        <div className="flex-grow flex flex-col justify-between p-2">
          <div className='py-7'>
            <h2 className="text-sm font-semibold">{props.fecha}</h2>
            <h2 className="text-base font-bold">{props.title}</h2>
            <h2 className="text-sm">Cantidad: <span className="font-bold">{props.peso}</span></h2>
            <h2 className="text-sm">{props.precio}</h2>
          </div>
          <BotonLogin className="mt-2 bg-[#C3DDFF] border-2 px-4 py-2 rounded-md font-bold text-black self-end w-full">Agregar</BotonLogin>
        </div>
      </div>
    );
  }
  
  export default CardAlim;