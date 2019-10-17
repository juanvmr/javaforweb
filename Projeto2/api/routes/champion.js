var express = require("express")
var Champion = require("../models/Champion")
var router = express.Router()
router.use(express.json())

router.get("/search/:id", function(req, res){
    var id = req.params.id
    var limiter = req.params.limiter
    var filter = req.params.filter

    if(!id){
        if(!limiter && !filter){
            res.status(404).send("Defina uma ID, ou um limitador e um filtro")
        }
        else{
            Champion.find(function(err, champion){
                if(!err){
                    res.status(200).send(champion)
                }
                else{
                    console.error(err)
                    res.status(404).send("Erro ao encontrar campeão")
                }
            })
        }
    }
    else{
        Champion.findById(id, function(err, champion){
            if(!err){
                res.send(champion)
            }
            else{
                console.log(err)
                res.status(404).send("Erro ao encontrar campeão")
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
            res.status(200).send("Campeão cadastrado")
        }
        else{
            res.status(400).send("Erro ao cadastrar o campeão")
        }
    })
})

router.put("/update/:id", function(req, res){
    Champion.findByIdAndUpdate(req.params.id, { name : req.params("name")}, function(err, champion){
        if(!err){
            console.log("Campeão atualizado")
            res.status(200).send(champion)
        }
        else{
            res.status(400).send("Erro ao atualizar campeão")
        }
    })
})

router.delete("/delete/:id", function(req, res){
    Champion.findByIdAndDelete(req.params.id, function(err){
        if(!err){
            res.status(200).send("Campeão removido")
        }
        else{
            res.status(400).send("Erro ao remover campeão")
        }
    })
})

module.exports = router
