// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXeMiVFCBPQd_hbCfhvKxhS3_ms5fH9pI",
  authDomain: "theta-tau-mobile-app.firebaseapp.com",
  projectId: "theta-tau-mobile-app",
  storageBucket: "theta-tau-mobile-app.appspot.com",
  messagingSenderId: "260521525540",
  appId: "1:260521525540:web:3c8b8915071c1eb93af3b1",
  measurementId: "G-6ETHYY1GLG"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth }; 