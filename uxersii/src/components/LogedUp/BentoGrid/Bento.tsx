import BentoItem from "./BentoItem";

function Bento() {
  return (
    <section className="bg-gradient-to-r from-violet-200 to-pink-200 w-full grid grid-cols-10 auto-rows-[25rem] gap-4 mx-auto p-20 h-screen ">
      <BentoItem
        className="col-span-10 md:col-span-4"
        title="Nombre del usuario"
        correoUser="correito@gmail.com"
      ></BentoItem>
      <BentoItem
        className="col-span-10 md:col-span-6"
        title="Ranking donadores"
      ></BentoItem>
      <BentoItem
        className="col-span-10 md:col-span-6"
        title="Puntos moviles"
      ></BentoItem>
      <BentoItem
        className="col-span-10 md:col-span-4"
        title="Soporte tecnico"
      ></BentoItem>
    </section>
  );
}

export default Bento;
