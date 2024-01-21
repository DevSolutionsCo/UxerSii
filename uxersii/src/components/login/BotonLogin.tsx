interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function BotonLogin({ children, ...props }: Props) {
  return (
    <button
      className="border-2 px-6 py-3 relative rounded-xl font-bold text-white bg-green-900 w-full"
      {...props}
    >
      {children}
    </button>
  );
}

export default BotonLogin;
