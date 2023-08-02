import AddCartProducts from './AddCartProducts'
import useProducts from '../hooks/useProducts'

const AllProducts = () => {

  const {productos} = useProducts()

  return (
    <>
      <div className='grid grid-cols-3 items-center gap-8 container mx-auto font-mono'>
        {productos.map((producto, index) => 
          <div className='border shadow-black  px-4 py-16'>
            <img 
              src={producto.img}
            />
            <div className='flex justify-between mt-2'>
              <h1 key={index}>{producto.name}</h1>
              <p key={index}>${producto.price}</p>
            </div>
            <div className='flex justify-center'>
              <AddCartProducts 
                product={producto}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default AllProducts


