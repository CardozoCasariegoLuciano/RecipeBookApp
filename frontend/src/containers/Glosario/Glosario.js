import "./glosario.scss";
import { connect } from "react-redux";
import GlossaryElement from "../../components/GlossaryElement/GlossaryElement";
import { useEffect } from "react";
import { cargarGlosarios } from "../../utils/utils";
import { setGlossary, setHeaderGlossary } from "../../store/actions";
import Searcher from "../../components/Searcher/Searcher";

const Glosario = ({
  glosario,
  setGlossary,
  setHeaderGlossary,
  busquedaGlosario,
}) => {
  useEffect(() => {
    setHeaderGlossary(true);
    cargarGlosarios(setGlossary);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const glosarioFiltrado = glosario.filter((unGlosario) =>
    unGlosario.title.toLowerCase().includes(busquedaGlosario.toLowerCase())
  );

  return (
    <div className="glosario_container">
      <div className="glosario_content">
        <Searcher isGlossary="true" />

        <div className="glosaryList">
          {glosario.length === 0 ? (
            <p className="sinGlosario">Aun no hay glosarios disponibles</p>
          ) : glosarioFiltrado.length === 0 ? (
            <p className="sinGlosario">
              Ningun glosario coincide con tu busqueda
            </p>
          ) : (
            glosarioFiltrado.map((elem) => (
              <GlossaryElement key={elem._id} data={elem} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    glosario: state.glosarios,
    busquedaGlosario: state.busquedaGlosario,
  };
};

const mapDispatchToProps = {
  setGlossary,
  setHeaderGlossary,
};

export default connect(mapStateToProps, mapDispatchToProps)(Glosario);
