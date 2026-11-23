/*

import navstyles from "../styles/nav.module.css";
import Logo from "./logo";
import Fresa from "./fresa";
import Verdura from "./verdura";
import Lacteos from "./lacteos";
import Carnicos from "./carnicos";
import ModOscuro from "./modOscuro";
import Grano from "./Grano";

type NavProps = {
  categoriasSeleccionadas: string[];
  onCategoriaChange: (categoria: string, seleccionada: boolean) => void;
  ordenPrecio: string;
  onOrdenPrecioChange: (orden: string) => void;
};

function Nav({
  categoriasSeleccionadas,
  onCategoriaChange,
  ordenPrecio,
  onOrdenPrecioChange,
}: NavProps) {
  return (
    <nav className={navstyles.nav}>
      <Logo />
      <aside className={navstyles.filters} aria-label="Filtros de productos">
        <section>
          <h3>Categorías</h3>
          <div className={navstyles["filter-category"]}>
            <label className={navstyles["filter-option"]}>
              <input
                type="checkbox"
                checked={categoriasSeleccionadas.includes("Frutas")}
                onChange={(event) =>
                  onCategoriaChange("Frutas", event.target.checked)
                }
              />
              <Fresa />
              <span>Frutas</span>
            </label>
            <label className={navstyles["filter-option"]}>
              <input
                type="checkbox"
                checked={categoriasSeleccionadas.includes("Verduras")}
                onChange={(event) =>
                  onCategoriaChange("Verduras", event.target.checked)
                }
              />
              <Verdura />
              <span>Verduras</span>
            </label>
            <label className={navstyles["filter-option"]}>
              <input
                type="checkbox"
                checked={categoriasSeleccionadas.includes("Lacteos")}
                onChange={(event) =>
                  onCategoriaChange("Lacteos", event.target.checked)
                }
              />
              <Lacteos />
              <span>Lácteos</span>
            </label>
            <label className={navstyles["filter-option"]}>
              <input
                type="checkbox"
                checked={categoriasSeleccionadas.includes("Carnicos")}
                onChange={(event) =>
                  onCategoriaChange("Carnicos", event.target.checked)
                }
              />
              <Carnicos />
              <span>Cárnicos</span>
            </label>
            <label className={navstyles["filter-option"]}>
              <input
                type="checkbox"
                checked={categoriasSeleccionadas.includes("Granos")}
                onChange={(event) =>
                  onCategoriaChange("Granos", event.target.checked)
                }
              />
              <Grano />
              <span>Granos</span>
            </label>
          </div>
        </section>
        <div className={navstyles["sort-options"]}>
          <label htmlFor="price-order">Ordenar por precio</label>
          <select
            id="price-order"
            value={ordenPrecio}
            onChange={(event) => onOrdenPrecioChange(event.target.value)}
          >
            <option value="relevancia">Predeterminado</option>
            <option value="menor-precio">Menor a mayor</option>
            <option value="mayor-precio">Mayor a menor</option>
          </select>
        </div>
      </aside>
      <h2 className={navstyles["TitleCategory"]}>Ajustes</h2>
      <ModOscuro />
    </nav>
  );
}

export default Nav;

*/

import { useState } from "react";
import navstyles from "../styles/nav.module.css";
import Logo from "./logo";
import Fresa from "./fresa";
import Verdura from "./verdura";
import Lacteos from "./lacteos";
import Carnicos from "./carnicos";
import ModOscuro from "./modOscuro";
import Grano from "./Grano";

type NavProps = {
  categoriasSeleccionadas: string[];
  onCategoriaChange: (categoria: string, seleccionada: boolean) => void;
  ordenPrecio: string;
  onOrdenPrecioChange: (orden: string) => void;
};

function Nav({
  categoriasSeleccionadas,
  onCategoriaChange,
  ordenPrecio,
  onOrdenPrecioChange,
}: NavProps) {
  // Estado para controlar la apertura del menú hamburguesa en móviles/tablets
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={navstyles.nav}>
      {/* Botón de Menú Hamburguesa (Visible solo en pantallas de 1024px o menores) */}
      <button
        className={navstyles.hamburger}
        onClick={toggleMenu}
        aria-label="Abrir menú de navegación"
        aria-expanded={isOpen}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Contenedor de filtros y opciones. Se le añade una clase condicional si está abierto */}
      <aside
        className={`${navstyles.filters} ${isOpen ? navstyles.filtersOpen : ""}`}
        aria-label="Filtros de productos"
      >
        <section>
          <h2 className={navstyles["TitleCategory"]}>Categorías</h2>
          <div className={navstyles["filter-category"]}>
            <label className={navstyles["filter-option"]}>
              <input
                type="checkbox"
                checked={categoriasSeleccionadas.includes("Frutas")}
                onChange={(event) =>
                  onCategoriaChange("Frutas", event.target.checked)
                }
              />
              <Fresa />
              <span>Frutas</span>
            </label>
            <label className={navstyles["filter-option"]}>
              <input
                type="checkbox"
                checked={categoriasSeleccionadas.includes("Verduras")}
                onChange={(event) =>
                  onCategoriaChange("Verduras", event.target.checked)
                }
              />
              <Verdura />
              <span>Verduras</span>
            </label>
            <label className={navstyles["filter-option"]}>
              <input
                type="checkbox"
                checked={categoriasSeleccionadas.includes("Lacteos")}
                onChange={(event) =>
                  onCategoriaChange("Lacteos", event.target.checked)
                }
              />
              <Lacteos />
              <span>Lácteos</span>
            </label>
            <label className={navstyles["filter-option"]}>
              <input
                type="checkbox"
                checked={categoriasSeleccionadas.includes("Carnicos")}
                onChange={(event) =>
                  onCategoriaChange("Carnicos", event.target.checked)
                }
              />
              <Carnicos />
              <span>Cárnicos</span>
            </label>
            <label className={navstyles["filter-option"]}>
              <input
                type="checkbox"
                checked={categoriasSeleccionadas.includes("Granos")}
                onChange={(event) =>
                  onCategoriaChange("Granos", event.target.checked)
                }
              />
              <Grano />
              <span>Granos</span>
            </label>
          </div>
        </section>
        <div className={navstyles["sort-options"]}>
          <label className={navstyles["TitleCategory"]} htmlFor="price-order">
            Ordenar por precio
          </label>
          <select
            id="price-order"
            value={ordenPrecio}
            onChange={(event) => onOrdenPrecioChange(event.target.value)}
          >
            <option value="relevancia">Predeterminado</option>
            <option value="menor-precio">Menor a mayor</option>
            <option value="mayor-precio">Mayor a menor</option>
          </select>
        </div>
      </aside>

      <h2 className={navstyles["TitleCategory"]}>Acciones</h2>
      <ModOscuro />
    </nav>
  );
}

export default Nav;
