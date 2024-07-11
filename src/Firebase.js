import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBhjCcm9h0egm23XCDtXIVD5B3q5fY2IHU",
  authDomain: "linkedin-clone-yt-10b83.firebaseapp.com",
  projectId: "linkedin-clone-yt-10b83",
  storageBucket: "linkedin-clone-yt-10b83.appspot.com",
  messagingSenderId: "1045911188220",
  appId: "1:1045911188220:web:24985a3e6f1053c2e91d79"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
