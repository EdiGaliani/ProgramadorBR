// 1º Forma de se declarar um Array, menos usual

var alunos = new Array("Edi", "Melissa", "Miguel", "Paula");

console.log(alunos);
console.log("===========================================");

// 2º Forma de se declarar um Array, mais usual

var alunos = ["Edi", "Melissa", "Miguel", "Paula"];

console.log(alunos);
console.log("===========================================");

// Percorrendo o array alunos

for(var i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}
console.log("===========================================");


// Percorrendo o array alunos com in

for(var aluno in alunos){
    console.log(aluno);
}
console.log("===========================================");

// Percorrendo o array alunos com of

for(var aluno of alunos){
    console.log(aluno);
    document.write(aluno + "</br>");
}


