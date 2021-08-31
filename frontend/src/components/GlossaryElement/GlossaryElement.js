import "./glossaryElement.scss";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import {deleteGlossary} from "../../services/glossaryData"
import {cargarGlosarios} from  "../../utils/utils"
import {connect} from "react-redux"
import {setGlossary} from "../../store/actions"

const GlossaryElement = ({ data, setGlossary }) => {

const handleDelete = async(id) => {
  await deleteGlossary(id)
  cargarGlosarios(setGlossary)
} 

  return (
    <div className="glossryElement_container">
      <div className="glossaryElement_content">
        <h3 className="glassaryElement-title">{data.title}:</h3>
        <p className="glassaryElement-description">{data.description}</p>
      </div>

      <div className="glossryElement_btbSection">
        
        <div className="iconAnimado">
          <div className="barra01"></div>
          <div className="barra02"></div>
          <div className="barra03"></div>
        </div>

        <div className="updateAndDeleteBTNs-Glossary">
          <AiFillDelete
            className="deleteBTN"
            title="eliminar"
            onClick={() => handleDelete(data._id)}
          />
          <Link to={`/editarGlosario/${data._id}`}>
            <FaRegEdit className="updateBTN" />
          </Link>
        </div>
      </div>
    </div>
  );
};


const mapDispatchToProps = {
  setGlossary
}

export default connect(null,mapDispatchToProps)(GlossaryElement);
