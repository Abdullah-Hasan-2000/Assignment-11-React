import React from 'react'
import './App.css'
import Login from './screens/Login.jsx'
import SignUp from './screens/SignUp.jsx'
import { Route, Routes } from 'react-router-dom'
function App() {
  

  return (
    <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/' element={<Login />} />
    <Route path='/signup' element={<SignUp/>} />
    </ Routes>
  )
}

export default App
