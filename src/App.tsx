import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductProvider } from './Context/ProductProvider'
import { CartProductProvider } from './Context/CartProductsProvider'
import Login from './pages/login'
import Products from './pages/Products'
import Cart from './pages/Cart'
import NavigatePage from './pages/NavigatePage'
import AboutUs from './components/AboutUs'
import PaymentFinal from './pages/PaymentFinal'

function App() {


  return (
    <BrowserRouter>
      <CartProductProvider>
        <ProductProvider>
          <Routes>
            <Route path='/' element={<NavigatePage />}>
              <Route index element={<Products />} />
              <Route path='login' element={<Login />} />
              <Route path='cart' element={<Cart />} />
              <Route path='about' element={<AboutUs />} />
              <Route path='payment' element={<PaymentFinal/>} />
            </Route>
          </Routes>
        </ProductProvider>
      </CartProductProvider>
    </BrowserRouter >
  )
}

export default App
