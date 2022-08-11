

var aluno = {
    nome: "Edi",  
    notas: [7.5, 6.5],

    media: function (n1, n2) {
        return (n1 + n2) / 2;
    }
}


console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

var aluno1 = {
    nome: "José",  
    notas: [9, 6.5],

    media: function (n1, n2) {
        return (n1 + n2) / 2;
    }
}

console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]));

// Forma otimizada

function calcMedia () {
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome: "Edi",  
    notas: [7.5, 6.5],

    media: calcMedia 
}

console.log(aluno.nome)
console.log(aluno.media());


var aluno1 = {
    nome: "José",  
    notas: [9, 6.5],

    media: calcMedia
}

console.log(aluno1.nome)
console.log(aluno1.media());
