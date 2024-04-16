

interface Producto {
    imagen: string;
    fecha_cad: string;
    nomb_alim: string;
    cantidadPorId: number;
    costo: number;
    id_alim: number;
}

// interface Carrito {
//   carrito: Props[];
// }
function InfoAlim(props: Producto & { cantidadPorId?: number }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center my-5 mx-2">
        <div className="w-full sm:w-1/4 mx-auto mb-4 sm:mb-0 sm:ml-0 sm:mr-4">
          <img src={props.imagen} className="w-auto h-20" alt="Product" />
        </div>
        <div className="flex-grow">
          <h2 className="text-lg sm:text-xl font-bold">{props.nomb_alim}</h2>
          <h2 className="text-md sm:text-lg font-medium font-mono">
            Fecha de caducidad: {props.fecha_cad}
          </h2>
          <h2 className="text-lg sm:text-xl">Cantidad: {props.cantidadPorId}</h2>
        </div>
        <div className="w-full sm:w-auto text-center sm:text-right">
          <h2 className="text-xl sm:text-2xl font-bold">
            <span>Precio: ${props.costo} </span>
          </h2>
        </div>
      </div>
    </>
  );
}

export default InfoAlim;
