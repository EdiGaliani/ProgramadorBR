
function h1click(){
    console.log("Executando a Função")
}

function changeh1(input){
    let h1 = document.getElementsByTagName("h2")[0]
    h1.innerText = input.value;  
}

function hideH1(){
    let h1 = document.getElementsByTagName("h1")[3]
    h1.style.display = "none";
} 