const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let alunos = [
    {id: 0, nome: "José"},
    {id: 1, nome: "Maria"},
    {id: 2, nome: "Joao"},
    {id: 3, nome: "Marcos"}

]

app.use(bodyParser.urlencoded());

app.get("/", (req, res) => {
    res.send("Hello Word");
})

app.get("/alunos", (req, res) => {
    res.json(JSON.stringify(alunos))
})

app.get("/aluno", (req, res) => {
    console.log(req.body);
    let aluno = alunos[req.body.id];
    res.send(aluno);
})

app.get("/aluno/:id", (req, res) => {
    console.log(req.params.id);
    let aluno = alunos[req.params.id];
    res.send(aluno);
})

app.listen(3000, () => {
    console.log("Server Running On Port:3000");
})

















































// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const app = express();
// const PORT = 5000;

// app.use("/meusite", express.static(path.join(__dirname, 'client')));

// let consoleMethod = (req, res, next) => {
//     console.log(req.method);
//     next();
// } 

// let hello = (req, res) => {
//     res.send("Hello World");
// }

// app.use("/", bodyParser.json())
// app.use("/", consoleMethod)
// app.get("/", hello);

// app.post("/", hello);

//MiddleWare
// let hello = (req, res) => {
//     res.send("Hello World");
// }

// app.get("/", consoleMethod, hello);

// app.post("/", consoleMethod, hello);

// app.get("/", (req, res) => {
//     res.send("<h1>Hello World From GET</h1>");
// })

// app.post("/", (req, res) => {
//     res.send("<h1>Hello World From POST</h1>");
// })

// app.put("/", (req, res) => {
//     res.send("<h1>Hello World From PUT</h1>");
// })

// app.delete("/", (req, res) => {
//     res.send("<h1>Hello World From DELETE</h1>");
// })

// app.listen(PORT, () => {
//     console.log(`Server Running on Port: ${PORT}`);
// })