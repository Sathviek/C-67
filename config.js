import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDkJ9wMLtnjwyJAswBXMcSn0-orUqFQG0A",
    authDomain: "team-voting-app-ad8b8.firebaseapp.com",
    databaseURL: "https://team-voting-app-ad8b8-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-ad8b8",
    storageBucket: "team-voting-app-ad8b8.appspot.com",
    messagingSenderId: "937519899029",
    appId: "1:937519899029:web:4128a9f7449855deefd69c"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();