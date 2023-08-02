import {useState} from 'react';
import useProducts from '../hooks/useProducts';
import useCart from '../hooks/useCart';

const AddCartProducts = ({product}) => {

  const {productos} = useProducts()
  const {cartItems, setCartItems} = useCart()
  
  const addToCart = (producto) => {
    productos.forEach(element => {
      if(element._id == producto._id) {
        
        setCartItems([...cartItems, producto])
      }
    });
  }
  
  const cartToJson = JSON.stringify(cartItems)
    localStorage.setItem('Cart', cartToJson)
  
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
