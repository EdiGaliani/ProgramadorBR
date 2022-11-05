const config = {
    apiKey: "AIzaSyD1qROMbMwGzKtfCexX4A44ySDNtqQH1Jw",
    authDomain: "testeregras-3a242.firebaseapp.com",
    projectId: "testeregras-3a242",
    storageBucket: "testeregras-3a242.appspot.com",
    messagingSenderId: "15405455420",
    appId: "1:15405455420:web:85592231f4e69b94e68b39"
};
  firebase.initializeApp(config);
  
const TURMA = "turmaA";
const LISTA = "lista";
let db = firebase.firestore();

function ler() {
    db.collection(LISTA).get().then(snapshot => {
        snapshot.forEach(item => {
            console.log(item.data());
        })
    }).catch(error => {
        console.log(error);
    })
}

function escrever() {
    db.collection(LISTA).add({ title: "Novo Objeto", numero: Math.random()})
    .then(doc => {
        console.log(doc)
    })
    .catch(error => {
        console.log(error);
    })
}

ler();

