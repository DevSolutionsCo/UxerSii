
interface Props {
  imagen?: string;
  title?: string;
  precio?: string;
  fecha?: string;
  cantidad?: string;
}


function CardAlimSelec(props: Props) {
  return (
    <>
      <section className="my-4 mx-2 sm:mx-12 p-2 border shadow-black/50 shadow-sm rounded-md flex flex-col bg-white">
        <div className="my-5 mx-2">
          <span className="text-xl sm:text-2xl font-bold">Carrito</span>
        </div>
        <hr />

        {/* aquí 1 prod */}
        <div className="flex flex-col sm:flex-row items-center my-5 mx-2">
          <div className="w-full sm:w-1/4 mx-auto mb-4 sm:mb-0 sm:ml-0 sm:mr-4">
            {" "}
            {/* Ajuste de márgenes */}
            <img src={props.imagen} className="w-auto h-20" alt="Product" />
          </div>
          <div className="flex-grow">
            <h2 className="text-lg sm:text-xl font-bold">{props.title}</h2>
            <h2 className="text-md sm:text-lg font-medium font-mono">
              Fecha de caducidad: {props.fecha}
            </h2>
            {/* Aqui no se si pongo boton para controlar cantidad o no */}
            {/* <h2 className="text-md sm:text-lg font-medium font-mono">Cantidad: {cantidad}</h2> */}
          </div>
          <div className="w-full sm:w-auto text-center sm:text-right">
            <h2 className="text-xl sm:text-2xl font-extrabold">
              <span>Precio: ${props.precio} </span>
            </h2>
          </div>
        </div>

        {/* aquí acaba el prod */}
        <hr />
        <div className="my-5 mx-2">
          <p className="text-lg sm:text-xl font-medium">
            Subtotal (x Productos){" "}
            <span className="font-extrabold">$5,320.00</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default CardAlimSelec;
