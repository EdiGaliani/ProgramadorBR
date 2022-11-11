let fs = require('fs');

let args = process.argv.slice(2);
let fileName = args[0];

fs.readFile(fileName, 'UTF8', (error, data) => {
    if(error) throw error;
    fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (error) => {
        if(error) throw error;
        console.log("Arquivo gerado com sucesso");
    })
})

// Criando o arquivo
/* fs.writeFile('teste.txt', 'Hello World', function(error) {
    if(error) { throw error };
    console.log("Arquivo criado com sucesso");
}) */

// Acrescentando ao arquivo
/* fs.appendFile('teste.txt', '- Como vc está?', function(error) {
        if(error) { throw error };
        console.log("Arquivo atualizado com sucesso");
    }) */

// Apagando o arquivo
/* fs.unlink('teste.txt', function(error) {
        if(error) { throw error };
        console.log("Arquivo apagado com sucesso");
    }) */

// Renomeando o arquivo
/* fs.rename('teste.txt', 'NovoNome.txt', function(error) {
        if(error) { throw error };
        console.log("Arquivo renomeado com sucesso");
    }) */

// Lendo o arquivo
/* fs.readFile('NovoNome.txt', 'UTF8', function(error, data) {
        if(error) { throw error };
        console.log(data);
    }) */