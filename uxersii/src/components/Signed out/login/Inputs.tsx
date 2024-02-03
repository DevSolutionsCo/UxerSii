import clsx from "clsx";
import React from "react";
import "./inecesario.css";

interface InputsProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelsito?: string;
  className?: string;
}

const Inputs = React.forwardRef<HTMLInputElement, InputsProps>((props, ref) => {
  const { labelsito, className, ...rest } = props;

  return (
    <>
      <label htmlFor="input" className="text-xl font-semibold ">
        {labelsito}
      </label>
      <input
        ref={ref}
        className={clsx(
          "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400/80 focus:ring-2 focus:ring-inset px-2 mb-5 inutil",
          className
        )}
        {...rest}
      />
    </>
  );
});

export default Inputs;
