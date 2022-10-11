
function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)
]

/* for(let aluno of alunos){
    if(aluno.idade > 30){
        console.log(aluno)
    }
} */

function temMenosde30(aluno) {
    return aluno.idade < 30
}

function temMaisde30(aluno) {
    return aluno.idade > 30
}

let filtroIdade = alunos.filter(temMaisde30)

console.log(filtroIdade)




 function isEven(x) {
    //console.log(x);
    return x % 2 === 0 ? true : false
 }

 let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

 const evenNumbers = numbers.filter(isEven);
 console.log(evenNumbers);
