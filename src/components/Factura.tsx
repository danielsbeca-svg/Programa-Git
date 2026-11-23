import styleFactura from "../styles/Factura.module.css";
import { ArrowLeft, Printer } from "lucide-react"; // Opcional, o puedes usar tus propios iconos

interface FacturaProps {
  datosCliente: {
    nombre: string;
    direccion: string;
    telefono: string;
    medioPago: string;
    metodoEnvio: string;
  };
  productos: Array<{
    id: number | string;
    nombre: string;
    precio: number;
    cantidad: number;
  }>;
  total: number;
  onVolver: () => void;
}

function Factura({ datosCliente, productos, total, onVolver }: FacturaProps) {
  const fechaActual = new Date().toLocaleDateString("es-CO");
  const numeroFactura = "AG-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className={styleFactura["Content"]}>
      <div className={styleFactura["recibo-contenedor"]}>
        {/* Botón para volver atrás */}
        <button
          type="button"
          onClick={onVolver}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "12px",
            color: "#4b5563",
            fontWeight: "bold",
          }}
        >
          <ArrowLeft size={16} /> Cerrar
        </button>

        <header className={styleFactura["recibo-encabezado"]}>
          <div className={styleFactura["logoContainer"]}>
            <div className={styleFactura["logoTextGroup"]}>
              <span className={styleFactura["logoSubtitle"]}>
                Tu tienda en linea
              </span>
              <h1 className={styleFactura["logoText"]}>
                VILLA
                <span className={styleFactura["logoHighlight"]}> MERCEDES</span>
              </h1>
              <span className={styleFactura["logoSubtitle"]}>Agro Digital</span>
            </div>
          </div>
        </header>

        <section className={styleFactura["detalles-factura"]}>
          <p>
            FECHA: <strong>{fechaActual}</strong>
          </p>
          <p>
            FACTURA:<strong>{numeroFactura}</strong>
          </p>
          <p>
            M. PAGO:
            <strong>
              {" "}
              {datosCliente.medioPago || "Efectivo Contraentrega"}
            </strong>
          </p>
          <p>
            M. ENTREGA:
            <strong>{datosCliente.metodoEnvio || "Domicilio"}</strong>
          </p>
        </section>

        <section className={styleFactura["datos-cliente"]}>
          <p>
            CLIENTE: <strong>{datosCliente.nombre || "Sin registrar"}</strong>
          </p>
          <p>
            DIRECCIÓN:
            <strong>{datosCliente.direccion || "Sin dirección"}</strong>
          </p>
          <p>
            TELÉFONO:<strong>{datosCliente.telefono || "Sin teléfono"}</strong>
          </p>
        </section>

        <section className={styleFactura["seccion-total"]}>
          <span>TOTAL COMPRA:</span>
          <span>
            <strong>${total.toLocaleString("es-CO")}</strong>
          </span>
        </section>

        <section className={styleFactura["tabla-productos"]}>
          <div className={styleFactura["fila-producto cabecera-tabla"]}>
            <span>CONCEPTO</span>
            <span>(CANT)</span>
            <span>TOTAL</span>
          </div>

          {productos.map((item) => (
            <div key={item.id} className={styleFactura["fila-producto"]}>
              <span>{item.nombre}</span>
              <span>(x{item.cantidad})</span>
              <span>
                ${(item.precio * item.cantidad).toLocaleString("es-CO")}
              </span>
            </div>
          ))}
        </section>

        <footer className={styleFactura["recibo-acciones"]}>
          <button
            className={styleFactura["btn-guardar"]}
            type="button"
            onClick={() => window.print()}
          >
            <Printer size={16} />
            Descargar Factura
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Factura;
