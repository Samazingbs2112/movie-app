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
        colorPrimary: '#080202',
        colorBorder: '#080202'
      },
    }}>
     <App />
    </ConfigProvider>
  </React.StrictMode>,
)
