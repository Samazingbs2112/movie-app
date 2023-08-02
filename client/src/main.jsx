import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ConfigProvider } from 'antd'  // for global level use
import { Provider } from 'react-redux'
import store from './redux/stores.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider 
    theme={{
      token: {
        colorPrimary: '#18122B',
        colorBorder: '#18122B'
      },
    }}>
     <Provider store={store}>
      <App />
     </Provider>
    </ConfigProvider>
  </React.StrictMode>,
)
