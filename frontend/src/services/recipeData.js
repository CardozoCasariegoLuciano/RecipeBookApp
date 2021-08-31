import axios from "axios";

const uri = "http://localhost:3001/api/recipes";

export async function getRecipies() {
  try {
    const allRecipes = await axios.get(uri);

    return allRecipes;
  } catch (error) {
    console.log(error);
  }
}

export async function getAsingleRecipie(id) {
  try {
    const aRecipes = await axios.get(uri + "/" + id);

    return aRecipes;
  } catch (error) {
    console.log(error);
  }
}

export async function addARecipie(data) {
  try {
    const { name, difficulty, time, steps, ingredients } = data;

    const newRecipe = {
      name,
      difficulty,
      time,
      steps,
      ingredients,
    };

    const aNewRecipe = await axios.post(uri, newRecipe);

    return aNewRecipe;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteARecipie(id) {
  try {
    await axios.delete(uri + "/" + id);
  } catch (error) {
    console.log(error);
  }
}


export async function updateARecipe(data, id) {
  try {
    const { name, difficulty, time, steps, ingredients } = data;

    const newRecipe = {
      name,
      difficulty,
      time,
      steps,
      ingredients,
    };

     const aNewRecipe =  await axios.put(uri +"/" + id, newRecipe);

     return aNewRecipe; 
  } catch (error) {
    console.log(error);
  }
}
