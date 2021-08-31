import "./header.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ recetas, isGlossary,glosarios }) => {
  return (
    <header className="header_container">
      <div className="header-content">
        <div className="logoSection">
          <Link to="/" className="logo">
            Libro de recetas
            {isGlossary ? (
              <p className="CantidadRec">
                Cantidad de glosarios: {glosarios.length}
              </p>
            ) : (
              <p className="CantidadRec">
                Cantidad de recetas: {recetas.length}
              </p>
            )}
          </Link>
        </div>
        {isGlossary ? (
          <Link to="/crearGlosario" className="router-links_header">
            Agregar nuevo glosario
          </Link>
        ) : (
          <Link to="/createRecipe" className="router-links_header">
            Agregar reseta
          </Link>
        )}
      </div>
    </header>
  );
};

const mapStatetoProps = (state) => {
  return {
    recetas: state.recetas,
    isGlossary: state.isGlossary,
    glosarios : state.glosarios,
  };
};

export default connect(mapStatetoProps, null)(Header);
