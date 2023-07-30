import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthLayout from './layout/authLayout'
import NavigatePage from './pages/NavigatePage'
import Login from './pages/login'
import Products from './pages/Products'

function App() {

  return (
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Products/>}/>
          <Route path='login' element={<Login/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
