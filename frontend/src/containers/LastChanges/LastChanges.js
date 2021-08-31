import React from "react";
import "./lastChanges.scss";

const LastChages = () => {
  return (
    <div className="lcModal">
      <h3>Ultimos cambios</h3>
      <div className="lcModal_conteiner">
        {/* Para agregar mas cambios copio el div con la clase "aVercion" y reemplazo el texto 
      IMPORTANTE: que el nuevo div quede primero*/}

        <div className="aVercion">
          <hr />
          <p>
            <span className="title">
              <span className="vercion">v2.0?</span>Proximamente
            </span>
            Ya veremos que termina teniendo
            <br />
            <br />
            Cambios:
          </p>
          <ul>
            <li>Agregada mas informacion al footer</li>
          </ul>
        </div>

        <div className="aVercion">
          <hr />
          <p>
            <span className="title">
              <span className="vercion">v1.0</span>21/5/2021
            </span>
            La primera version de esta app con lo basico para funcionar en forma
            local.
            <br />
            <br />
            Se puede:
          </p>
          <ul>
            <li>Crear y editar una receta</li>
            <li>Crear y editar un glosario</li>
            <li>Ver la informacion de una receta</li>
            <li>Buscar recetas por su nombre</li>
            <li>Buscar glosarios por su titulo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LastChages;
