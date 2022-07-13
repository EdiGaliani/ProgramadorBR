
// ====================================================================
/* var calcMedia = function(){
    return (this.nota1 + this.nota2)/2
}

var turma = [
    {
        nome: "Igor",
        nota1: 9,
        nota2: 7,
        media: calcMedia
    },
    {
        nome: "joão",
        nota1: 8,
        nota2: 5,
        media: calcMedia
    }
]

var aluno = turma[1];
console.log(aluno);
console.log(aluno.media()); */

// =====================================================================

/* function criarAluno(nome, n1, n2){

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2)/2
        }
    }
}

var turma = [
    criarAluno("Igor", 9, 6),
    criarAluno("João", 7, 4),
    criarAluno("Pedro", 9, 9)
]

var aluno = turma[1];

turma.forEach(function(elemento){

    console.log(elemento);
})


console.log(aluno);
console.log(aluno.media()); 

for(i = 0; i < turma.length; i++){
    console.log(turma[i]); 
}

for(var aluno of turma){
    console.log(aluno.nome + " - " + aluno.media());
} */

// =======================================================================

function aluno(nome, n1, n2){

    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function(){
        return (this.nota1 + this.nota2) / 2;
    }
}

var a = new aluno("Igor", 9, 7);
var a = new aluno("Pedro", 8, 9);

console.log(a);