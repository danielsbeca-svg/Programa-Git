import styleHeader from "../styles/header.module.css";
import CarritoBoton from "./carritoBoton";
import Logo from "./logo";
import Search from "./Search";

type HeaderProps = {
  buscarTermino: string;
  onBuscar: (termino: string) => void;
};

function Header({ buscarTermino, onBuscar }: HeaderProps) {
  return (
    <header>
      <div className={styleHeader["content-header"]}>
        <Logo />
        <Search value={buscarTermino} onBuscar={onBuscar} />
        <CarritoBoton />
      </div>
    </header>
  );
}

export default Header;
