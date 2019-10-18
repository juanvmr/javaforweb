const mongoose = require("../data/index")

var lolSkin = new mongoose.Schema({
    name : String
})

var Skin = mongoose.model("Skin", lolSkin)

module.exports = Skin
