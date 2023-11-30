require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

const port = process.env.PORT || 3000
require("./routes")(app);

app.listen(port)