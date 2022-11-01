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

let db = firebase.firestore();

// Lê Todos os dados de uma colecão
db.collection("turmaA").get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        let aluno = doc.data();
        console.log(aluno.nome);
        // console.log(doc.data());
      })
    });

// Lê 1 registro especifico apenas

let docRef = db.collection("turmaA").doc("9wHzchJMnpqV5tePyLim");
docRef.get().then((doc) => {
  let aluno = doc.data();
  console.log(aluno.nome);
})
    