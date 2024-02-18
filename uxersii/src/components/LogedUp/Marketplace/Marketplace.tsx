  import "./stylemarcketplace.css";
  import axios from "axios";
  import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";

  function Marketplace() {

    interface PuntoMovil {
      nomb_punto: string;
      direccion: string;
      horario: string;
      latitud: number;
      longitud: number;
      almacenamiento: number;
      id_punto: number;
      // Agrega otras propiedades según la estructura real de tus datos
    }

    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectedPuntoId, setSelectedPuntoId] = useState<number | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [productosPunto, setProductosPunto] = useState<any[]>([]);

    const handleSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedId = parseInt(event.target.selectedOptions[0].id);
      setSelectedPuntoId(selectedId);

    try {
      const response = await axios.get(
        `http://localhost:8000/uxersiiPruebas/api/v1/alimentos/${selectedId}/`,
        // Puedes incluir parámetros de consulta aquí si es necesario
      );

      setProductosPunto(response.data.productos);
      console.log(response.data);
    } catch (error) {
      console.error("Error al realizar la solicitud GET:", error);
    }
  };

    const [puntosMoviles, setPuntosMoviles] = useState<PuntoMovil[]>([]);


    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(
            "http://localhost:8000/uxersiiPruebas/api/v1/puntosm/",
            {
              // Puedes incluir parámetros de consulta aquí si es necesario
            }
          );

          setPuntosMoviles(response.data.puntosmoviles);
          console.log(response.data);
          // Maneja la respuesta según tus necesidades
          console.log(puntosMoviles);
        } catch (error) {
          // Manejo de errores
          console.error("Error al realizar la solicitud GET:", error);
        }
      }

      fetchData(); // Llama a la función al cargar el componente
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 
    
    return (
      <>
        <nav className="nav-market flex flex-row justify-between items-center px-4 sm:px-10 sm:flex-row bg-slate-50 dark:bg-zinc-800">
          <div>
            <select name="puntos" id="" className="select-car" onChange={handleSelectChange}>
              {/* Iterar sobre los puntosMoviles y generar las opciones */}
            {puntosMoviles.map((punto, index) => (
              <option key={index} value={punto.nomb_punto} className="first-option options" id={String(punto.id_punto)}>
                {punto.nomb_punto}
              </option>
            ))}                                   
            </select>
          </div>
        <div className="flex flex-row justify-center carrito ">
          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/18/18399.png"
              alt="Mi carrito"
              className="img-carrito"
            />
          </button>
          <p className="w-car font-bold">Carrito</p>
        </div>
      </nav>


      {productosPunto.reduce((groups, producto, index) => {
  if (index % 3 === 0) groups.push([]);
  groups[groups.length - 1].push(
    <div className="pro-conten shadow-md shadow-black" key={index}>
      <div className="prod">
        <img
          src={producto.imagen}
          alt="Producto"
          className="w-44 img-prod"
        />
        <div className="desc">
          <span className="font-extralight time-cad">{producto.fecha_cad}</span>
          <h5 className="font-bold name-prod">{producto.nomb_alim}</h5>
          <span className="font-medium">{producto.cantidad}kg</span>
          <div className="flex flex-row justify-between items-center">
            <h4 className="price font-semibold">$120</h4>
            <div>
              <button className="font-extrabold btn-agregar">+</button>
              <button className="font-bold btn-rest">-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      );
      return groups;
    }, []).map((group: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => (
      <section className="flex flex-row show-prod" key={index}>
        {group}
      </section>
    ))}



    </>
  );
}

export default Marketplace;
