import styleS from "../styles/Search.module.css";
import Lupa from "./Lupa";

type Props = {
  value: string;
  onBuscar: (termino: string) => void;
};

const Search = ({ value, onBuscar }: Props) => {
  return (
    <section className={styleS["search"]}>
      <input
        type="search"
        placeholder="Buscar producto por nombre..."
        className={styleS["search-bar"]}
        aria-label="Buscar productos"
        value={value}
        onChange={(event) => onBuscar(event.target.value)}
      />
      <span className={styleS["search-icon"]}>
        <Lupa />
      </span>
    </section>
  );
};

export default Search;
