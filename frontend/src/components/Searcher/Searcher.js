import "./searcher.scss";
import { BsSearch } from "react-icons/bs";
import { updateRecipieSearch, updateGlossarySearch } from "../../store/actions";
import { connect } from "react-redux";

const Searcher = ({
  busquedaReceta,
  busquedaGlosario,
  updateRecipieSearch,
  updateGlossarySearch,
  isGlossary = false,
  
}) => {
  const handleSearch = (e) => {
    if (isGlossary) {
      updateGlossarySearch(e.target.value);
      
    } else {
      updateRecipieSearch(e.target.value);
      
    }
  };

  return (
    <div className="searcher_conteiner">
      <div className="seracher">
        <label htmlFor="input-search">
          <BsSearch className="search_icon" />
        </label>

        <input
          className="input-search"
          type="text"
          placeholder={ isGlossary ? "Que definicion estas buscando?" :"¿Que receta estas buscando?"}
          id="input-search"
          onChange={handleSearch}
          value={isGlossary ? busquedaGlosario : busquedaReceta}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    busquedaReceta: state.busquedaReceta,
    busquedaGlosario: state.busquedaGlosario
  };
};

const mapDispachToProps = {
  updateRecipieSearch,
  updateGlossarySearch,
};

export default connect(mapStateToProps, mapDispachToProps)(Searcher);
