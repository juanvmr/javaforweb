var express = require("express")
var Player = require("../models/Player")
var router = express.Router()
router.use(express.json())

router.get("/:id", function(req, res){
    var id = req.params.id
    var limiter = req.params.limiter
    var filter = req.params.filter

    if(!id){
        if(!limiter && !filter){
            res.status(400).send("Defina uma ID, ou um limitador e um filtro")
        }
        else{
            Player.find(function(err, player){
                if(!err){
                    res.status(200).send(player)
                }
                else{
                    console.error(err)
                    res.status(400).send("Erro ao encontrar jogador")
                }
            })
        }
    }
    else{
        Player.findById(id, function(err, player){
            if(!err){
                res.send(player)
            }
            else{
                console.log(err)
                res.status(400).send("Erro ao encontrar jogador")
            }
        })
    }

})

router.post("/add", function(req, res){
    var player = new Player({
        name : req.params.name
    })
    player.save(function(err, doc){
        if(!err){
            res.status(201).send(doc)
        }
        else{
            res.status(400).send("Erro ao cadastrar o jogador")
        }
    })
})

router.put("/update/:id", function(req, res){
    Player.findByIdAndUpdate(req.params.id, { name : req.params.name}, function(err, player){
        if(!err){
            console.log("Jogador atualizado")
            res.status(200).send(player)
        }
        else{
            res.status(400).send("Erro ao atualizar jogador")
        }
    })
})

router.delete("/delete/:id", function(req, res){
    Player.findByIdAndDelete(req.params.id, function(err){
        if(!err){
            res.status(200).send("Jogador removido")
        }
        else{
            res.status(400).send("Erro ao remover jogador")
        }
    })
})

module.exports = router