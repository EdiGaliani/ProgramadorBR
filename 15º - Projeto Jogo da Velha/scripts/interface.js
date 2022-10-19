
document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    let squareClicked = event.target;
    let position = squareClicked.id;
    if(handleMove(position)) {
        let message = document.querySelector(".msg");
        if(playerTime == 0) {
           playerTime = "Jogador 1"; 
        }else{
            playerTime = "Jogador 2";
        }
        message.insertAdjacentHTML("afterend","Fim de Jogo - O Ganhador é o " + playerTime + "</br>");
    }
    
    updateSquares(position);
}

function updateSquares(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}

let reset = document.getElementById("reset");
reset.addEventListener('click', resetBoard);

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.innerHTML = "";
    })

}