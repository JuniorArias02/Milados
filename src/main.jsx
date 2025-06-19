import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { PedidoProvider } from './store/PedidoContext'
import './index.css'
import './style/custom.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PedidoProvider>
      <App />
    </PedidoProvider>
  </StrictMode>,
)
