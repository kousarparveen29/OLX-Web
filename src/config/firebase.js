import * as firebase from "firebase";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyCCbZ11DeUsRidqTJHno0sLZ-EEU8VtEMI",
    authDomain: "olx-website-d27ed.firebaseapp.com",
    databaseURL: "https://olx-website-d27ed.firebaseio.com",
    projectId: "olx-website-d27ed",
    storageBucket: "olx-website-d27ed.appspot.com",
    messagingSenderId: "602229441950",
    appId: "1:602229441950:web:93cd86069e3fc9edba028f",
    measurementId: "G-V824J24D9M"
};


firebase.initializeApp(firebaseConfig);
export default firebase;