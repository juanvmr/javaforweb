var express = require("express")
var Spoil = require("../models/Spoil")
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
            Spoil.find(function(err, spoil){
                if(!err){
                    res.status(200).send(spoil)
                }
                else{
                    console.error(err)
                    res.status(400).send("Erro ao encontrar espólio")
                }
            })
        }
    }
    else{
        Spoil.findById(id, function(err, spoil){
            if(!err){
                res.send(spoil)
            }
            else{
                console.log(err)
                res.status(400).send("Erro ao encontrar espólio")
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
            res.status(201).send(doc)
        }
        else{
            res.status(400).send("Erro ao cadastrar o espólio")
        }
    })
})

router.put("/update/:id", function(req, res){
    Spoil.findByIdAndUpdate(req.params.id, { name : req.params.name, quantity : req.params.quantity}, function(err, spoil){
        if(!err){
            console.log("Espólio atualizado")
            res.status(200).send(spoil)
        }
        else{
            res.status(400).send("Erro ao atualizar espólio")
        }
    })
})

router.delete("/delete/:id", function(req, res){
    Spoil.findByIdAndDelete(req.params("id"), function(err){
        if(!err){
            res.status(200).send("Espólio removido")
        }
        else{
            res.status(400).send("Erro ao remover espólio")
        }
    })
})

module.exports = router