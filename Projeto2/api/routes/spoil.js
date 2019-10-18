var express = require("express")
var Spoil = require("../models/Spoil")
var router = express.Router()
router.use(express.json())

router.get("/search", function(req, res){
    var filter = ({
        limiter : req.params.limiter,
        id : req.params.id,
        name : req.params.name,
        quantity : req.params.quantity
    })

    if(filter.id){
        Spoil.findById(req.params.id, function(err, spoil){
            if(!err){
                res.status(200).json(spoil)
            }
            else{
                console.log(err)
                res.status(404).json("Erro ao encontrar espólio")
            }
        })
    }
    else{
        Spoil.find(function(err, spoil){
            if(!err){
                if(filter.limiter){
                    res.status(200).json(spoil.slice(0, limiter))
                }
                else if(filter.name){
                    res.status(200).json(spoil.filter(function(name){
                        return name === filter.name
                    }))
                }
                else if(filter.quantity){
                    res.status(200).json(spoil.filter(function(quantity){
                        return quantity === filter.quantity
                    }))
                }
                else{
                    res.status(200).json(spoil)
                }
            }
            else{
                console.error(err)
                res.status(404).json("Erro ao encontrar espólio")
            }
        })
    }
})

router.post("/add", function(req, res){
    var spoil = new Spoil({
        name : req.params.name,
        quantity : req.params.quantity
    })
    spoil.save(function(err, doc){
        if(!err){
            res.status(201).json(doc)
        }
        else{
            res.status(400).json("Erro ao cadastrar o espólio")
        }
    })
})

router.put("/update/:id", function(req, res){
    Spoil.findByIdAndUpdate(req.params.id, { name : req.params.name, quantity : req.params.quantity}, function(err, spoil){
        if(!err){
            console.log("Espólio atualizado")
            res.status(200).json(spoil)
        }
        else{
            res.status(400).json("Erro ao atualizar espólio")
        }
    })
})

router.delete("/delete/:id", function(req, res){
    Spoil.findByIdAndDelete(req.params("id"), function(err){
        if(!err){
            res.status(200).json("Espólio removido")
        }
        else{
            res.status(400).json("Erro ao remover espólio")
        }
    })
})

module.exports = router