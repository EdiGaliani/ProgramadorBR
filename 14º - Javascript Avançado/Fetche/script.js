

let url = "http://economia.awesomeapi.com.br/json/last/USD-BRL";



function converter() {
    let input = document.getElementById("valor");
    let valor = input.value;

    fetch(url)
    .then((res) => {
       return res.json();
    })
    .then((data) => {
        let rate = data.USDBRL.high;
        let resultado = `${valor} dolares = ${rate * valor} em Reais`
        document.getElementById("resultado").innerHTML = resultado;
    })
}