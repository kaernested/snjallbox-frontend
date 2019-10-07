import firebase from 'firebase';

const firebaseConfig = {
  // Your web app's Firebase configuration
    apiKey: "AIzaSyAitLQGOL6MFWWh0WGf1CegoH7HNuXu7h8",
    authDomain: "snjallbox-867ac.firebaseapp.com",
    databaseURL: "https://snjallbox-867ac.firebaseio.com",
    projectId: "snjallbox-867ac",
    storageBucket: "",
    messagingSenderId: "563876688288",
    appId: "1:563876688288:web:9a151623bc0a32a6d7b4c5"

}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

