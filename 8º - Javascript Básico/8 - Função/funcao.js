

function media(n1, n2) {
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2 ) / 2;
    // console.log(media);

    return media;

}

var resultado1 = media(6, 7);
var resultado2 = media(8, 7);

console.log(resultado1 + " E " + resultado2);


// Função anônima

var media2 = function(n3, n4){
    return (n3 + n4) / 2;
}

var m = media(5, 6);

console.log(m);