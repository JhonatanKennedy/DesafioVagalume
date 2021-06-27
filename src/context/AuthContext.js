import React, { createContext, useState } from 'react';
import Api from '../api/api';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    
    const [data,setData] = useState({})

    const signIn =  async ({ username, password }) => {
        try{
            const response = await Api.post('/login', {username,password});
            const { token } = response.data;
            localStorage.setItem('@Vagalume:token',token);
            setData({ token });
        }catch(err){
            alert(err.message);
        }
    }
    return(
        <AuthContext.Provider value={{signIn, data }}>
            {children}
        </AuthContext.Provider>
    );
}