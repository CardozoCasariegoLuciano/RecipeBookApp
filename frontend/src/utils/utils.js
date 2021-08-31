import { getRecipies, getAsingleRecipie } from "../services/recipeData";
import {getGlossary, getASingleGlossary} from "../services/glossaryData"

export async function cargarRecetas(unEstado) {
    const response = await getRecipies();
  
    if(response.status === 200 ){    
        unEstado(response.data)
    }else{
      console.log("Error al obtener la informacion de la base de datos")
    }
  }

  export async function obtenerUnaReceta(id, unEstado) {

    const response = await getAsingleRecipie(id);    

    if (response.status === 200) {
      unEstado(response.data);      
    } else {
      console.log("Error al obtener la informacion de la base de datos");
    }
  }



  export async function cargarGlosarios(unEstado) {
    const response = await getGlossary();
  
    if(response.status === 200 ){    
        unEstado(response.data)
    }else{
      console.log("Error al obtener la informacion de la base de datos")
    }
  }

  export async function obtenerUnGlosario(id, unEstado) {

    const response = await getASingleGlossary(id);    

    if (response.status === 200) {
      unEstado(response.data);      
    } else {
      console.log("Error al obtener la informacion de la base de datos");
    }
  }


