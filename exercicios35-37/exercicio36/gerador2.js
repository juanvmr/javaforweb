var express = require("express")
var app = express()
express.json()

app.set('json replacer', function(key, value){
    if(key == "idade"){
        if(value>17 && value<23){
            return "novato"
        }
        else if(value>22 && value<29){
            return "profissional"
        }
        else if(value>28 && value<35){
            return "veterano"
        }
        else if(value>34 && value<41){
            return "master"
        }
        else{
            return "não se enquadra"
        }
    }
})

app.get("/jogador", function(req, res){
    res.json(req)
})

app.listen(8080, ()=>{
    console.log("Escutando na porta 8080")
})