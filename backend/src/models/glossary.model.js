const {Schema, model} = require("mongoose")

const glossarySchema = new Schema({

    title: String,
    description: String

},{
    timestamps: true
})

module.exports = model("Glossary", glossarySchema )