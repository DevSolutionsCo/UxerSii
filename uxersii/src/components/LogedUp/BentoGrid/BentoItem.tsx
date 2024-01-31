import clsx from "clsx";

interface props {
  className?: string;
  title: string;
  correoUser?: string;
}

function BentoItem(props: props) {
  return (
    <article
      className={clsx(
        "p-3 relative rounded-xl border border-white h-full text-white",
        props.className
      )}
    >
      {props.title}
      <p>{props.correoUser} </p>
    </article>
  );
}

export default BentoItem;
