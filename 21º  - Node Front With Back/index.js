const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser'); //Deprecated
const posts = require('./model/posts');
const app = express();



app.get("/all", (req, res) => {
    
    res.json(JSON.stringify(posts.getAll()));
})

app.post("/new", bodyParser.json(), (req, res) => {
    
    let title = req.body.title;
    let description = req.body.description;
    console.log(typeof title);
    posts.newPost(title, description);
    
    res.send("Post Adicionado");
})

app.listen(PORT, () => {
    console.log("Server Running On Port:", PORT)
})
