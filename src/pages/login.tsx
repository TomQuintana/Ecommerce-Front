
const Login = () => {
  return (
    <>
      <div className="flex justify-center mt-5">
        <h1 className='text-orange-400 font-black text-3xl'>
          Inicia Sesion y Administra tus {''} 
          <span className='text-black'>Ventas</span> 
        </h1>
      </div>
      <div className="flex justify-center">
        <div
          className="w-6/12 mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
          <form
            className=""
          >
            <div className='my-5'>
              <label 
                className='uppercase text-gray-600 block text-xl font-bold'
              >Email</label>
              <input 
                type="email" 
                placeholder='Email de Registro'
                className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
              />
            </div>
            <div className='my-5'>
              <label 
                className='uppercase text-gray-600 block text-xl font-bold'
              >Password</label>
              <input 
                type="password" 
                placeholder='Tu Password'
                className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
              />
            </div>
            <input 
              type="submit" 
              value="Iniciar Sesion"
              className='bg-indigo-700 w-full py-3 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 
              md:w-auto px-10'
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
