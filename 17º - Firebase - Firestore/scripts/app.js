const config = {
  apiKey: "AIzaSyAdBSlzeZcCPOtCY3lX_gePLz9Ud6wgIwk",
  authDomain: "colegio-5503b.firebaseapp.com",
  projectId: "colegio-5503b",
  storageBucket: "colegio-5503b.appspot.com",
  messagingSenderId: "247959897539",
  appId: "1:247959897539:web:30b175e5d6f29142636976",
  measurementId: "G-6MJGDG0K4E"
};
firebase.initializeApp(config);

const TURMA = "turmaA";
let db = firebase.firestore();

// Lê Todos os dados de uma colecão
// db.collection("turmaA").get()
//     .then((snapshot) => {
//       snapshot.forEach((doc) => {
//         let aluno = doc.data();
//         console.log(aluno.nome);
//         // console.log(doc.data());
//       })
//     });

// db.collection("turmaA").onSnapshot((snapshot) => {
//       snapshot.forEach((doc) => {
//         let aluno = doc.data();
//         console.log(aluno.nome);
//         // console.log(doc.data());
//       })
//   });



// Lê 1 registro especifico apenas

// let docRef = db.collection("turmaA").doc("9wHzchJMnpqV5tePyLim");
// docRef.get().then((doc) => {
//   let aluno = doc.data();
//   console.log(aluno.nome);
// })

/* db.collection("turmaA").where("nome", "==", "Edi").get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        let aluno = doc.data();
        console.log(aluno.nome, aluno.nota);
      })
    }); */

/* // Insere Automaticamente o ID

db.collection(TURMA).add({
    nome: "Marcos",
    sobrenome: "Machado",
    nota: {
      nota1: 5.5,
      nota2: 2.3
    }
}).then((doc) => {
  console.log("Documento Recebido");
}).catch(err => {
  console.log(err);
}) */

// Inserindo o ID Manualmente

/* db.collection(TURMA).doc("AlunoNovo").set({
    nome: "Roberto",
    sobrenome: "Jeferson",
    nota: {
      nota1: 6.5,
      nota2: 7.6,
    }
}).then((doc) => {
  console.log("Documento Recebido");
}).catch(err => {
  console.log(err);
})

// Usando o UPDATE no array

db.collection(TURMA).doc("I46qzqVqsaQV1IqGlNSo").update(
    {
      advertencias: firebase.firestore.FieldValue.arrayRemove() // .increment, .arrayUnion
    }
).then(() => {
  console.log("Documento Recebido");
}).catch(err => {
  console.log(err);
}) */

/* db.collection(TURMA).doc("I46qzqVqsaQV1IqGlNSo").delete().then(() => {
console.log("Documento Recebido");
}).catch(err => {
console.log(err);
}) */

let newUserEmail = "novoteste@teste.com";
let newUserPassoword = "123abc";

let auth = firebase.auth();

auth.createUserWithEmailAndPassword(newUserEmail, newUserPassoword)
    .then(user => {
      console.log(user);
    }).catch(error => {
      console.log(error);
    })


    