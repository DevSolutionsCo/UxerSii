function CardAlimSelec() {
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
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/018/743/180/small/laptop-computer-with-blank-transparent-screen-and-background-format-png.png"
              alt="1"
              className="w-full"
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-lg sm:text-xl font-bold">
              Computadora super chida soluciona vidas que jamás de fallará 60hz
              y 4k para todos los juegos super gamer
            </h2>
            <h2 className="text-md sm:text-lg font-medium font-mono">
              Fecha de caducidad: <span>12/10/2024</span>
            </h2>
            <h2 className="text-md sm:text-lg font-medium font-mono">25kg</h2>
          </div>
          <div className="w-full sm:w-auto text-center sm:text-right">
            <h2 className="text-xl sm:text-2xl font-extrabold">
              $<span>5,320.00</span>
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
