import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCPwD0b91xCkXhiQ6RrHTnZEjTeobdAFYo",
    authDomain: "drive-clone-5d0c0.firebaseapp.com",
    projectId: "drive-clone-5d0c0",
    storageBucket: "drive-clone-5d0c0.appspot.com",
    messagingSenderId: "520255639018",
    appId: "1:520255639018:web:51d3273fc7a165bded7693"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,storage,auth,provider}
