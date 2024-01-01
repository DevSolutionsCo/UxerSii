import { ReactNode } from "react";
import "./Bg.css";

interface Props {
  children?: ReactNode;
}

function Background(props: Props) {
  return (
    <div className="fondito custom-background dark:bg-zinc-900 h-screen overflow-hidden">
      {props.children}
    </div>
  );
}

export default Background;
