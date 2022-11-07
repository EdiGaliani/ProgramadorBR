const firebaseConfig = {
  apiKey: "AIzaSyCfbpsgqMgYtD-fX6vHlzEBxECx3wbxj8E",
  authDomain: "cursodevweb-ad7f4.firebaseapp.com",
  projectId: "cursodevweb-ad7f4",
  storageBucket: "cursodevweb-ad7f4.appspot.com",
  messagingSenderId: "718380242886",
  appId: "1:718380242886:web:c77a554a691e6b86e184c7"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

const ref = storage.ref("/images/WhatsApp Image 2022-10-11 at 16.18.09.jpeg");

ref.root.listAll().then(res => {
  console.log(res);
})






// const fileRef = ref.child("WhatsApp Image 2022-10-11 at 16.18.09.jpeg");
// fileRef.getDownloadURL().then(url => { console.log(url)} )

// ref.listAll().then(res => {
//   res.items[0].getDownloadURL().then(url => {
//     console.log(url);
//   });
// })

// ref.listAll().then(res => {
//   console.log(res);
//   res.items[0].listAll().then(res => {
//     console.log(res);
//   })
// })