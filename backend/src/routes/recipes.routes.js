const { Router } = require("express");
const router = Router();
const { getRecipes,addARecipe,getAsingleRecipe, updateARecipe, deleteArecipe} = require("../controllers/receipe.controllers");

router.route("/")
    .get(getRecipes)
    .post(addARecipe)

router.route("/:id")
    .get(getAsingleRecipe)
    .delete(deleteArecipe)
    .put(updateARecipe)

module.exports = router;
