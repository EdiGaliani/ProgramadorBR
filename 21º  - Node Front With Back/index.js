const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const posts = [
    {
        id: "scacavev",
        tittle: "Meu 1º Post",
        description: "fvbasfbafbafb"
    }, {
        id: "scacavev",
        tittle: "Meu 2º Post",
        description: "fvbasfbafbafb"
    }, {
        id: "scacavev",
        tittle: "Meu 3º Post",
        description: "fvbasfbafbafb"
    }
]

app.get("/all", (req, res) => {
    
    res.json(JSON.stringify(posts));
})

app.post("/new", (req, res) => {});




app.listen(PORT, () => {
    console.log("Server Running On Port:", PORT)
})