var idade = 18;

// Somente uma linha de comando após condicional
// Não é necessario abrir o bloco com chaves "{}"

if (idade >= 18)
    console.log("Pode");
else
    console.log("Não pode");




// Quando houver mais de uma linha após condicional
// É necessario abrir o bloco com chaves "{}"
    
if (idade >= 35){
    console.log("Pode");
    console.log("Qual o seu pedido?");
}
else if (idade >= 18){
    console.log("Pode");
    console.log("Mostre a identidade");
}
else{
    console.log("Não pode");
    console.log("Volte futuramente");
}

