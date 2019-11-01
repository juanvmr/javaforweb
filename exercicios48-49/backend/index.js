const express = require('express')
const app = express()
const LISTEN_PORT = process.env.port || 4000
const routes = require('./src/routes/')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use("/api", routes)

app.listen(LISTEN_PORT, () => {
    console.log("Running on port " + LISTEN_PORT)
})