const mongoose = require("../data/index")

var lolItem = new mongoose.Schema({
    name : String
})

var Item = mongoose.model("Item", lolItem)

module.exports = Item