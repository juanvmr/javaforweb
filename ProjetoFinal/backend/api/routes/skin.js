var express = require("express")
var Skin = require("../models/Skin")
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
            Skin.find(function(err, skin){
                if(!err){
                    res.status(200).send(skin)
                }
                else{
                    console.error(err)
                    res.status(400).send("Erro ao encontrar skin")
                }
            })
        }
    }
    else{
        Skin.findById(id, function(err, skin){
            if(!err){
                res.send(skin)
            }
            else{
                console.log(err)
                res.status(400).send("Erro ao encontrar skin")
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
            res.status(201).send(doc)
        }
        else{
            res.status(400).send("Erro ao cadastrar o skin")
        }
    })
})

router.put("/update/:id", function(req, res){
    Skin.findByIdAndUpdate(req.params.id, { name : req.params.name}, function(err, skin){
        if(!err){
            console.log("Skin atualizado")
            res.status(200).send(skin)
        }
        else{
            res.status(400).send("Erro ao atualizar skin")
        }
    })
})

router.delete("/delete/:id", function(req, res){
    Skin.findByIdAndDelete(req.params.id, function(err){
        if(!err){
            res.status(200).send("Skin removido")
        }
        else{
            res.status(400).send("Erro ao remover skin")
        }
    })
})

module.exports = router