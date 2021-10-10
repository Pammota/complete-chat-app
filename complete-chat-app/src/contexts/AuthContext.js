import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase.js";

//creating the context
const AuthContext = React.createContext();

//function to grab the context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ( { children } ) => {

    const [loading, setLoading] = useState(true);//loading state
    const [user, setUser] = useState(null);//user state
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged( (user) => {
            setUser(user); //set user to current user
            setLoading(false); //has loaded, so setting loading to false
            if(user) history.push('/chats'); //renavigate to chats application // using react-router-dom to push application to /chats
        });

    }, [user, history]);//grabbing the user from the auth

    const value = { user };


    /// {!loading && children} //if not loading, then set children
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );

}

