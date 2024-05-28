// import foto2 from "../../../assets/pics/Group 238.png";
// import foto4 from "../../../assets/pics/Group 369.png";
// import foto3 from "../../../assets/pics/Group 372.png";
// import foto1 from "../../../assets/pics/Group 374.png";
// import hand from "../../../assets/pics/box-hand.png";
 import CardsIndex from "./CardsIndex";
import caja from "../../../assets/Pasted-20240101-153552.svg"
import market from "../../../assets/marketplace.png"



function Screen2Index() {
  return (
    // <section className="dark:bg-zinc-900 dark:text-white pt-9 flex flex-col sm:flex-row-reverse overflow-hidden">
    //   <div className="sm:my-36 max-w-[40%] px-10">
    //     <h1 className="text-4xl font-bold text-center px-3 mb-24 sm:mb-5 ">
    //       Problemas medioambientales
    //     </h1>

    //     <p className="hidden sm:flex">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
    //       aperiam. Assumenda, pariatur voluptatem! Expedita explicabo
    //       consequuntur officiis numquam vel accusantium nihil corporis maxime
    //       enim aspernatur, ducimus beatae cumque quis ad.
    //     </p>
    //     <picture className="hidden sm:flex">
    //       <img src={hand} alt="" />
    //     </picture>
    //   </div>
    //   <div className="sm:grid sm:grid-cols-2 ">
    //     <CardsIndex
    //       title="Titulo 1"
    //       foto={foto1}
    //       className="bg-red-500"
    //       margin="mt-2"
    //     >
    //       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
    //       animi, cumque placeat earum nemo modi laborum at ullam. Repellendus
    //       iure ad ratione, debitis dolor optio maiores earum quaerat ipsam
    //       incidunt!
    //     </CardsIndex>

    //     <CardsIndex
    //       title="Titulo 2"
    //       foto={foto2}
    //       className="bg-green-600 "
    //       margin="-mt-4"
    //     >
    //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
    //       facilis non reprehenderit earum, quisquam libero? Commodi similique
    //       obcaecati necessitatibus accusantium quis officiis, quam numquam eum
    //       ex a veritatis corporis molestiae!
    //     </CardsIndex>

    //     <CardsIndex
    //       title="Titulo 3"
    //       foto={foto4}
    //       className="bg-blue-600"
    //       margin="mt-5"
    //     >
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sed
    //       voluptas odit obcaecati molestiae, deleniti accusamus nemo,
    //       consequatur perferendis unde perspiciatis consectetur possimus eveniet
    //       tenetur. Unde necessitatibus ex rem esse?
    //     </CardsIndex>

    //     <CardsIndex
    //       title="Titulo 4"
    //       foto={foto3}
    //       className="bg-yellow-400"
    //       margin="mt-0"
    //     >
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
    //       impedit exercitationem, modi ex itaque qui mollitia esse tempore
    //       molestias temporibus eum fugiat, inventore explicabo obcaecati culpa,
    //       ut doloribus dignissimos necessitatibus. Lorem ipsum dolor, sit amet
    //       consectetur adipisicing elit. Labore, nesciunt modi quaerat odio cum
    //       earum veniam repudiandae architecto voluptates nam facilis nihil,
    //       accusantium quas impedit ad aliquam sapiente ratione mollitia? Lorem
    //       ipsum dolor sit, amet consectetur adipisicing elit. Totam vero
    //       molestias maiores natus. Cupiditate optio eius iusto consequatur,
    //       laborum enim similique vel consectetur tempore ullam numquam eveniet
    //       excepturi molestias dolores!lorem
    //     </CardsIndex>
    //   </div>
    // </section>
    <>
      <section className="bg-white flex flex-col items-center justify-start min-h-screen pt-10 lg:pt-20 scroll-animation">
     
        <CardsIndex />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mt-8">
          <div className="flex items-center justify-center bg-orange-200 p-4 rounded-lg shadow">
            <div className="flex items-center">
              <span className="text-lg">
                Nuestro sistema de compra venta ayuda a que ... blan
                lalaldlladflaas
              </span>
              <img
                src={market}
                alt="Carrito de compra"
                className="w-48 lg:w-60 h-48 lg:h-60 mr-0 ml-3"
              />
            </div>
          </div>
          <div className="flex items-center justify-center bg-blue-200 p-4 rounded-lg shadow">
            <div className="flex items-center">
              <img
                src={caja}
                alt="Caja de productos"
                className="w-48 lg:w-60 h-48 lg:h-60 mr-3 ml-0"
              />
              <span className="text-lg">
                Nuestro sistema de compra venta ayuda a que ... blan
                lalaldlladflaas
              </span>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default Screen2Index;
