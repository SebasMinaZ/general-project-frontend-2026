import { useTextos } from "./hooks/useTextos.js";
import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import PreferenciasCookies from "./components/PreferenciasCookies.jsx";
import "./styles/index.css"

import React from "react";

const App = () => {
  return (
    <>
      <main className="pagina">
        <header className="pagina-encabezado">
          <h1>Taquilla</h1>
          <p>Crea tu cuenta o ingresa para comprar tus boletas</p>
        </header>
        <div className="pagina-formularios"></div>
      </main>
    </>
  );
};

export default App;
