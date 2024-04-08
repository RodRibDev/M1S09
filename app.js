const express = require("express")

const app = express();

const logMetodoURLHora = (req, res, next) => {
    const horaAtual = new Date().toISOString();
    console.log(
      `[${horaAtual}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`
      );
    next();
};
app.use(logMetodoURLHora)

app.get("/", function(req, res){
    res.send("APP da aula 09")
})

app.get("/sobre", function(req, res){
    res.send("Este é meu APP da aula 09, criado nos exercícios da semanado Trello!")
})

app.get("/contato", function(req, res){
    res.send("Entre em contato para maiores informações")
})

app.get("/produto/:id", function(req, res){
    const produtoId = req.params.id;

    res.send(`O produto ${produtoId} foi adicionado com sucesso`)
})

app.listen(3000, function(){
    console.log("Minha APP está no ar!")
});
