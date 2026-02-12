import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRoter} from 'react-router-dom'
import{AppContextProvider} from './context/AppContect.jsx'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  <BrowserRoter>
    <App />
  </BrowserRoter>,
)
