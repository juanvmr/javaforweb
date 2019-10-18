var express = require("express")
var Skin = require("../models/Skin")
var router = express.Router()
router.use(express.json())

router.get("/search", function(req, res){
    var filter = ({
        limiter : req.params.limiter,
        id : req.params.id,
        name : req.params.name
    })

    if(filter.id){
        Skin.findById(filter.id, function(err, skin){
            if(!err){
                res.status(200).json(skin)
            }
            else{
                console.log(err)
                res.status(404).json("Erro ao encontrar skin")
            }
        })
    }
    else{
        Skin.find(function(err, skin){
            if(!err){
                if(filter.limiter){
                    res.status(200).json(skin.slice(0, limiter))
                }
                else if(filter.name){
                    res.status(200).json(skin.filter(function(name){
                        return name === filter.name
                    }))
                }
                else{
                    res.status(200).json(skin)
                }
            }
            else{
                console.error(err)
                res.status(404).json("Erro ao encontrar skin")
            }
        })
    }
})

router.post("/add", function(req, res){
    var skin = new Skin({
        name : req.params.name
    })
    skin.save(function(err, doc){
        if(!err){
            res.status(201).json(doc)
        }
        else{
            res.status(400).json("Erro ao cadastrar skin")
        }
    })
})

router.put("/update/:id", function(req, res){
    Skin.findByIdAndUpdate(req.params.id, { name : req.params.name}, function(err, skin){
        if(!err){
            console.log("Skin atualizado")
            res.status(200).json(skin)
        }
        else{
            res.status(400).json("Erro ao atualizar skin")
        }
    })
})

router.delete("/delete/:id", function(req, res){
    Skin.findByIdAndDelete(req.params.id, function(err){
        if(!err){
            res.status(200).json("Skin removido")
        }
        else{
            res.status(400).json("Erro ao remover skin")
        }
    })
})

module.exports = router
