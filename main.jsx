import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "../src/Container/App"
import { BrowserRouter } from 'react-router-dom'
import "bootstrap"
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    
  
)
