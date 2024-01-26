import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBvmDtx6EwbCRmr7WOwgGANiIPi1OVyeVM",
    authDomain: "landing-page-a807f.firebaseapp.com",
    projectId: "landing-page-a807f",
    storageBucket: "landing-page-a807f.appspot.com",
    messagingSenderId: "774437701935",
    appId: "1:774437701935:web:e3248519bb19224c4a79da",
    measurementId: "G-JPPWVRD1KW"
  };


  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
 

