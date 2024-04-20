
// interface Carrito {
//   carrito: Props[];
// }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import InfoAlim from "./infoAlim";
interface Producto {
  imagen: string;
  fecha_cad: string;
  nomb_alim: string;
  cantidad: number;
  costo: number;
  id_alim: number;
}

interface CarritoNavProps {
  productosCarrito: Producto[];
}


function setCookie(name: string, value: unknown, days: number = 30): void {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + JSON.stringify(value) + ";" + expires + ";path=/";
}

function CardAlimSelec({ productosCarrito }: CarritoNavProps) {
  const cantidadPorId: { [key: number]: number } = {}; // Definir tipo para cantidadPorId
  const productosUnicos: { [key: number]: Producto } = {}; // Objeto para rastrear productos únicos
  let total = 0; // Inicializar total

  productosCarrito.forEach((producto) => {
    total += Number(producto.costo) || 0; // Sumar el costo del producto al total
    cantidadPorId[producto.id_alim] = (cantidadPorId[producto.id_alim] || 0) + 1;
    productosUnicos[producto.id_alim] = producto;
    setCookie('totalCarrito', total)
  });

  return (
    <>
      <section className="my-4 mx-2 sm:mx-12 p-2 border shadow-black/50 shadow-sm rounded-md flex flex-col bg-white">
        <div className="my-5 mx-2">
          <span className="text-xl sm:text-2xl font-bold">Carrito</span>
        </div>
        <hr />
        {Object.values(productosUnicos).map((producto, index) => (
          <InfoAlim
            key={index}
            imagen={producto.imagen}
            nomb_alim={producto.nomb_alim}
            fecha_cad={producto.fecha_cad}
            costo={producto.costo}
            cantidadPorId={cantidadPorId[producto.id_alim]}
            id_alim={producto.id_alim}         />
        ))}
        <hr />
        <div className="my-5 mx-2">
          <p className="text-lg sm:text-xl font-medium">
            Subtotal (x Productos){" "}
            <span className="font-extrabold">${total.toFixed(2)}</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default CardAlimSelec;