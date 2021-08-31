const mongoose = require("mongoose")

const dbhost = process.env.MONGO_HOST || "localhost"
const dbport = process.env.MONGO_PORT || 27017
const dbname = process.env.MONGO_DB_NAME || "baseDeDatosSinNombre"

const URI = `mongodb://${dbhost}:${dbport}/${dbname}`

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

mongoose.connection.on("open", () => console.log("base de datos conectada y funcionando en el puerto 27017"))