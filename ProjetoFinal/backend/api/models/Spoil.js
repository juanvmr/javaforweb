const mongoose = require("../data/index")

var lolSpoil = new mongoose.Schema({
    name : String,
    quantity : Number
})

var Spoil = mongoose.model("Spoil", lolSpoil)

module.exports = Spoil