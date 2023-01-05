import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App'
import Register from './Register'
import Home from './Home'
import Action from './Actions'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Actions' element={<Action />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
