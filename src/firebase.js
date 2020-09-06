import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyCNwpMZyeQnz8-aZ6uHZkWjrnOOJnRHRvk',
    authDomain: 'instagram-p21.firebaseapp.com',
    databaseURL: 'https://instagram-p21.firebaseio.com',
    projectId: 'instagram-p21',
    storageBucket: 'instagram-p21.appspot.com',
    messagingSenderId: '306564726222',
    appId: '1:306564726222:web:e350e424a2d6fd25a3ff9f',
    measurementId: 'G-393CNJ9VMC',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
