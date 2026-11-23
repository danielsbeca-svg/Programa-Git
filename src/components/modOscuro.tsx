import { useState, useEffect } from "react";

function ModOscuro() {
  // Estado para saber si el modo oscuro está activo
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Alternar el estado al hacer clic
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Efecto para añadir o quitar la clase "dark-mode" en el body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div>
      <button onClick={toggleTheme} className="btn-Dark-mode">
        {isDarkMode ? "☀️ Claro" : "🌙 Oscuro"}
      </button>
    </div>
  );
}

export default ModOscuro;
