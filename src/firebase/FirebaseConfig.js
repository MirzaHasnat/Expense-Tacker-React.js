import firebase from 'firebase';


var Config = {
  apiKey: "AIzaSyB5g0u363l0huji0YYL-zST19PwI1rD_r0",
  authDomain: "manageaccount-7a481.firebaseapp.com",
  databaseURL: "https://manageaccount-7a481-default-rtdb.firebaseio.com",
  projectId: "manageaccount-7a481",
  storageBucket: "manageaccount-7a481.appspot.com",
  messagingSenderId: "408808783382",
  appId: "1:408808783382:web:b946a5dad812ce5f287f37",
  measurementId: "G-DBLJWHBT1Y"
};

firebase.initializeApp(Config);

export default firebase;
export const FacebookAuth = new firebase.auth.FacebookAuthProvider();
export const GoogleAuth = new firebase.auth.GoogleAuthProvider();
export const Auth = firebase.auth();