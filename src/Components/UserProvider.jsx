import React, { createContext, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import app from '../Firebasee/Firebase.config';

export let userContext = createContext(null);

const UserProvider = ({children}) => {

    let [user, setUser] = useState(null)
    let [loading, setLoading] = useState(true)

    const auth = getAuth(app);
    
    const googleProvider = new GoogleAuthProvider(app);

    let createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    let updateUser = (name, photo) =>{
        
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo 
            
        })
    }

    let googlePopUp = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        let unsubscribe = onAuthStateChanged(auth, getUser=>{
            setUser(getUser);
            // console.log('onAuthState', getUser);
            setLoading(false)

        })

        return() =>{
            unsubscribe();
        }
    },[])

    let signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    let logout = ()=>{
        return signOut(auth)
    }

    let newUser ={
        user,
        createUser,
        logout,
        signIn,
        loading,
        googlePopUp,
        updateUser
    }

    return (
        <userContext.Provider value={newUser}>
            {children}
        </userContext.Provider>
    );
};

export default UserProvider;