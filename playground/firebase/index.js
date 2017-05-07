import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB5HIEA4yVD78KOOjFrumvMECpOOGYP14U",
    authDomain: "wiss-todo-app.firebaseapp.com",
    databaseURL: "https://wiss-todo-app.firebaseio.com",
    projectId: "wiss-todo-app",
    storageBucket: "wiss-todo-app.appspot.com",
    messagingSenderId: "409724155762"
  };
  firebase.initializeApp(config);

  firebase.database().ref().set({
  	appName: 'Todo App'
  });