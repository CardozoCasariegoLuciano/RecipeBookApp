import "./createGlosario.scss";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import {
  addGlossary,
  getASingleGlossary,
  updateGlossary,
} from "../../services/glossaryData";
import { cargarGlosarios } from "../../utils/utils";
import { setGlossary } from "../../store/actions";
import { Link } from "react-router-dom";

const CreateGlosario = ({ setGlossary, history, match }) => {
  const [newGlossary, setNewGlossary] = useState({
    title: "",
    description: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    editando();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const editando = async () => {
    if (match.params.id) {
      const aGlosarie = await getASingleGlossary(match.params.id);

      setNewGlossary({
        title: aGlosarie.data.title,
        description: aGlosarie.data.description,
      });

      setIsEditing(true);
    }
  };

  const handleChange = (e) => {
    setNewGlossary({
      ...newGlossary,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      const id = match.params.id;
      await updateGlossary(id, newGlossary);
    } else {
      await addGlossary(newGlossary);
    }
    cargarGlosarios(setGlossary);

    history.goBack();
  };

  return (
    <div className="createGlossary_container">
      <div className="createGlossary_content">
        <form onSubmit={handleSubmit}>
          {
            isEditing ? <h3>edita el glosario</h3> : <h3>Crea un nuevo glosario</h3>
          }
          <input
            type="text"
            placeholder="Titulo"
            name="title"
            onChange={handleChange}
            value={newGlossary.title}
          />
          <textarea
            name="description"
            id=""
            placeholder="Descripcion"
            onChange={handleChange}
            value={newGlossary.description}
          />
          <div className="createGlossary-btn_section">
            {isEditing ? (
              <button type="submit" className="btn-createGlossary">
                Editar
              </button>
            ) : (
              <button type="submit" className="btn-createGlossary">
                Crear
              </button>
            )}

            <Link to="/glosario" className="btn-createGlossary_Atras">
              atras
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    glosarios: state.glosarios,
  };
};

const mapDispatchToProps = {
  setGlossary,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGlosario);
