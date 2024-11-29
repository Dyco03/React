import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut} from "firebase/auth";


const config = {
    apiKey: "AIzaSyAoziKVLx9ejak3HoExJqPNqeVtkovqtnQ",
    authDomain: "marvel-quiz-1b474.firebaseapp.com",
    projectId: "marvel-quiz-1b474",
    storageBucket: "marvel-quiz-1b474.firebasestorage.app",
    messagingSenderId: "871923391602",
    appId: "1:871923391602:web:c71dac3fcad9aa0421b6eb"
  };

class Firebase {
    constructor(){
        this.app = initializeApp(config)
        this.auth = getAuth(this.app);
    }

    //incription
    signupUser = (email, password) => 
    createUserWithEmailAndPassword(this.auth,email,password);

    //connexion
    loginUser = (email, password) =>
    signInWithEmailAndPassword(this.auth,email,password);

    //deconnexion
    signoutUser = () => signOut(this.auth)
}

export default Firebase;