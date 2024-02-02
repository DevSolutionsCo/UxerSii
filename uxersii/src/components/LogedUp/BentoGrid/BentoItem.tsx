import clsx from "clsx";

interface props {
  className?: string;
  title: string;
  correoUser?: string;
  fotoUser?: string;
  clickbutton?: React.MouseEventHandler<HTMLButtonElement>;
}

function BentoItem(props: props) {
  return (
    <article
      className={clsx(
        "p-5 relative rounded-xl border bg-white/40 h-full shadow-xl shadow-black flex flex-col justify-between",
        props.className
      )}
    >
      {props.fotoUser && (
        <div>
          <img src={props.fotoUser} className="rounded-full h-44 w-44" />
        </div>
      )}
      <div>
        <h2 className="text-3xl text-black font-bold dark:text-white">
          {props.title}
        </h2>

        {props.correoUser && (
          <>
            <p className="text-xl text-slate-700 dark:text-gray-300">
              {props.correoUser}
            </p>
            <button
              className="cursor-pointer py-3 text-[1.24rem] dark:text-gray-200"
              onClick={props.clickbutton}
            >
              Configuracion de la cuenta
            </button>
          </>
        )}
      </div>
    </article>
  );
}

export default BentoItem;
