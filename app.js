const express = require("express")

const app = express();

let users = [];

app.use(express.json());

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

app.get("/foto", function(req, res){
    res.sendFile(__dirname + "/public/images/foto.jpeg")
})

app.post('/users', (req, res) => {
    const newUser = req.body; 

    newUser.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    users.push(newUser);

    res.status(201).json(newUser);
});

app.get('/users', (req, res) => {
    res.json(users);
})

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    const user = users.find(user => user.id === userId);

    if (!user) {
       
        res.status(404).send('Usuário não encontrado.');
    } else {

        res.json(user);
    }
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index === -1) {
        res.status(404).send('Usuário não encontrado.');
        return;
    }
    users[index] = { ...users[index], ...newData };
    res.status(200).json({
        message: 'Dados do usuário atualizados com sucesso.',
        updatedUser: users[index]
    });

});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    const index = users.findIndex(user => user.id === parseInt(id));

    if (index === -1) {

        return res.status(404).send('Usuário não encontrado.');
    }

    const deletedUser = users.splice(index, 1)[0];

    res.status(200).json({
        mensagem: 'Usuário excluído com sucesso.',
        usuarioDeletado: deletedUser
    });
});



app.listen(3000, function(){
    console.log("Minha APP está no ar!")
});
