
// 1º Forma de de mudar o atributo

let image = document.getElementById("like");

image.addEventListener("click", function () {

    image.src = "./image/circle_red.png";

})

// 2º Forma de de mudar o atributo

let image1 = document.getElementById("like1");

image1.addEventListener("click", function () {
    
    image1.setAttribute("src", "./image/circle_red.png");

})

let lista = document.getElementById("lista");

let num = parseInt(lista.getAttribute("num"));

let conteudo = "";

for(let i = 0; i < num; i++) {
    conteudo += "<li>" + i + "</li>";
}

lista.innerHTML = conteudo;