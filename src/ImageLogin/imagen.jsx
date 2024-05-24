import React from 'react';
import imagen from '../assets/images/imagen-usuario.png';
import "./imagen.css";

const Imagendefondo = () => {

    return(
        <img src={imagen} className='img' alt='imagen'/>
    );

}

export default Imagendefondo