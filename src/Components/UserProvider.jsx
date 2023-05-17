import React, { createContext, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebasee/Firebase.config';

export let userContext = createContext(null);

const UserProvider = ({children}) => {

    let [user, setUser] = useState(null)
    let [loading, setLoading] = useState(true)

    const auth = getAuth(app);

    let createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        let unsubscribe = onAuthStateChanged(auth, getUser=>{
            setUser(getUser);
            console.log('onAuthState', getUser);
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
        loading
    }

    return (
        <userContext.Provider value={newUser}>
            {children}
        </userContext.Provider>
    );
};

export default UserProvider;