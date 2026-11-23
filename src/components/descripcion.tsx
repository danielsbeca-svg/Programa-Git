import style from "../styles/descripcion.module.css";
import Modal from "./Modal";

interface DescripcionProps {
  producto: any;
  alCerrar: () => void;
}

function Descripcion({ producto, alCerrar }: DescripcionProps) {
  if (!producto) return null; // Si no hay producto seleccionado, no renderizar nada

  return (
    <Modal isOpen={Boolean(producto)} alCerrar={alCerrar}>
      <div className={style["container"]}>
        <div className={style["product-row"]}>
          <div className={style["product-image"]}>
            <img src={producto.imagen} />
          </div>
          <div className={style["product-info"]}>
            <div className="contet-title">
              <h2 className={style["titleDescrition"]}>{producto?.nombre}</h2>
              <button
                onClick={alCerrar}
                aria-label="Cerrar modal"
                className={style["btn-close"]}
              >
                X
              </button>
            </div>

            <p className={style["product-descripcion"]}>
              {producto?.descripcion}
            </p>

            <div className={style["Content-price"]}>
              <div className="content-peso">
                <p className={style["product-price"]}>Arroba</p>
                <p className={style["product-price"]}>Bulto</p>
                <p className={style["product-price"]}>Kilo</p>
              </div>
              <div className={style["content-valor"]}>
                <p className={style["product-price"]}>${producto.precio1}</p>
                <p className={style["product-price"]}>${producto.precio2}</p>
                <p className={style["product-price"]}>${producto.precio3}</p>
              </div>
            </div>

            <button className={style["product-button"]}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Descripcion;
