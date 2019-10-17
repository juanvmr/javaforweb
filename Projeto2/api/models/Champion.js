const mongoose = require("../data/index")

var lolChampion = new mongoose.Schema({
    name : String
})

var Champion = mongoose.model("Champion", lolChampion)

module.exports = Champion