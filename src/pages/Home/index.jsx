import React from 'react';
import { Input,Button, Form } from 'antd'; 
import { useAuth } from '../../hooks/useAuth';

const Home = () => {


    const useAuthData = useAuth();
    

    const { user,logout } = useAuthData;

    

    return(
        
        <>
        
        <h1>Hola {user.readername}</h1>
        <Button onClick={() => logout()}>Cerrar sesion</Button>
        
        </>
        
    );
}

export default Home;