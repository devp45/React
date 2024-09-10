import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Info from './Info.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Info />
  </StrictMode>,
)
