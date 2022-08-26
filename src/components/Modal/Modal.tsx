import { useEffect } from "react";
import ReactDOM from "react-dom";

type Props = {
  children: any;
};

const Modal = ({ children }: Props) => {
  const el = document.createElement("div") as HTMLDivElement;
  const body = document.body as HTMLBodyElement;
  useEffect(() => {
    body.appendChild(el);
    return () => {
      body.removeChild(el);
    };
  }, [el, body]);
  return ReactDOM.createPortal(children, el);
};

export default Modal;
