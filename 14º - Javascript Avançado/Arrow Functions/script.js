// Maneiras de Criar Funções

function dobro(x) {
    console.log(2 * x);
}
dobro(5);

// Função anônima
let dobro1 = function (x) {
    console.log(2 * x);
}
dobro1(15);

//Arrow Function
let dobro2 = (x) => {
    console.log(5 * x);
}
dobro2(15);

// Se a Função houver somente um argumento, não é necessário os parênteses
let dobro3 = x => {
    console.log(6 * x);
}
dobro3(15);

// Quando a Função Retorna um valor (return)

let dobro4 = x => 6 * x;

console.log(dobro4(6));

// As Arrows Functions são mais faceis de simples de se escrever, por outro lado elas não entendem
// o THIS e nem o BIND