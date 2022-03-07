import firebase from 'firebase'

import 'firebase/auth'

export const auth = firebase
    .initializeApp({
        apiKey: 'AIzaSyBLn9_-KMshtOBKG4JBzao71Dwlw3iKoL0',
        authDomain: 'leadchat-3807c.firebaseapp.com',
        projectId: 'leadchat-3807c',
        storageBucket: 'leadchat-3807c.appspot.com',
        messagingSenderId: '522552803721',
        appId: '1:522552803721:web:d24f185ff5fa3191e0e158',
    })
    .auth()
