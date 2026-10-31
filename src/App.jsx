import { useTextos } from "./hooks/useTextos.js";
import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import PreferenciasCookies from "./components/PreferenciasCookies.jsx";
import "./styles/index.css";
import Campo from "./components/campo.jsx";

const App = () => {
  return (
    <>
      <main className="pagina">
        <header className="pagina-encabezado">
          <h1>Taquilla</h1>
          <p>Crea tu cuenta o ingresa para comprar tus boletas</p>
        </header>

        <div className="pagina-formularios"></div>
        <div className="pagina-formularios">
          <Campo
            etiqueta="Correo"
            type="email"
            ayuda="Ingresa tu correo institucional"
          />
          <Campo
            etiqueta="Contraseña"
            type="password"
            error="La contraseña es requerida"
          />
        </div>
      </main>
    </>
  );
};

export default App;
