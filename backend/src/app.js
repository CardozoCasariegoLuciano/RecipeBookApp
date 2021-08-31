const express = require("express")
const app = express()
const cors = require("cors")

//settings
app.set("port", process.env.PORT || 4000)

//middlewear
app.use(cors())
app.use(express.json())

//routes
app.use("/api/glossary", require("./routes/glossary.routes"))
app.use("/api/recipes", require("./routes/recipes.routes"))

module.exports = app

