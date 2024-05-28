import React from 'react'
import LayoutComponent from '../../components/Layout';
import Imagendefondo from '../../ImageLogin/imagen';
import FormRegister from '../../FormRegister';

const Register = () => {

  return (
   
      <LayoutComponent
        leftColSize={{xs:24,sm:24,md:16,lg:16}}
        rightColSize={{xs:0,sm:12,md:8,lg:6}}
        leftContent={<Imagendefondo/>}
        rightContent={<FormRegister/>}
        


      />
    
  )
}

export default Register
