import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDok-J8KICQp1qcLwrlg1s5MBNVedzMPeI",
    authDomain: "facebook-clone-tutorial.firebaseapp.com",
    databaseURL: "https://facebook-clone-tutorial.firebaseio.com",
    projectId: "facebook-clone-tutorial",
    storageBucket: "facebook-clone-tutorial.appspot.com",
    messagingSenderId: "915749986943",
    appId: "1:915749986943:web:7bb10a0ad443f14641154a",
    measurementId: "G-LEYTYB34LS"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;