import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: 'AIzaSyAr7dYXKNUBLuKzKFwWpMEGPBo25VXkNIc',
  authDomain: 'mytodolistpage.firebaseapp.com',
  databaseURL: 'https://mytodolistpage.firebaseio.com',
  projectId: 'mytodolistpage',
  storageBucket: 'mytodolistpage.appspot.com',
  messagingSenderId: '916964527898',
  appId: '1:916964527898:web:82ebae88ba1c330ae5a6a3'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebaseApp.auth()
const firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
