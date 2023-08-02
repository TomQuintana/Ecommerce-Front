import useCart from '../hooks/useCart'
import './Cart.css'

const CartIcon = ({ name, price, img }) => {
  return (
    <>
      <div className='p-8 mt-2'>
        <h1>Producto: {name}</h1>
        <p>Price: ${price}</p>
        <p>Cantidad: 1</p>
      </div>
      <img
        className='w-6/12 rounded-xl mt-2'
        src={img}
      /> 
    </>
  )
}

const Cart = () => {

  const { cartItems } = useCart()

  return (
    <div className='flex justify-center'>
      <div className='mt-8 rounded shadow w-6/12 h-max'>
        <h1 className='flex justify-center font-mono text-2xl'>Titulo</h1>
        <div className='mt-2 mb-4'>
          <div className='grid grid-cols-2 mt-2'>
            {cartItems.map((element:any) => 
              <CartIcon 
                name={element.name}
                price={element.price}
                img={element.img}
              />
            )}
          </div>
        </div>

        { /* TODO: calcular total */ }
        <div>Total: $x</div>

        <div className='flex justify-center p-2'>
          <button className='rounded-xl bg-blue-500 w-28 text-white'>Pagar</button>
        </div>
      </div>
    </div>
  )
}

export default Cart

