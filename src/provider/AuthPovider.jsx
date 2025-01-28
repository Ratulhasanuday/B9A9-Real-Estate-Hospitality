import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword,  FacebookAuthProvider,  getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider= new GithubAuthProvider();
const facebookProvider= new FacebookAuthProvider();
const AuthPovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const signInGitHub=()=>{
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }
    const signInFacebook=()=>{
        setLoading(true);
        return signInWithPopup(auth, facebookProvider)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);

    }

    useEffect(() => {
        const unSubscrib = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscrib();
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        signInWithGoogle,
        signInGitHub,
        signInFacebook,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPovider;