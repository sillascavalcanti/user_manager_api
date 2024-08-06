const express = require('express')

const app = express();

app.get("/", function(req, res){
    res.send("Hello World")
})

app.get("/user", function(req, res){
    res.send({
        nome: "sillas"
    })
})

app.delete("/user", function(req, res){
    res.send({
        nome: "sillas DELETADO"
    })
})

app.listen(8080, function(){
    console.log("Server on")
})