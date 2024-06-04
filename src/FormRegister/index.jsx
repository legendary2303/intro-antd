import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Form,Input,Button,Card } from 'antd';
import { UserOutlined, LockOutlined, } from '@ant-design/icons';
import axios from 'axios';
import './Register.css'
import authService from '../services/auth';
import { validatepassword } from '../utils/validation';


const FormRegister = () => {

    const navigate = useNavigate();

    const [registerError, setRegisterError ] = useState(false);

    const [loading, setLoading] = useState(false);

    

    const onFinish = async (values) =>{
        
        setLoading(true);//establece el tiempo de carga
        try {

            const response = await authService.register(values.username,values.email,values.password);

            console.log('Registro exitoso:',response);
            navigate('/login');

            

        } catch (error) {
            console.error('Error en el registro',error.response.data);
            setRegisterError(true);
        } finally {
            setLoading(false)//establece el tiempo de carga a false
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed',errorInfo);
        setRegisterError(true);
    }

    return(
        <>
        <Card
        title="Registrate"
        bordered={false}
        className='responsive-card'
        >

            <Form
            name='normal_login'
            className='login-form'
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
                <Form.Item
                name="username"
                rules={[
                    {
                    required: true,
                    message: 'Por favor ingrese su usuario'
                    }
                ]}
                >
                    <Input prefix = {<UserOutlined/>} placeholder="usuario" />
                </Form.Item>

                

                <Form.Item
                name="email"
                rules={[
                    {
                    required: true,
                    message: 'Por favor ingrese su email'
                    }
                ]}
                >
                    <Input placeholder="email" />
                </Form.Item>


                <Form.Item
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Por favor ingrese su contraseña'
                    }
                ]}
                >
                    <Input.Password prefix = {<LockOutlined/>} placeholder="Contraseña" />
                </Form.Item>





                <Form.Item
                name="password-repet"
                rules={[
                    {
                    required: true,
                    message: 'Por favor repita su contraseña'
                    },
                    ({getFieldValue}) => validatepassword({getFieldValue}),
                ]}
                >
                    <Input.Password prefix = {<LockOutlined/>} placeholder="repetir contraseña" />
                </Form.Item>





                <Form.Item>
                    {registerError && <p style={{ color: 'red' }}>Fallo el registro</p>}
                    <Button type='primary' htmlType='submit' className='login-form-button' loading={loading}>
                        Registrarse
                    </Button>
                </Form.Item>

                Ya tienes cuenta? <a href='/login'>Iniciar Sesion</a>

            </Form>
        </Card>

        </>
    );
}

export default FormRegister;