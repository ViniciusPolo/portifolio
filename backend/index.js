const express = require("express")
const dbConnection = require('./config/db')
const app = express()
dbConnection()

app.use(express.json)


app.get("/", (req, res) => res.send("Hello World!"))
app.listen(3002, () => console.log("Example app listening on port 3002!"))

