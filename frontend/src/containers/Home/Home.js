import ReceipeList from "../../components/ReceipList/ReceipList";
import Searcher from "../../components/Searcher/Searcher";
import "./home.scss";
import {connect} from "react-redux"
import {setState, setHeaderGlossary} from "../../store/actions"
import { useEffect } from "react";
import {cargarRecetas} from "../../utils/utils"




const Home = ({recetas, setState, setHeaderGlossary}) => {
  

  useEffect(() => {
    setHeaderGlossary(false)
    cargarRecetas(setState)
    
    
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  
  //eso de arriba es una sucia trampa cochina, no se que hace 
  //pero ya no me sale un warning medio molesto 
  


  return (
    <div className="home_Conteiner">
      <Searcher />
      <div className="home_content">
        {recetas.length === 0 ? (
          <p className="noReceipeMsg">Aun no hay recetas</p>
        ) : (
          <ReceipeList/>
        )}
      </div>
    </div>
  );
};

const mapStateToProps= (state) =>{
  return ({
    recetas: state.recetas
  })
}

const mapDispatchToPorops = {
  setState,
  setHeaderGlossary
}

export default connect(mapStateToProps, mapDispatchToPorops)(Home);;
