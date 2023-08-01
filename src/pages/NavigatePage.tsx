import { MagnifyingGlassIcon, ShoppingBagIcon, UsersIcon } from '@heroicons/react/24/outline'
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import useCart from '../hooks/useCart';
import textsPromo from '../texts/promo.json'
import Promo from '../components/Promo'
import Cart from './Cart'

const NavigatePage = () => {

  const {texts} = textsPromo

  const promo = texts.PromoSingle

  return (
    <>
      <header className='relative bg-white font-mono'>
        {promo !== ''? <Promo
          text={promo}
        />: ''}
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between border-b border-gray-200">
            <div className='flex justify-around gap-3 p-2'>

              {/* Products */}
              <div>
                <Link 
                  className=""
                  to="/">Productos 
                </Link> 
              </div>
              
              <p>|</p>

              {/* About us*/}
              <div>
                Quienes somos ?
              </div>
            </div>

            <div className='flex justify-start p-2'>
              { /* TODO: falta pegarle al back para validar los datos */ }
            {/* Sign in */}
              <div className='flex justify-between gap-1'>
                <p className=''>Iniciar Sesion
                </p>
                <Link 
                  className=""
                  to="/login"> 
                  <span className="sr-only">Iniciar Sesion</span>
                  <UsersIcon className="h-6 w-6" aria-hidden="true" /> 
                </Link> 
              </div>

              {/* Search */}
              <div className="lg:ml-6">
                <a href="#" className=" hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="h-6 w-6"/>
                </a>
              </div>

              {/* Cart */}
              <div className="lg:ml-6">
                <Cart  />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className=''>
        <Outlet />
      </main>
    </>
  )
}

export default NavigatePage


