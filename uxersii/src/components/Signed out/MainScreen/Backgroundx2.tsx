import { ReactNode } from "react";
import "./Bgx2.css";

interface Props {
  children?: ReactNode;
}

function Backgroundx2(props: Props) {
  return (
    <div className="fondito custom-background overflow-hidden ">
      {props.children}
    </div>
  );
}

export default Backgroundx2;
