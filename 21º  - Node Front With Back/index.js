const PORT = 3000;
const express = require('express');
// const bodyParser = require('body-parser'); //Deprecated
const app = express();

const posts = [
    {
        id: "scacavev",
        tittle: "Meu 1º Post",
        description: "fvbasfbafbafb"
    }
]

app.get("/all", (req, res) => {
    
    res.json(JSON.stringify(posts));
})

app.post("/new", express.json(), (req, res) => {
    let id = generationID();
    let tittle = req.body.tittle;
    let description = req.body.description;

    posts.push({id, tittle, description});
    res.send("Post Adicionado");
});

app.listen(PORT, () => {
    console.log("Server Running On Port:", PORT)
})

function generationID() {
    return Math.random().toString(36).substring(2, 9);
}