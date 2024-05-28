import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DatePicker, ConfigProvider,Button } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ConfigProvider
    theme={{
      token:{
        colorPrimary:'#16C14C'
      }
        }}
        >
          <BrowserRouter>
              <AppRoutes/>
          </BrowserRouter>
      
    </ConfigProvider>
  )
}

export default App
