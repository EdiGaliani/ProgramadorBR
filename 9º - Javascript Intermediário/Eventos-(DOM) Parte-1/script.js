
function h1click(){
    console.log("Executando a Função")
}

function changeh1(input){
    let h1 = document.getElementsByTagName("h2")[0]
    h1.innerText = input.value;  
}

function hideInput(){
    let inp = document.getElementsByTagName("input")[0]
    inp.style.display = "inline";
}