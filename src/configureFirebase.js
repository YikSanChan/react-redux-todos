import * as firebase from "firebase";

const configureFirebase = () => {
  const config = {
    apiKey: "AIzaSyBQfXENb-b54ET9iWgPXkqLLBtahc9bZGU",
    authDomain: "react-redux-todos-692c2.firebaseapp.com",
    databaseURL: "https://react-redux-todos-692c2.firebaseio.com",
    projectId: "react-redux-todos-692c2",
    storageBucket: "react-redux-todos-692c2.appspot.com",
    messagingSenderId: "455779460274"
  };
  return firebase.initializeApp(config);
};

export const firebaseApp = configureFirebase();
