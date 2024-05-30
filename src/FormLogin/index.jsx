import React,{useState} from 'react';
import { Form,Input,Button,Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import './FormLogin.css'
import { useNavigate } from 'react-router-dom';



const FormLogin = () => {
    const navigate = useNavigate();


    const [loginError, setLoginError ] = useState(false);

    const [loading, setLoading] = useState(false);//estado de carga

    const onFinish = async (values) =>{
        
        setLoading(true);//establece el tiempo de carga
        try {
            const response = await axios.post('https://api-books-omega.vercel.app/getin/signin',
                {
                    email: values.username,
                    password: values.password
                }
            );

            console.log('Iniciod de sesion exitoso:',response.data);
            localStorage.setItem('token',response.data.token);//guarda el token en el almacenamiento local
            navigate('/');
        } catch (error) {
            console.error('Error en el inicio de sesion',error.response.data);
            setLoginError(true);
        } finally {
            setLoading(false)//establece el tiempo de carga a false
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed',errorInfo);
        setLoginError(true);
    }

    return (
        <>
        <Card
        title="Bienvenido de nuevo"
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
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Por favor ingrese su contraseña'
                    }
                ]}
                >
                    <Input.Password prefix = {<LockOutlined/>} placeholder="password" />
                </Form.Item>

                <Form.Item>
                {loginError && <p style={{ color: 'red' }}>Credenciales incorrectas. intentalo de nuevo</p>}
                    <Button type='primary' htmlType='submit' className='login-form-button' loading={loading}>
                        Iniciar Sesion
                    </Button>
                </Form.Item>

                Aun no tienes cuenta? <a href='/Register'>Registrate</a>

            </Form>
        </Card>

        </>
    );
}

export default FormLogin