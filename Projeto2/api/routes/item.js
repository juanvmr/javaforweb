var express = require("express")
var Item = require("../models/Item")
var router = express.Router()
router.use(express.json())

router.get("/search", function(req, res){
    var filter = ({
        limiter : req.params.limiter,
        id : req.params.id,
        name : req.params.name
    })

    if(filter.id){
        Item.findById(req.params.id, function(err, item){
            if(!err){
                res.status(200).json(item)
            }
            else{
                console.log(err)
                res.status(404).json("Erro ao encontrar item")
            }
        })
    }
    else{
        Item.find(function(err, item){
            if(!err){
                if(filter.limiter){
                    res.status(200).json(item.slice(0, limiter))
                }
                else if(filter.name){
                    res.status(200).json(item.filter(function(name){
                        return name === filter.name
                    }))
                }
                else{
                    res.status(200).json(item)
                }
            }
            else{
                console.error(err)
                res.status(404).json("Erro ao encontrar item")
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
            res.status(201).json(doc)
        }
        else{
            res.status(400).json("Erro ao cadastrar o item")
        }
    })
})

router.put("/update/:id", function(req, res){
    Item.findByIdAndUpdate(req.params.id, { name : req.params.name}, function(err, item){
        if(!err){
            console.log("Item atualizado")
            res.status(200).json(item)
        }
        else{
            res.status(400).json("Erro ao atualizar item")
        }
    })
})

router.delete("/delete/:id", function(req, res){
    Item.findByIdAndDelete(req.params.id, function(err){
        if(!err){
            res.status(200).json("Item removido")
        }
        else{
            res.status(400).json("Erro ao remover item")
        }
    })
})

module.exports = router