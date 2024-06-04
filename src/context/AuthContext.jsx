import React,{useState,useEffect,createContext} from 'react';
import { storageController } from '../services/token';


export const AuthContext = createContext();


export const AuthProvider = (props) => {
    const { children } = props



    const getSession = async () => {
        const token = await storageController.getToken();
        console.log('Token --> :',token);
    }


    const login = async (token) => {
        try{
            console.log('obteniendo',token);
            await storageController.setToken(token);
        }catch(error){
            console.error(error);
        }
    }




    const data = {
        user: "uzi",
        login,
        getSession,
        logout: () => console.log('logout'),
        upDateUser: () => console.log('update user')
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}