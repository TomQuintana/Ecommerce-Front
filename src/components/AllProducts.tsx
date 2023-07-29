import {useState, useEffect} from 'react'
import axios from 'axios'
import AddCartProducts from './AddCartProducts'

const AllProducts = () => {

  const [products, setProducts] = useState([])

  useEffect( () => {
    const getProducts = async () => {
      const { data } = await axios.get('http://localhost:4001/api/products/all')
      setProducts(data.products)
      
    }
    getProducts()
  }, [])

  return (
    <>
      <div className='grid grid-cols-3 items-center gap-8 container mx-auto font-mono'>
        {products.map((producto, index) => 
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


