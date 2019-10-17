var express = require("express")
var app = express()
const routes = {
    player : require("./api/routes/player"),
    champion : require("./api/routes/champion"),
    item : require("./api/routes/item"),
    skin : require("./api/routes/skin"),
    spoil : require("./api/routes/spoil")
}

app.use("/player", routes.player)
app.use("/champion", routes.champion)
app.use("/item", routes.item)
app.use("/skin", routes.skin)
app.use("/spoil", routes.spoil)

app.use("/", function(req, res, next){
    if(req.params.user === "admin"){
        if(req.params.pwd === "admin"){
            console.log("Usuário logado")
            next()
        }
        else{
            res.status(401).send("Usuário ou senha incorretos")
        }
    }
    else{
        res.status(401).send("Usuário ou senha incorretos")
    }
})
