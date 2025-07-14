import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '/css/Navbar.css'
import '/css/Home.css'
import '/css/Installation.css'
import '/css/Playground.css'
import '/css/Support.css'
import '/css/About.css'
import '/css/Contact.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
