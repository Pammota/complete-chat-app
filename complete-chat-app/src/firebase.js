import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBIMirFy2D4EaGXRscFGne4cawcx6UBtrs",
    authDomain: "complete-chat-app-50ce2.firebaseapp.com",
    projectId: "complete-chat-app-50ce2",
    storageBucket: "complete-chat-app-50ce2.appspot.com",
    messagingSenderId: "930365154372",
    appId: "1:930365154372:web:5802424ae11de39e840811"
}).auth();
///we are exporting our auth created by firebase