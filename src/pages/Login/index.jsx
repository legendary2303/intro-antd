import React from 'react'
import LayoutComponent from '../../components/Layout';
import Imagendefondo from '../../ImageLogin/imagen';
import FormLogin from '../../FormLogin';

const Login = () => {

  return (
   
      <LayoutComponent
        leftColSize={{xs:0,sm:12,md:8,lg:6}}
        rightColSize={{xs:24,sm:24,md:16,lg:16}}
        leftContent={<Imagendefondo/>}
        rightContent={<FormLogin/>}
        


      />
    
  )
}

export default Login
