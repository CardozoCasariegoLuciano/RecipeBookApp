const {Schema, model} = require("mongoose")

const recipesSchemas = new Schema({
    name: String,
    difficulty: String,
    time: String,
    steps: String,
    ingredients: String

},{
    timestamps: true
})

module.exports = model("Recipes" , recipesSchemas)