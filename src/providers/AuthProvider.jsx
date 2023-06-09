import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.congif";
import axios from "axios";


export const AuthContext=createContext(null)
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const googleProvider=new GoogleAuthProvider()


    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };

    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    };

    const logOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    };

    const updateUserProfile=(name,photo)=>{
      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            
            // console.log('current user',currentUser)

            // jwt
          if(currentUser){
            axios.post('https://bistro-server-boss.vercel.app/jwt',{email:currentUser.email})
            .then(data=>{
                // console.log(data.data.token)
                localStorage.setItem('access-token',data.data.token)
                setLoading(false)

            })
          }
          else{
            localStorage.removeItem('access-token')
          }

            
        });
        return()=>{
           return unsubscribe()
        }
    },[])

    const authInfo={
            user,
            loading,
            createUser,
            signInUser,
            logOutUser,
            updateUserProfile,
            googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;