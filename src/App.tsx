import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import AuthLayout from './layout/authLayout'
import Login from './pages/login'
import Products from './pages/Products'
import Cart from './pages/Cart'

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Products />}/>
          <Route path='login' element={<Login/>} />
          <Route path='cart' element={<Cart/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
