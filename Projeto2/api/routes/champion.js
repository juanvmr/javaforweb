var express = require("express")
var Champion = require("../models/Champion")
var router = express.Router()
router.use(express.json())

router.get("/search", function(req, res){
    var filter = ({
        limiter : req.params.limiter,
        id : req.params.id,
        name : req.params.name
    })

    if(filter.id){
        Champion.findById(req.params.id, function(err, champion){
            if(!err){
                res.status(200).json(champion)
            }
            else{
                console.log(err)
                res.status(404).json("Erro ao encontrar campeão")
            }
        })
    }
    else{
        Champion.find(function(err, champion){
            if(!err){
                if(filter.limiter){
                    res.status(200).json(champion.slice(0, limiter))
                }
                else if(filter.name){
                    res.status(200).json(champion.filter(function(name){
                        return name === filter.name
                    }))
                }
                else{
                    res.status(200).json(champion)
                }
            }
            else{
                console.error(err)
                res.status(404).json("Erro ao encontrar campeão")
            }
        })
    }
})

router.post("/add", function(req, res){
    var champion = new Champion({
        name : req.params.name
    })
    champion.save(function(err, doc){
        if(!err){
            res.status(200).json("Campeão cadastrado")
        }
        else{
            res.status(400).json("Erro ao cadastrar o campeão")
        }
    })
})

router.put("/update/:id", function(req, res){
    Champion.findByIdAndUpdate(req.params.id, { name : req.params("name")}, function(err, champion){
        if(!err){
            console.log("Campeão atualizado")
            res.status(200).json(champion)
        }
        else{
            res.status(400).json("Erro ao atualizar campeão")
        }
    })
})

router.delete("/delete/:id", function(req, res){
    Champion.findByIdAndDelete(req.params.id, function(err){
        if(!err){
            res.status(200).json("Campeão removido")
        }
        else{
            res.status(400).json("Erro ao remover campeão")
        }
    })
})

module.exports = router
