import AddCartProducts from './AddCartProducts'
import useProducts from '../hooks/useProducts'

const AllProducts = () => {

  const {productos} = useProducts()

  return (
    <>
      <div className='grid grid-cols-3 items-center gap-8 container mx-auto font-mono'>
        {productos.map((producto, index) => 
          <div className='grid grid-cols-1 border'>
            <div className='flex justify-center'>
              <img 
                className='w-6/12 rounded-xl mt-2 flex justify-center'
                src={producto.img}
              />
            </div>
            <div className='flex justify-around mt-4'>
              <h1 key={index}>Producto: {producto.name}</h1>
              <p key={index}>${producto.price}</p>
            </div>
            <div className='flex justify-around ml-6'>
              <p key={index}>Stock: {producto.stock}</p>
              <p >Cantidad - Select</p>
            </div>
            <div className='flex justify-center mb-2'>
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


