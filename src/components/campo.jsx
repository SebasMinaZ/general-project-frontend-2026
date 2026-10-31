import React, { useId } from "react";

const campo = () => {
  const id = useId();
  const idAyuda = `${id}-ayuda`;
  const idError = `${id}-error`;
  const descripcion = [ayuda && idAyuda, error && idError]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div className="campo">
        <label htmlFor={id}>{etiqueta}</label>
        {ayuda && (
          <p id={idAyuda} className="campo-ayuda">
            {ayuda}
          </p>
        )}
      </div>
    </>
  );
};

export default campo;
