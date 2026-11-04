import React from 'react'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import { Sesion } from '../model'

const Ingresar = () => {
  const { usuario, iniciarSesion } = useOutletContext<Sesion>()
  //cambia la ruta sin cambiar la aplicación
  const navegar = useNavigate();

  function ingresar() {
    iniciarSesion();
    navegar("/");
  }
  //PublicLayout es padre de Ingresar
  return (
    <section>
      <h1>Iniciar sesión</h1>
      <p>Demostración local</p>
      {usuario ? (<Link to="/">Volver al inicio</Link>) : (<button type="button" onClick={ingresar}>Entrar como Jhon Doe</button>)}
    </section>
  )
}

export default Ingresar
