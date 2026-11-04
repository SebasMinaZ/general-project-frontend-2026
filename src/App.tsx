
import { useState } from "react";
import type { Usuario } from "./model";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import Inicio from "./pages/inicio";
import { Acerca } from "./pages/Acerca";
import Ingresar from "./pages/Ingresar";

const App = () => {
  /*
    Guardar un usuario que inició sesión.
    Valor inicial del usuario => null.
    La información del usuario se guarda en el objeto Usuario o null.
  */
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  return (
    <Routes>
      <Route
        element={
          <PublicLayout
            usuario={usuario}
            iniciarSesion={() =>
              setUsuario({ nombre: "Jhon Doe" })
            }
            cerrarSesion={() => setUsuario(null)}
          />
        }
      >
        <Route index element={<Inicio />} />
        <Route path="about" element={<Acerca />} />
        <Route path="sign-in" element={<Ingresar />} />
      </Route>
    </Routes>
  );
};

export default App;
