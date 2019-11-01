const mongoose = require('mongoose')
const url = "mongodb+srv://unesc:JHE2tPG6QGwcsMGQ@cluster0-l4dgs.gcp.mongodb.net/unesc?retryWrites=true&w=majority"
const connection = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })

connection.then(() => {
    console.log("MongoDB connection estabilished!")
})

connection.catch((reason) => {
    console.error("MongoDB connection error!\n" + reason)
})

module.exports = mongoose