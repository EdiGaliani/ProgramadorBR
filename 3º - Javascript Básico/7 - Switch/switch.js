var nota1 = 4.0;
var nota2 = 7.8;

var media = (nota1 + nota2 ) / 2;

var conceito = "";

if(media >= 8){
    conceito = "Ótimo";
}
else if (media >= 6.5){
    conceito = "Bom";
}
else {
    conceito = "Regular"
}

conceito = 5;
console.log("Sua média foi de " + media);

switch(conceito) {
    case "Ótimo":
        console.log("Parabéns");
        break;
    case "Bom":
        console.log("Você pode melhorar");
        break;
    case "Regular":
        console.log("Estude mais");
        break;
    default:
        console.log("Houve algum erro");
        break;
}


