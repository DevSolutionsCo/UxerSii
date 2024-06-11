import BotonLogin from "../../Signed out/login/BotonLogin";
interface Props {
  title: string;
  info: string;
  cantidad: string;
  caducidad: string;
  price: string;
}

function InfoText(props: Props) {
  return (
    <div>
      <h2 className="text-3xl font-semibold">{props.title}</h2>
      <p>{props.info}</p>
      <p className="text-xl py-2">
        <span className="font-semibold">Cantidad disponible:</span>{" "}
        {props.cantidad}
      </p>

      <p className="text-xl py-2">
        <span className="font-semibold">Caducidad:</span> {props.caducidad}
      </p>

      <h2 className="text-3xl font-semibold py-4">
        ${props.price}
        <span className="text-sm font-normal">MXN</span>
      </h2>

      <BotonLogin className="mt-2 bg-[#F63E4F] border-2 px-4 py-2 rounded-md font-bold text-black self-end w-full">
        Agregar al carrito
      </BotonLogin>
    </div>
  );
}

export default InfoText;
