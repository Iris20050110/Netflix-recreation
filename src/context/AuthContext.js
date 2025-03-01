import React, {useState, useEffect, createContext, useContext} from 'react'
import {auth, db} from '../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged
} from 'firebase/auth'
import {doc, setDoc} from 'firebase/firestore'

const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const [user, setUser] = useState({})
    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, "users", email), {savedMovies: []})
    }

    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
        return () => {
            unsubscribe()
        }
    })

  return (
    <AuthContext.Provider value={{signUp, signIn, logOut, user}}>
        {children}
    </AuthContext.Provider>
  )
}

export function UserAuth() {
    return useContext(AuthContext)
}

