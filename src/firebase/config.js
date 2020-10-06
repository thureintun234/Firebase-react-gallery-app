import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC2n1i-2WAFa43eAjZ0-VeTNrc5SQSzWDE",
    authDomain: "firegram-react-app-55f4c.firebaseapp.com",
    databaseURL: "https://firegram-react-app-55f4c.firebaseio.com",
    projectId: "firegram-react-app-55f4c",
    storageBucket: "firegram-react-app-55f4c.appspot.com",
    messagingSenderId: "76067082552",
    appId: "1:76067082552:web:776e3deb4fd5981baf31cd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectStorage, projectFirestore,timestamp}