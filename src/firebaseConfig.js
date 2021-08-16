import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7YD2RpxCienamDe2GWnaB97vW71ZWgco",
    authDomain: "nuxt-app-cf295.firebaseapp.com",
    projectId: "nuxt-app-cf295",
    storageBucket: "nuxt-app-cf295.appspot.com",
    messagingSenderId: "377002656604",
    appId: "1:377002656604:web:b7c103dc45dc2191d8b799",
    measurementId: "G-4NWQJJ5MSM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const sb = firebaseApp.firestore();

export default {
    sb
};