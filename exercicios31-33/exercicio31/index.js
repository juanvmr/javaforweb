var express = require("express");
var fileManager = require("fs");
var app = express();

app.use("/", express.static("/"));

app.listen(8080, ()=>{
    console.log("Listening HTTP on index");
});

app.get("/", (req, res)=>{
    fileManager.writeFileSync("lista.txt", req.query.itemName, {flag:"a"});
    res.redirect(__dirname + "\\index.html");
    res.end();
});