//Firebase modules used in this project.
import firebase from 'firebase/app'

import 'firebase/database'

import 'firebase/storage'

//Initialize Firebase application.
firebase.initializeApp({
    apiKey: "AIzaSyBmCcfVtLaeNBgHPoRcQGDaDsuMUFQ7lq0",
    authDomain: "chat-58e6d.firebaseapp.com",
    databaseURL: "https://chat-58e6d.firebaseio.com",
    projectId: "chat-58e6d",
    storageBucket: "chat-58e6d.appspot.com",
    messagingSenderId: "220035118822",
    appId: "1:220035118822:web:f619bddad8dd534bf6ed27",
    
})

//Export Firebase and Realtime Database reference to use throughout this project.
export default firebase
export const database = firebase.database()
export const storage = firebase.storage()