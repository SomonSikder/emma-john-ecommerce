import {
    createUserWithEmailAndPassword, FacebookAuthProvider, getAuth,
    GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebseInit";




initializeAuthentication()


const useFirebase = () =>{
    const [user, setUser] = useState({})

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider();


    const createUserWithEmail = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInWithEmail = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
       
    }

    const signInWithFacebook = () =>{
        return signInWithPopup(auth, facebookProvider); 
    }

    const logOut = () =>{
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            // An error happened.
          });
          
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    },[auth])
    
    return{
        user, 
        signInWithEmail,
        createUserWithEmail,
        signInWithGoogle,
        signInWithFacebook,
        logOut
    }
}

export default  useFirebase;