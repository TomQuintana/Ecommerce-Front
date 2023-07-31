import {useState} from 'react';

const AddCartProducts = ({product}) => {

  const [cart, setCart] = useState([])

  const addToCart = (producto) => {
    setCart(producto)
  }
  console.log(cart);
  
  return (
    <>
      <button 
        onClick={() => addToCart(product)}
        type="submit" 
        value="Agregar al Carrito"
        className='bg-indigo-700 w-full py-3 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 
        md:w-auto px-10'
      >Agregar al Carrito
      </button>
    </>
  )
}

export default AddCartProducts
