import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJZTbwxbrXBhITUh9OBfBQ4yPycpiREsg",
    authDomain: "facebook-clone-6bb15.firebaseapp.com",
    projectId: "facebook-clone-6bb15",
    storageBucket: "facebook-clone-6bb15.appspot.com",
    messagingSenderId: "571254257621",
    appId: "1:571254257621:web:08a84dfeb3412297992f5c",
    measurementId: "G-QPTCV4J0S7"
  };

  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};
export default db;