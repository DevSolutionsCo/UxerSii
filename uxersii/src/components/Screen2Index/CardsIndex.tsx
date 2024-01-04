import { clsx } from "clsx";
import { ReactNode } from "react";

interface props {
  title: string;
  children: ReactNode;
  foto?: string;
  className?: string;
  margin?: string;
}

function CardsIndex(props: props) {
  return (
    <article
      className={clsx(
        "gap-12 px-8 border-2 mx-8 mb-8 rounded-3xl py-10 grid grid-cols-5 auto-rows-fr items-center sm:grid-cols-2 sm:grid-rows-2 sm:row-span-1 sm:auto-rows-auto sm:max-w-[24rem] sm:max-h-[22rem] transition-all ease-in-out duration-500 sm:hover:transform sm:hover:scale-110",
        props.margin
      )}
    >
      <picture className="col-span-2 mx-auto sm:col-span-1 sm:row-span-2 mt-3">
        <div
          className={clsx(
            "w-24 h-24 flex items-center justify-center rounded-xl sm:w-16 sm:h-16 ",
            props.className
          )}
        >
          <img
            src={props.foto}
            alt="foto"
            className="h-18 w-16 sm:w-11 sm:h-11"
          />
        </div>
      </picture>
      <div className="col-span-3 overflow-y-auto max-h-[18rem]">
        <h2 className="text-2xl font-bold">{props.title} </h2>
        <div className="max-h-[12rem] overflow-y-auto overflow-x-hidden scrollbar-none">
          <p>{props.children}</p>
        </div>
      </div>
    </article>
  );
}

export default CardsIndex;
