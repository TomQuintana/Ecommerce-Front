import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/authLayout'
import { ProductProvider } from './Context/ProductProvider'
import { CartProductProvider } from './Context/CartProductsProvider'
import Login from './pages/login'
import Products from './pages/Products'
import Cart from './pages/Cart'
import NavigatePage from './pages/NavigatePage'

function App() {
  

  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProductProvider>
          <Routes>
            <Route path='/' element={<NavigatePage />}>
              <Route index element={<Products />} />
              <Route path='login' element={<Login />} />
              <Route path='cart' element={<Cart/>} />
            </Route>
          </Routes>
        </CartProductProvider>
      </ProductProvider>
    </BrowserRouter >
  )
}

export default App
