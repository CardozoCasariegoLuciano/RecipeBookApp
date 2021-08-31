import "./recipe.scss";
import { useEffect } from "react";
import { obtenerUnaReceta } from "../../utils/utils";
import { connect } from "react-redux";
import { setARecipe } from "../../store/actions";
import { Link } from "react-router-dom";

const Recipe = ({ match, receta, setARecipe }) => {
  useEffect(() => {
    const id = match.params.id;
    obtenerUnaReceta(id, setARecipe);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="receta_view">
      <div className="receta_container">
        <div className="receta-header">
          <h3 className="receta-titulo">{receta.name}</h3>
        </div>
        <div className="receta-Info">
          <div className="recetas-datos">
            <div className="dificultad">
              <p className="receta-dificultad">
                Dificultad de la receta: <span>{receta.difficulty}</span>
              </p>
            </div>
            <div className="tiempo">
              <p className="receta-tiempo">
                Tiempo requerido: <span>{receta.time}</span>
              </p>
            </div>
          </div>

        </div>
          <div className="receta-Guia">
            <div className="seccionPasos">
              <h3>Pasos a seguir: </h3>
              <p className="receta-pasos">{receta.steps}</p>
            </div>

            <div className="seccionIngredientes">
              <h3>Ingredientes: </h3>
              <p className="receta-ingredientes">{receta.ingredients}</p>
            </div>
          </div>
        <Link to="/glosario" className="btn-glosario">
          Glosario
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    receta: state.recetaSeleccionada,
  };
};

const mapDispatchToProps = {
  setARecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
