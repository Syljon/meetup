import firebase from "firebase/app";
import "firebase/storage";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyC0sZ_wlaL-fNxe24VaSLD8UZFB8yP_wYw",
  authDomain: "react-meetup-c3c9c.firebaseapp.com",
  databaseURL: "https://react-meetup-c3c9c.firebaseio.com",
  projectId: "react-meetup-c3c9c",
  storageBucket: "react-meetup-c3c9c.appspot.com",
  messagingSenderId: "828173640249"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default };
