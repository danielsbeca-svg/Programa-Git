import "./App.css";
import Card from "./components/card";
import Footer from "./components/footer";
import Header from "./components/Header";
import Nav from "./components/nav";
import { useState } from "react";

function App() {
  const [buscarTermino, setBuscarTermino] = useState("");
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState<
    string[]
  >([]);
  const [ordenPrecio, setOrdenPrecio] = useState("relevancia");

  const cambiarCategoria = (categoria: string, seleccionada: boolean) => {
    setCategoriasSeleccionadas((categoriasActuales) =>
      seleccionada
        ? [...categoriasActuales, categoria]
        : categoriasActuales.filter((actual) => actual !== categoria),
    );
  };

  return (
    <>
      <div className="content-Total">
        <Header buscarTermino={buscarTermino} onBuscar={setBuscarTermino} />
        <div className="content-page">
          <Nav
            categoriasSeleccionadas={categoriasSeleccionadas}
            onCategoriaChange={cambiarCategoria}
            ordenPrecio={ordenPrecio}
            onOrdenPrecioChange={setOrdenPrecio}
          />

          <div className="main-content">
            <Card
              buscarTermino={buscarTermino}
              categoriasSeleccionadas={categoriasSeleccionadas}
              ordenPrecio={ordenPrecio}
            />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
