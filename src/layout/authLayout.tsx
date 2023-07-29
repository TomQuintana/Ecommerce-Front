import { Outlet } from "react-router-dom"
import NavigatePage from "../pages/NavigatePage"

const AuthLayout = () => {
  return (
    <>
      <div>
        <NavigatePage />
      </div>
      <main className=''>
        <Outlet />
      </main>
    </>
  )
}

export default AuthLayout
