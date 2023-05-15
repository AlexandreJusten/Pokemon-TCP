import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes'
import './samples/node-api'
import './index.scss'
import './controller/conection/cliente.ts'
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>,
)

// postMessage({ payload: 'removeLoading' }, '*')
