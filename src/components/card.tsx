import cardStyles from "../styles/card.module.css";
import { useState } from "react";
import productosData from "../data/productos.json";
import Descripcion from "../components/descripcion";
import { AddToCartButton } from "./Button";
import { useCart } from "./CartContext";

type Product = {
  id: string | number;
  imagen: string;
  nombre: string;
  descripcion: string;
  precio1: number | string;
  precio2: number | string;
  precio3: number | string;
  categoria: string;
};

type CardProps = {
  buscarTermino: string;
  categoriasSeleccionadas: string[];
  ordenPrecio: string;
};

const Card = ({
  buscarTermino,
  categoriasSeleccionadas,
  ordenPrecio,
}: CardProps) => {
  const [productoSeleccionado, setProductoSeleccionado] =
    useState<Product | null>(null);
  const [loadingId, setLoadingId] = useState<string | number | null>(null);

  // 1. Creamos un estado para guardar las selecciones de cada producto (Ej: { [productId]: { precio: 5000, medida: 'bulto' } })
  const [seleccionesPrecios, setSeleccionesPrecios] = useState<{
    [key: string | number]: { precio: number; medida: string };
  }>({});

  const { agregarAlCarrito } = useCart();

  const normalizarTexto = (texto: string) =>
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const terminoBusqueda = normalizarTexto(buscarTermino.trim());

  const productosFiltrados = (productosData as Product[]).filter((producto) => {
    const coincideCategoria =
      categoriasSeleccionadas.length === 0 ||
      categoriasSeleccionadas.some(
        (categoria) =>
          normalizarTexto(producto.categoria) === normalizarTexto(categoria),
      );
    const coincideBusqueda =
      !terminoBusqueda ||
      normalizarTexto(producto.nombre).includes(terminoBusqueda);

    return coincideCategoria && coincideBusqueda;
  });

  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    if (ordenPrecio === "mayor-precio")
      return Number(b.precio1) - Number(a.precio1);
    if (ordenPrecio === "menor-precio")
      return Number(a.precio1) - Number(b.precio1);
    return 0;
  });

  // 2. Manejador cuando el usuario cambia la opción del select
  const handleSelectChange = (
    producto: Product,
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const opcion = e.target.value; // 'arroba', 'bulto' o 'kilo'
    let precioSeleccionado = Number(producto.precio1);

    if (opcion === "arroba") precioSeleccionado = Number(producto.precio1);
    if (opcion === "bulto") precioSeleccionado = Number(producto.precio2);
    if (opcion === "kilo") precioSeleccionado = Number(producto.precio3);

    // Guardamos la selección actual para este producto específico
    setSeleccionesPrecios((prev) => ({
      ...prev,
      [producto.id]: {
        precio: precioSeleccionado,
        medida: opcion,
      },
    }));
  };

  const handleAddToCart = (producto: Product) => {
    setLoadingId(producto.id);

    // 3. Obtenemos la selección del usuario, o usamos los valores por defecto (precio1 / arroba) si no cambió el select
    const seleccionActual = seleccionesPrecios[producto.id];
    const precioFinal = seleccionActual
      ? seleccionActual.precio
      : Number(producto.precio1);
    const medidaFinal = seleccionActual ? seleccionActual.medida : "arroba";

    agregarAlCarrito({
      id: `${producto.id}-${medidaFinal}`, // Opcional: si quieres diferenciar el mismo producto con distinta medida en el carrito
      imagen: producto.imagen,
      nombre: `${producto.nombre} (${medidaFinal})`, // Para que en el carrito se vea la medida elegida
      precio: precioFinal || 0,
      cantidad: 1,
    });

    // Pequeño tiempo de respuesta para el spinner antes de restaurar el botón
    setTimeout(() => {
      setLoadingId(null);
    }, 500);
  };

  return (
    <article>
      <main className={cardStyles["main-content"]}>
        {productosOrdenados.length > 0 ? (
          productosOrdenados.map((producto) => (
            <div className={cardStyles["product-card"]} key={producto.id}>
              <div className={cardStyles["media-container"]}>
                <button
                  type="button"
                  className={`${cardStyles["badge"]} ${cardStyles["descripcion"]}`}
                  onClick={() => setProductoSeleccionado(producto)}
                >
                  Descripción +
                </button>
                <img
                  src={producto.imagen}
                  className={cardStyles["image"]}
                  alt={producto.nombre}
                />
              </div>

              <div className={cardStyles["content"]}>
                <h3 className={cardStyles["title"]}>{producto.nombre}</h3>
                <p className={cardStyles["category"]}>{producto.categoria}</p>

                <div className={cardStyles["select-wrapper"]}>
                  <select
                    className={cardStyles["select-input"]}
                    defaultValue=""
                    onChange={(e) => handleSelectChange(producto, e)}
                  >
                    <option value="" disabled hidden>
                      mas . . . +
                    </option>

                    <option value="arroba">Arroba — ${producto.precio1}</option>
                    <option value="bulto">Bulto — ${producto.precio2}</option>
                    <option value="kilo">Kilo — ${producto.precio3}</option>
                  </select>
                </div>

                <AddToCartButton
                  onClick={() => handleAddToCart(producto)}
                  isLoading={loadingId === producto.id}
                />
              </div>
            </div>
          ))
        ) : (
          <p className={cardStyles["no-results"]}>
            No encontramos productos para esta búsqueda o categoría.
          </p>
        )}

        <Descripcion
          producto={productoSeleccionado}
          alCerrar={() => setProductoSeleccionado(null)}
        />
      </main>
    </article>
  );
};

export default Card;
