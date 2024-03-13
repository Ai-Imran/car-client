import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { useState,useEffect } from 'react';
export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true)

        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password) =>{
        setLoading(true)

        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
      const unScribe =   onAuthStateChanged(auth,currentUser => {
        setUser(currentUser)
        setLoading(false)

        console.log(currentUser);
        })
        return ()=>{
            unScribe();
        }
    }, []);
    
    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut,
        loading
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    
};

export default AuthProviders;