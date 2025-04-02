import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './pages/main/main.jsx'
import './styles/theme.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
)
