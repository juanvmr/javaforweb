var express = require("express")
var Player = require("../models/Player")
var router = express.Router()
router.use(express.json())

router.get("/search", function(req, res){
    var filter = ({
        limiter : req.params.limiter,
        id : req.params.id,
        name : req.params.name
    })

    if(filter.id){
        Player.findById(req.params.id, function(err, player){
            if(!err){
                res.status(200).json(player)
            }
            else{
                console.log(err)
                res.status(404).json("Erro ao encontrar jogador")
            }
        })
    }
    else{
        Player.find(function(err, player){
            if(!err){
                if(filter.limiter){
                    res.status(200).json(player.slice(0, limiter))
                }
                else if(filter.name){
                    res.status(200).json(player.filter(function(name){
                        return name === filter.name
                    }))
                }
                else{
                    res.status(200).json(player)
                }
            }
            else{
                console.error(err)
                res.status(404).json("Erro ao encontrar jogador")
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
            res.status(201).json(doc)
        }
        else{
            res.status(400).json("Erro ao cadastrar o jogador")
        }
    })
})

router.put("/update/:id", function(req, res){
    Player.findByIdAndUpdate(req.params.id, { name : req.params.name}, function(err, player){
        if(!err){
            console.log("Jogador atualizado")
            res.status(200).json(player)
        }
        else{
            res.status(400).json("Erro ao atualizar jogador")
        }
    })
})

router.delete("/delete/:id", function(req, res){
    Player.findByIdAndDelete(req.params.id, function(err){
        if(!err){
            res.status(200).json("Jogador removido")
        }
        else{
            res.status(400).json("Erro ao remover jogador")
        }
    })
})

module.exports = router