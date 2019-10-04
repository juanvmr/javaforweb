var express = require("express")
var app = express()
app.use(express.json())

app.get("/gerador", function(req, res){
        var String
        var body = req.body
        res.send(String.concat(body.nome, body.sobrenome, "é um(a) futebolista brasileiro(a) de ", body.idade, " anos que atua como ", body.posicao, ". Atualmente joga no ", body.clube, "."))
})

app.listen(8080, ()=>{
        console.log("Escutando na porta 8080")
})
