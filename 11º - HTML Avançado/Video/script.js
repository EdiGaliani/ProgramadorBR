

let video = document.getElementById("video1");

function retroceder() {
    video.currentTime -= 5;
}

function avancar() {
    video.currentTime += 5;
}

function diminuir() {
    video.playbackRate -= 0.1;
}

function aumentar() {
    video.playbackRate += 0.1;
}

function play() {
    document.getElementById("video1").play();
}
 
function stop() {
    video.pause();
    video.currentTime = 0;
 }