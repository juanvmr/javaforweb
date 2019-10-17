const mongoose = require("../data/index")

var lolPlayer = new mongoose.Schema({
    name : String
})

var Player = mongoose.model("Player", lolPlayer)

module.exports = Player