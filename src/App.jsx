import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DatePicker, ConfigProvider,Button } from 'antd';

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
      <DatePicker/>
      <Button type='primary'>Primary button</Button>
    </ConfigProvider>
  )
}

export default App
