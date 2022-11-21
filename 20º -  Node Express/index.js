const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use("/meusite", express.static(path.join(__dirname, 'client')));

let consoleMethod = (req, res, next) => {
    console.log(req.method);
    next();
} 

let hello = (req, res) => {
    res.send("Hello World");
}

app.use("/", bodyParser.json())
app.use("/", consoleMethod)
app.get("/", hello);

app.post("/", hello);

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

app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
})