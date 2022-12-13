const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;

mongoose.set('strictQuery', true)

const linkSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    click: Number
})

const Link = mongoose.model('Link', linkSchema);

let link = new Link({
    title: "Youtube",
    description: "Link para o Youtube",
    url: "https://youtube.com",
    click: 0
})

link.save().then(doc => {
    console.log(doc);
}).catch(err => {
    console.log(err);
});

// // 1º Maneira de se connectar
// mongoose.connect('mongodb://127.0.0.1:27017/blog').then(db => {
//     console.log(db);
// }).catch(err => {
//     console.log(err);
// });

// 2º Maneira de se Conectar
mongoose.connect('mongodb://127.0.0.1:27017/links');

let db = mongoose.connection;

db.on("error", () => { console.log("Houve um erro") });
db.once("open", () => { console.log("Banco carregado") });

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(PORT, () => {console.log("Server Running on Port", PORT)});