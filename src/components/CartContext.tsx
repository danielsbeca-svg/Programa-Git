import { createContext, useContext, useState, type ReactNode } from "react";

export type CartItem = {
  id: string | number;
  cantidad: number;
  nombre: string;
  imagen: string;
  precio: number;
};

type CartContextType = {
  carrito: CartItem[];
  agregarAlCarrito: (producto: CartItem) => void;
  actualizarCantidad: (productoId: string | number, cantidad: number) => void;
  eliminarDelCarrito: (productoId: string | number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [carrito, setCarrito] = useState<CartItem[]>([]);

  const agregarAlCarrito = (producto: CartItem) => {
    setCarrito((carritoAnterior) => {
      const index = carritoAnterior.findIndex(
        (articulo) => articulo.id === producto.id,
      );
      if (index >= 0) {
        const carritoActualizado = [...carritoAnterior];
        const existente = { ...carritoActualizado[index] };
        existente.cantidad += producto.cantidad;
        carritoActualizado[index] = existente;
        return carritoActualizado;
      } else {
        return [...carritoAnterior, producto];
      }
    });
  };

  const actualizarCantidad = (
    productoId: string | number,
    cantidad: number,
  ) => {
    setCarrito((carritoAnterior) =>
      carritoAnterior.flatMap((producto) => {
        if (producto.id !== productoId) return [producto];
        const nuevaCantidad = producto.cantidad + cantidad;
        return nuevaCantidad > 0
          ? [{ ...producto, cantidad: nuevaCantidad }]
          : [];
      }),
    );
  };

  const eliminarDelCarrito = (productoId: string | number) => {
    setCarrito((carritoAnterior) =>
      carritoAnterior.filter((producto) => producto.id !== productoId),
    );
  };
  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        actualizarCantidad,
        eliminarDelCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};
