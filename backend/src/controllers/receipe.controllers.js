const Recipes = require("../models/recipes.model");

async function getRecipes(req, res) {
  const allRecepies = await Recipes.find();
  res.json(allRecepies);
}

async function addARecipe(req, res) {
  try {
    const { name, difficulty, time, steps, ingredients } = req.body;

    const newRecipe = Recipes({
      name,
      difficulty,
      time,
      steps,
      ingredients,
    });

    await newRecipe.save();

    res.json({ messaje: "recipe added" });
  } catch (error) {
    console.log(error);
  }
}

async function getAsingleRecipe(req, res) {
  try {
    const id = req.params.id;

    const aRecipe = await Recipes.findById(id);
    res.json(aRecipe);
  } catch (error) {
    console.log(error);
  }
}

async function updateARecipe(req, res) {
  try {
    const { name, difficulty, time, steps, ingredients } = req.body;

    await Recipes.findByIdAndUpdate(req.params.id, {
      name,
      difficulty,
      time,
      steps,
      ingredients,
    });

    res.json({ mensaje: "receta actualizada", idModificado: req.params.id });
  } catch (error) {
    console.log(error);
  }
}

async function deleteArecipe(req, res) {
  try {
    const id = req.params.id;
    await Recipes.findByIdAndDelete(id);

    res.json({ mensaje: "Receta eliminada" });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getRecipes,
  addARecipe,
  getAsingleRecipe,
  updateARecipe,
  deleteArecipe,
};
