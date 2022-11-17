const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

app.use("/meusite", express.static(path.join(__dirname, 'client')));

app.get("/", (req, res) => {
    // res.type("html");
    res.send("<h1>Hello World From GET</h1>");
})

app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
})