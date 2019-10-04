var express = require("express")
var fileManager = require("fs")
var app = express()
express.json()

app.post("/jogador", function(req, res, err){
    if(!err){
        fileManager.writeFileSync("gerador_jogador.json", JSON.stringify(req.body), {encoding:"utf8", flag:"a"})
        res.statusCode("200").JSON({"response":"Gravado com sucesso"})
    }
    else{
        console.log(err)
    }
})