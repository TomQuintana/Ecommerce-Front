import React from 'react'
import { Link } from "react-router-dom"

interface Total {
  total: number
}

const PayButton: React.FC<Total>= ({total}) => {
  console.log(total);
  
  return (
    <>
      <div>
        <button className='rounded-xl bg-blue-500 w-28 text-white hover:bg-blue-600'>
          <Link
            className=""
            to="/payment">Pagar
          </Link>
        </button>
      </div>
    </>
  )
}

export default PayButton 
