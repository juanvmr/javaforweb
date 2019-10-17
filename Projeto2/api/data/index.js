const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/LoLNodeApi", {useNewUrlParser : true})
mongoose.connection.on('connected', function(){
    console.log("Conectado no MongoDB")
})

module.exports = mongoose