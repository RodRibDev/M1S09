const express = require("express")

const app = express();

app.get("/", function(req, res){
    res.send("APP da aula 09")
})

app.get("/sobre", function(req, res){
    res.send("Este é meu APP da aula 09, criado nos exercícios da semanado Trello!")
})

app.get("/contato", function(req, res){
    res.send("Entre em contato para maiores informações")
})

app.listen(3000, function(){
    console.log("Minha APP está no ar!")
});
