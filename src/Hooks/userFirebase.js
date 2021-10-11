import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebseInit";




initializeAuthentication()


const useFirebase = () =>{
    const [user, setUser] = useState({})

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
       
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
        signInWithGoogle,
        logOut
    }
}

export default  useFirebase;