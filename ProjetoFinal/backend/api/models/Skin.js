const mongoose = require("../data/index")
const champion = require("../models/Champion")

var lolSkin = new mongoose.Schema({
    name : String
})

var Skin = mongoose.model("Skin", lolSkin)

module.exports = Skin