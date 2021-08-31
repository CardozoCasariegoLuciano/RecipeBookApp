import "./createRecipe.scss";
import {
  addARecipie,
  updateARecipe,
  getAsingleRecipie,
} from "../../services/recipeData";
import { cargarRecetas } from "../../utils/utils";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setState } from "../../store/actions";

const CreateRecipe = ({ setState, match }) => {
  //match esta dentro de props gracias al browserRouter

  const [isEditing, setIsEditing] = useState(false);

  const valoresTime = [
    { valor: "Menos de 15 minutos", desc: "Menos de 15 minutos" },
    { valor: "De 15 a 30 minutos", desc: "De 15 a 30 minutos" },
    { valor: "De 30 minutos a 1 hora", desc: "De 30 minutos a 1 hora" },
    { valor: "Mas de 1 hora", desc: "Mas de 1 hora" },
  ];

  const valoresDifficulty = [
    { valor: "Muy facil", desc: "Muy facil" },
    { valor: "Fail", desc: "Fail" },
    { valor: "Media", desc: "Media" },
    { valor: "Dificil", desc: "Dificil" },
  ];

  const [newRecipe, setNewRecipa] = useState({
    name: "",
    difficulty: valoresDifficulty[0].valor,
    time: valoresTime[0].valor,
    steps: "",
    ingredients: "",
  });

  const handleChange = (e) => {
    setNewRecipa({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const editando = async () => {
    if (match.params.id) {
      const aReceip = await getAsingleRecipie(match.params.id);

      setNewRecipa({
        name: aReceip.data.name,
        difficulty: aReceip.data.difficulty,
        time: aReceip.data.time,
        steps: aReceip.data.steps,
        ingredients: aReceip.data.ingredients,
      });

      setIsEditing(true);
    }
  };

  useEffect(() => {
    editando();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      const id = match.params.id;
      await updateARecipe(newRecipe, id);
    } else {
      await addARecipie(newRecipe);
    }
    cargarRecetas(setState);

    window.location.href = "/";
  };

  return (
    <div className="createRecipe_container">
      <div className="createRecipe_form">
        <form onSubmit={handleSubmit}>
          {isEditing ? <h3>Edita tu receta!</h3> : <h3>Crea tu receta!</h3>}

          <label htmlFor="name">Nombre de la receta</label>
          <input
            className="createRecipe_form-input"
            type="text"
            id="name"
            name="name"
            required
            onChange={handleChange}
            value={newRecipe.name}
          />

          <label htmlFor="time">Cuanto tiempo requiere este plato?</label>
          <select
            className="createRecipe_form-input"
            name="time"
            id="time"
            required
            onChange={handleChange}
            value={newRecipe.time}
          >
            {valoresTime.map((elem) => (
              <option key={elem.valor} value={elem.valor}>
                {elem.desc}
              </option>
            ))}
          </select>

          <label htmlFor="difficulty">dificultad</label>
          <select
            className="createRecipe_form-input"
            name="difficulty"
            id="difficulty"
            required
            onChange={handleChange}
            value={newRecipe.difficulty}
          >
            {valoresDifficulty.map((elem) => (
              <option key={elem.valor} value={elem.valor}>
                {elem.desc}
              </option>
            ))}
          </select>

          <label htmlFor="steps">Indica los pasos a seguir</label>
          <textarea
            className="createRecipe_form-input textarea"
            name="steps"
            id="steps"
            required
            onChange={handleChange}
            value={newRecipe.steps}
          ></textarea>

          <label htmlFor="ingredients">
            Indica los ingredientes necesarios
          </label>
          <textarea
            className="createRecipe_form-input textarea"
            name="ingredients"
            id="ingredients"
            required
            onChange={handleChange}
            value={newRecipe.ingredients}
          ></textarea>

          <button type="submit">{isEditing ? "Editar" : "Crear!!"}</button>
          {isEditing && (
            <button
              type="button"
              onClick={() => (window.location.href = "/")}
              className="btn_editingCanceled"
            >
              Cancelar
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setState,
};

export default connect(null, mapDispatchToProps)(CreateRecipe);
