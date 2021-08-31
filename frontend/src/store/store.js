import { createStore } from "redux";

const initialState = {
  recetas: [],
  busquedaReceta: "",
  recetaSeleccionada: {},
  glosarios: [],
  isGlossary: false,
  busquedaGlosario: "",
};

const reducerRecipes = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STATE":
      return {
        ...state,
        recetas: action.payload,
      };

    case "UPDATE_RECIPIE_SEARCH":
      return {
        ...state,
        busquedaReceta: action.payload,
      };
    case "UPDATE_GLOSSARY_SEARCH":
      return {
        ...state,
        busquedaGlosario: action.payload,
      };
    case "SET_A_RECIPE":
      return {
        ...state,
        recetaSeleccionada: action.payload,
      };

    case "SET_GLOSSARY":
      return {
        ...state,
        glosarios: action.payload,
      };
    case "SET_HEADER_GLOSSARY":
      return {
        ...state,
        isGlossary: action.payload,
      };

    default:
      return state;
  }
};

export default createStore(reducerRecipes);
