import firebase from "firebase/app";


 // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOQdsYhIWTvk5v-qo3uvw65rAu6X3jpvs",
    authDomain: "todo-e0177.firebaseapp.com",
    databaseURL: "https://todo-e0177.firebaseio.com",
    projectId: "todo-e0177",
    storageBucket: "todo-e0177.appspot.com",
    messagingSenderId: "675365823544",
    appId: "1:675365823544:web:d1341ca1a6c96451c532cd"
  };


 // Initialize Firebase
 
  export default firebase.initializeApp(firebaseConfig);