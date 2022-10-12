
function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)
]

function idadeDaTurma(nomezao, aluno) {
    return nomezao + aluno.nome;
}

console.log(alunos.reduce(idadeDaTurma, "Alguma coisa"));


//-----------------------------------------------------------------//
 function isEven(x) {
    //console.log(x);
    return x % 2 === 0 ? true : false
 }

 let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

 const numbersReduce = numbers.reduce((previous, current) => previous + current);
 console.log(numbersReduce);
