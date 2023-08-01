import {useContext} from 'react'
import { MagnifyingGlassIcon, ShoppingBagIcon, UsersIcon } from '@heroicons/react/24/outline'
import CartProductsContext from '../Context/CartProductsProvider'

const Cart = () => {

  const carrito = localStorage.getItem('Cart')
  console.log(carrito);
  
  const carritoBest = JSON.parse(carrito)
  console.log(carritoBest.length);

  let carritoFinal = []

  carritoBest.map((element) => {
    console.log(element);
    carritoFinal.push(element)
    
  })

  console.log(carritoFinal);
  


  return (
    <div>
      <a href="/cart" className="group -m-2 flex items-center p-2">
        <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{carritoBest.length}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </a>
    </div>
  )
}

export default Cart
