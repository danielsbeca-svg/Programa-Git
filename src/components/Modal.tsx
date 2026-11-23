import type { MouseEvent } from "react";
import style from "../styles/Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  alCerrar: () => void;
  children: React.ReactNode;
}

function Modal({ isOpen, alCerrar, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={style["modal-overlay"]} onClick={alCerrar}>
      <div
        className={style["modalContent"]}
        onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
