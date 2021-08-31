import ArecipeCard from "../AsingleReceipe/AsingleReceipe"
import "./receipList.scss"
import {connect} from "react-redux"

const ReceipeList = ({recetas,busquedaReceta}) => {

  /* console.log(recetas) */

  const filteredRecipes = recetas.filter((aRecipe) =>
  aRecipe.name.toLowerCase().includes(busquedaReceta.toLowerCase())
  );


  return (
    <div className="receipList_container">
        {filteredRecipes.length === 0 
        ? <p>Ninguna receta coincide con tu busqueda</p>
        :filteredRecipes.map((elem) =>        
         <ArecipeCard key={elem._id} recipe={elem}/>
         )}
    </div>
  );
};


const mapStateToProps= (state) =>{
  return ({
    recetas: state.recetas,
    busquedaReceta: state.busquedaReceta
  })
}

export default connect(mapStateToProps, null)(ReceipeList);
