const PORT = 3000;
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("user", {name: "Edi Galiano", phone: "(17)99855-8857"})
})













// let user = {
//     id: 0,
//     name: "Edi",
//     phone: "(18)235-8554"

// }

// function render(data, obj) {
//     for(let key in obj) {
//         data = data.replace(`{{{${key}}}}`, obj[key]);
//     }
//     return data;
// }

// app.get("/", (req, res) => {
//     fs.readFile('./templates/user.html', 'UTF8', (err, data) => {
//         if(!err) {
//             console.log(data, user);
//             res.send(render(data, user));
//         }
//     })
// })


app.listen(PORT, () => {console.log("Server Running on Port:", PORT)})