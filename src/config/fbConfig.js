import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAgrhJCaqxjf9JqtY4sXaI9m0GjbzcVBUo",
    authDomain: "todosies-web.firebaseapp.com",
    databaseURL: "https://todosies-web.firebaseio.com",
    projectId: "todosies-web",
    storageBucket: "todosies-web.appspot.com",
    messagingSenderId: "257773271607",
    appId: "1:257773271607:web:6fe83ae00d0f1a59b49db2",
    measurementId: "G-80JJ3YGN8V"
  };

  firebase.initializeApp(config);

  
  export default firebase;