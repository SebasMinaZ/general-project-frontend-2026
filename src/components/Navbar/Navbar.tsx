import React from 'react'
import type { Sesion } from "../../model";
import { NavLink } from 'react-router-dom';

export const Navbar = ({ usuario, cerrarSesion }: Pick<Sesion, "usuario" | "cerrarSesion">) => {
  return (
    <header className="cabecera">
      <nav aria-label="Navegacion principal">
        <strong>Taquilla</strong>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/about">Acerca de</NavLink>
        {usuario ? (
        <>
          <span>Hola, {usuario.nombre}</span>
          <button type="button">Cerrar sesión</button>
        </>
          ) : (
          <NavLink to="/sign-in">Iniciar sesión</NavLink>
          )}
      </nav>
    </header>
  );
};

export default Navbar
