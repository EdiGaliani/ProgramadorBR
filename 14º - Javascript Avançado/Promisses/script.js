

let usuarios = ["Adriano", "Marcia", "José"];

function inserirUsuario(nome) {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            usuarios.push(nome);
            let error = true;
            if(!error) {
                resolve();
            }else {
                reject({msg: "Mensagem de erro"})
            }
            
        }, 1000);
    }) 
    return promise;
    
}

function listarUsuarios() {
    console.log(usuarios);
}

inserirUsuario("Edi")
    .then(listarUsuarios)
    .catch((error) => {
        console.log(error)
    });

