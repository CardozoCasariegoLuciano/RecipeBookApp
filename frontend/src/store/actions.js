 export const updateRecipieSearch = (payload) => ({ // tiene que llamarse payload si o si :V
    type: "UPDATE_RECIPIE_SEARCH",
    payload,
})

export const updateGlossarySearch = (payload) => ({ 
    type: "UPDATE_GLOSSARY_SEARCH",
    payload,
})

export const setState = (payload) => ({ 
    type: "SET_STATE",
    payload,
})

export const setARecipe = (payload) => ({ 
    type: "SET_A_RECIPE",
    payload,
})

export const setGlossary = (payload) => ({ 
    type: "SET_GLOSSARY",
    payload,
})

export const setHeaderGlossary = (payload) => ({ 
    type: "SET_HEADER_GLOSSARY",
    payload,
})

