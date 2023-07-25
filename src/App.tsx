import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthLayout from './layout/authLayout'
import NavigatePage from './pages/NavigatePage'

function App() {

  return (
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<NavigatePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
