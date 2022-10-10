

// function ola() {
//     console.log("Ola");
// }

// function tchau() {
//     console.log("Tchau");
// }

// function saudacao(s, nome) {
//     s();
//     console.log(nome);
// }

// saudacao(tchau, "Edi");

let usuarios = ["Adriano", "Marcia", "José"];

function inserirUsuario(nome, Callback) {
    setTimeout(() => {
        usuarios.push(nome);
        Callback();
    
    }, 1000);
}

function listarUsuarios() {
    console.log(usuarios);
}

inserirUsuario("Edi", listarUsuarios);

