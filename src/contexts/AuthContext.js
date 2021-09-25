import React, {useContext, useState, useEffect} from 'react';
import {auth} from "../firebase";


export const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [pending , setPending ] = useState(true);


    useEffect (()=> {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setPending(false);
        })

    }, []);

    if (pending) {
        return <>Loading...</>
    }

    return (
        <div>
            <AuthContext.Provider value={{currentUser}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}


