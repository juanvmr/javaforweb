const express = require('express')
const router = express.Router()
const User = require('../model/User')

router.get("/", (req, res) => {
    User.find({}, (err, doc) => {
        if (doc) {
            res.status(200).json(doc)
        } else {
            res.status(400).json({ error: err })
        }
    }) 
})

router.get("/:id", (req, res) => {
    var id = req.params.id
    User.findById(id, (err, doc) => {
        if (doc) {
            res.status(200).json(doc)
        } else {
            res.status(400).json({ error: err })
        }
    }) 
})

router.post("/", (req, res) => {
    var data = req.body
    var user = new User(data)
    user.save({}, (err, doc) => {
        if (doc) {
            res.status(200).json(doc)
        } else {
            res.status(400).json({ error: err })
        }
    })
})

router.put("/:id", (req, res) => {
    var id = req.params.id
    var data = req.body
    
    User.findByIdAndUpdate(id, data, (err, doc) => {
        if (doc) {
            res.status(200).json(doc)
        } else {
            res.status(400).json({ error: err })
        }
    })
})

router.delete("/:id", (req, res) => {
    var id = req.params.id

    User.findByIdAndDelete(id, (err, doc) => {
        if (doc) {
            res.status(200).json(doc)
        } else {
            res.status(400).json({ error: err })
        }
    })
})

module.exports = router