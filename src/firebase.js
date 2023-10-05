import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBzJNR4QAUJaVDBuqqF4rlXzj5lkYnpt3Y",
    authDomain: "disney-clone-efb65.firebaseapp.com",
    projectId: "disney-clone-efb65",
    storageBucket: "disney-clone-efb65.appspot.com",
    messagingSenderId: "267385072773",
    appId: "1:267385072773:web:38ed5d353186af18d18dec",
    measurementId: "G-E9WT3MCZZN"
  };
  
  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;