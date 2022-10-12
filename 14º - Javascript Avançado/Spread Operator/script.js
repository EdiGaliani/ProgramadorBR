
var pessoa = {
    name: "josé",
    idade: 32
}

var contato = {
    telefone: 25445874,
    email: "eu@eu.com"
}

var copia = {...pessoa, cidade: "Rio Claro", ...contato}
copia.idade = 39;
console.log(copia);