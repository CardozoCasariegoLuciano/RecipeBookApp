import "./asingleReceipe.scss";
import { deleteARecipie } from "../../services/recipeData";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setState } from "../../store/actions";
import { cargarRecetas } from "../../utils/utils";

//Iconos
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import {BiTimeFive} from "react-icons/bi"
import {GiWeightLiftingDown} from "react-icons/gi"

const ArecipeCard = ({ recipe, setState, match }) => {
  const handleDelete = async (id) => {
    await deleteARecipie(id);
    cargarRecetas(setState);
  }; 

  return (    
    <div className="receip_card">
      <div className="receip_card-header">        
        <h4 className="receip_card-title">{recipe.name}</h4>
        <div className="receip_card-header-btnSection">
          <TiThMenuOutline className="menuBTN" />
          <div className="btnSection-Hideicons">
            <AiFillDelete
              className="deleteBTN"
              title="eliminar"
              onClick={() => handleDelete(recipe._id)}
            />
            <Link to={"/edit/" + recipe._id}>
              <FaRegEdit className="editBTN" title="editar" />
            </Link>
          </div>
        </div>
      </div>
      <div className="receip_card-content">
        <p className="receip_card-dificulty">
         <GiWeightLiftingDown className="icon"/> Dificultad: <span>{recipe.difficulty}</span>{" "}
        </p>
        <p className="receip_card-time">
        <BiTimeFive className="icon"/>  Tiempo de preparacion: <span>{recipe.time}</span>{" "}
        </p>
      </div>
      <Link to={"/receta/" + recipe._id}  className="btn-verMas">
      Ver mas 
      </Link>
    </div>    
  );
};

const mapDispatchToProps = {
  setState,
};

export default connect(null, mapDispatchToProps)(ArecipeCard);
