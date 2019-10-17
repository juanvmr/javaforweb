var express = require("express")
var Item = require("../models/Item")
var router = express.Router()
router.use(express.json())

router.get("/:id", function(req, res){
    var id = req.params.id
    var limiter = req.params.id
    var filter = req.params.id

    if(!id){
        if(!limiter && !filter){
            res.status(400).send("Defina uma ID, ou um limitador e um filtro")
        }
        else{
            Item.find(function(err, item){
                if(!err){
                    res.status(200).send(item)
                }
                else{
                    console.error(err)
                    res.status(400).send("Erro ao encontrar item")
                }
            })
        }
    }
    else{
        Item.findById(id, function(err, item){
            if(!err){
                res.send(item)
            }
            else{
                console.log(err)
                res.status(400).send("Erro ao encontrar item")
            }
        })
    }

})

router.post("/add", function(req, res){
    var item = new Item({
        name : req.params.name
    })
    item.save(function(err, doc){
        if(!err){
            res.status(201).send(doc)
        }
        else{
            res.status(400).send("Erro ao cadastrar o item")
        }
    })
})

router.put("/update/:id", function(req, res){
    Item.findByIdAndUpdate(req.params.id, { name : req.params.name}, function(err, item){
        if(!err){
            console.log("Item atualizado")
            res.status(200).send(item)
        }
        else{
            res.status(400).send("Erro ao atualizar item")
        }
    })
})

router.delete("/delete/:id", function(req, res){
    Item.findByIdAndDelete(req.params.id, function(err){
        if(!err){
            res.status(200).send("Item removido")
        }
        else{
            res.status(400).send("Erro ao remover item")
        }
    })
})

module.exports = router