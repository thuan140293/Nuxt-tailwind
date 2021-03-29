import firebase from 'firebase';

let app = null;

const firebaseConfig = {
    apiKey: "AIzaSyD2CY9UDXWdIoAVGgLmKsvXGvmKeT8WR-o",
    authDomain: "learningjs-d89aa.firebaseapp.com",
    databaseURL: "https://learningjs-d89aa.firebaseio.com",
    projectId: "learningjs-d89aa",
    storageBucket: "learningjs-d89aa.appspot.com",
    messagingSenderId: "198159944566",
    appId: "1:198159944566:web:3298ca93e766deec"
}

app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig)

export const db = app.database()