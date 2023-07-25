import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import textsPromo from '../texts/promo.json'
import Promo from '../components/Promo'

const NavigatePage = () => {

  const {texts} = textsPromo

  const promo = texts.PromoSingle

  return (
    <>
      <header className='relative bg-white'>
        {promo !== ''? <Promo
          text={promo}
        />: ''}
      </header>
    </>
  )
}

export default NavigatePage
