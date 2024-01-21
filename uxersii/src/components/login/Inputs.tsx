import clsx from "clsx";
import "./inecesario.css";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelsito?: string;
  className?: string;
}

const Inputs = (props: Props) => {
  return (
    <>
      <label htmlFor="input" className="text-xl font-semibold">
        {props.labelsito}
      </label>
      <input
        className={clsx(
          "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400/80 focus:ring-2 focus:ring-inset px-2 mb-5 inutil",
          props.className
        )}
        {...props}
      />
    </>
  );
};

export default Inputs;
