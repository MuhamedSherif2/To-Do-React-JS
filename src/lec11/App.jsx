import React from 'react'
import Nav from './Nav'
import './style.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Nav />
    </BrowserRouter>
  )
}

export default App
