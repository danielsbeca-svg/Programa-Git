import { useState } from "react";
import estylescarritoBoton from "../styles/carritoBoton.module.css";
import { useCart } from "./CartContext";
import CarritoCompras from "./carritoCompras";
import Factura from "./Factura"; // Importas tu componente Factura

const CartButton = () => {
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  // Estado para controlar qué vista mostrar dentro del modal: "carrito" o "factura"
  const [vistaActual, setVistaActual] = useState<"carrito" | "factura">(
    "carrito",
  );

  const { carrito, actualizarCantidad, eliminarDelCarrito } = useCart();

  // Estados del formulario
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [medioPago, setMedioPago] = useState("Efectivo Contraentrega");
  const [metodoEnvio, setMetodoEnvio] = useState("Despacho Domicilio Express");

  const cantidadProductos = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0,
  );

  const totalCompra = carrito.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0,
  );

  const handlePagar = () => {
    if (!nombre || !direccion || !telefono) {
      alert("Por favor completa los datos del formulario de entrega.");
      return;
    }
    alert(`¡Gracias por tu compra, ${nombre}! Pedido registrado.`);
  };

  return (
    <div className={estylescarritoBoton.carritoBoton}>
      {/* Botón flotante del carrito */}
      <button
        type="button"
        className={estylescarritoBoton.containerSvg}
        onClick={() => {
          setVistaActual("carrito"); // <-- CORREGIDO: Al abrir, SIEMPRE muestra el carrito primero
          setCarritoAbierto(true);
        }}
        aria-label={`Abrir carrito, ${cantidadProductos} productos`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        {cantidadProductos > 0 && (
          <span className={estylescarritoBoton.cartCounter}>
            {cantidadProductos}
          </span>
        )}
      </button>

      {carritoAbierto && (
        <>
          {vistaActual === "carrito" ? (
            <CarritoCompras
              isOpen={carritoAbierto}
              onClose={() => setCarritoAbierto(false)}
              cartItems={carrito.map((item) => ({
                id: item.id,
                nombre: item.nombre,
                imagen: item.imagen,
                precio: item.precio,
                cantidad: item.cantidad,
              }))}
              onUpdateQuantity={(id, nuevaCantidad) => {
                const itemActual = carrito.find((i) => i.id === id);
                if (itemActual) {
                  const delta = nuevaCantidad - itemActual.cantidad;
                  actualizarCantidad(id, delta);
                }
              }}
              onRemoveItem={(id) => eliminarDelCarrito(id)}
              totalOrderValue={totalCompra}
              formValues={{
                nombre,
                direccion,
                telefono,
                medioPago,
                metodoEnvio,
              }}
              onFormChange={{
                setNombre,
                setDireccion,
                setTelefono,
                setMedioPago,
                setMetodoEnvio,
              }}
              onPagar={handlePagar}
              onVerFactura={() => setVistaActual("factura")} // Solo cambia a factura al presionar este botón
            />
          ) : (
            <Factura
              datosCliente={{
                nombre,
                direccion,
                telefono,
                medioPago,
                metodoEnvio,
              }}
              productos={carrito.map((item) => ({
                id: item.id,
                nombre: item.nombre,
                precio: item.precio,
                cantidad: item.cantidad,
              }))}
              total={totalCompra}
              onVolver={() => setVistaActual("carrito")} // Permite regresar al carrito
            />
          )}
        </>
      )}
    </div>
  );
};

export default CartButton;
