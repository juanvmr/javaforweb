const express = require('express')
const router = express.Router()
const userRoute = require('./User')

router.use("/users", userRoute)

router.get("/", (req, res) => {
    res.send("Welcome to the API")
})

module.exports = router