import { X, Trash2, ShoppingCart, FileText } from "lucide-react";
import "../styles/carritoCompras.css";
import type { CartItem } from "./CartContext";

interface CarritoComprasProps {
  isOpen?: boolean;
  onClose?: () => void;
  cartItems?: CartItem[];
  onUpdateQuantity?: (id: number | string, quantity: number) => void;
  onRemoveItem?: (id: number | string) => void;
  totalOrderValue?: number;
  formValues?: {
    nombre: string;
    direccion: string;
    telefono: string;
    medioPago: string;
    metodoEnvio: string;
  };
  onFormChange?: {
    setNombre: (val: string) => void;
    setDireccion: (val: string) => void;
    setTelefono: (val: string) => void;
    setMedioPago: (val: string) => void;
    setMetodoEnvio: (val: string) => void;
  };
  onPagar?: () => void;
  onVerFactura?: () => void;
}

export default function CarritoCompras({
  isOpen = true,
  onClose = () => {},
  cartItems = [],
  onUpdateQuantity = () => {},
  onRemoveItem = () => {},
  totalOrderValue = 0,
  formValues = {
    nombre: "",
    direccion: "",
    telefono: "",
    medioPago: "",
    metodoEnvio: "",
  },
  onFormChange = {
    setNombre: () => {},
    setDireccion: () => {},
    setTelefono: () => {},
    setMedioPago: () => {},
    setMetodoEnvio: () => {},
  },
  onVerFactura = () => {},
}: CarritoComprasProps) {
  if (!isOpen) return null;

  // 1. Validamos que los campos obligatorios del formulario NO estén vacíos (quitando espacios en blanco)
  const esFormularioValido =
    Boolean(formValues.nombre.trim()) &&
    Boolean(formValues.direccion.trim()) &&
    Boolean(formValues.telefono.trim());

  // 2. Validamos que haya al menos un producto en el carrito
  const tieneProductos = cartItems.length > 0;

  // 3. El botón se inhabilita si FALTA el formulario o si el carrito está vacío
  const botonInhabilitado = !esFormularioValido || !tieneProductos;

  return (
    <div data-cart="contenedor">
      <div data-cart="cabecera">
        <div data-cart="titulo">
          <ShoppingCart
            style={{ width: "20px", height: "20px", color: "#70B345" }}
          />
          <span>Mi Carrito</span>
        </div>
        <button onClick={onClose} data-cart="cerrar" type="button">
          <X style={{ width: "20px", height: "20px", color: "#9ca3af" }} />
        </button>
      </div>
      <div data-cart="cuerpo-modal">
        <div data-cart="lista">
          {cartItems.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                color: "#9ca3af",
                padding: "24px 0",
                fontSize: "13px",
              }}
            >
              No hay productos en el canasto.
            </p>
          ) : (
            cartItems.map((item) => {
              const cartItem = item as CartItem & {
                cantidad: number;
                precio?: number;
                nombre?: string;
                title?: string;
              };
              const price = cartItem.precio || 0;
              const itemName = cartItem.nombre || cartItem.title || "Producto";

              return (
                <div key={item.id} data-cart="fila">
                  <div data-cart="detalles">
                    <span>Precio Un: ${price.toLocaleString("es-CO")}</span>
                    <span style={{ fontWeight: "bold", color: "#111827" }}>
                      Cant: {cartItem.cantidad}
                    </span>
                    <span style={{ fontWeight: "bold", color: "#111827" }}>
                      ${(price * cartItem.cantidad).toLocaleString("es-CO")}
                    </span>
                  </div>
                  <div data-cart="acciones">
                    <div data-cart="controles">
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(item.id, cartItem.cantidad - 1)
                        }
                        data-cart="btn-cant"
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(item.id, cartItem.cantidad + 1)
                        }
                        data-cart="btn-cant"
                        style={{ borderLeft: "1px solid #d1d5db" }}
                      >
                        +
                      </button>
                    </div>
                    <span data-cart="nombre-prod">{itemName}</span>
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.id)}
                      data-cart="eliminar"
                    >
                      <Trash2 style={{ width: "16px", height: "16px" }} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div data-cart="fiscal">
          <span>REF: PED-AGROFAC</span>
          <span>AG-2026-1001</span>
        </div>

        <div data-cart="formulario">
          <input
            required
            type="text"
            placeholder="Tu Nombre completo"
            data-cart="input"
            value={formValues.nombre}
            onChange={(e) => onFormChange.setNombre(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="Dirección de entrega"
            data-cart="input"
            value={formValues.direccion}
            onChange={(e) => onFormChange.setDireccion(e.target.value)}
          />
          <input
            required
            type="number"
            placeholder="WhatsApp / Teléfono"
            data-cart="input"
            value={formValues.telefono}
            onChange={(e) => onFormChange.setTelefono(e.target.value)}
          />

          <div data-cart="grupo-select">
            <label data-cart="label">Medio de Pago:</label>
            <select
              data-cart="select"
              value={formValues.medioPago}
              onChange={(e) => onFormChange.setMedioPago(e.target.value)}
            >
              <option value="Efectivo Contraentrega">
                💵 Efectivo Contraentrega
              </option>
              <option value="Transferencia Bancaria / Nequi">
                💳 Transferencia Bancaria / Nequi
              </option>
            </select>
          </div>

          <div data-cart="grupo-select">
            <label data-cart="label">Método de Envío:</label>
            <select
              data-cart="select"
              value={formValues.metodoEnvio}
              onChange={(e) => onFormChange.setMetodoEnvio(e.target.value)}
            >
              <option value="Despacho Domicilio Express">
                🛵 Despacho Domicilio Express
              </option>
              <option value="Recogida en Tienda">🏪 Recogida en Tienda</option>
            </select>
          </div>
        </div>

        <div data-cart="seccion-total">
          <div data-cart="fila-total">
            <span data-cart="txt-total">TOTAL:</span>
            <span data-cart="num-total">
              ${totalOrderValue.toLocaleString("es-CO")}
            </span>
          </div>

          {/* Botón para ver la Factura (Inhabilitado si faltan datos o productos) */}
          <button
            type="button"
            data-cart="btn-pdf"
            onClick={onVerFactura}
            disabled={botonInhabilitado}
          >
            <FileText
              style={{
                width: "16px",
                height: "16px",
                color: botonInhabilitado ? "#9ca3af" : "#ef4444",
              }}
            />{" "}
            Ver Factura
          </button>
        </div>
      </div>
    </div>
  );
}
