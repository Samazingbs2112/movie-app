import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ConfigProvider } from 'antd'  // for global level use

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider 
    theme={{
      token: {
        colorPrimary: '#18122B',
        colorBorder: '#18122B'
      },
    }}>
     <App />
    </ConfigProvider>
  </React.StrictMode>,
)
