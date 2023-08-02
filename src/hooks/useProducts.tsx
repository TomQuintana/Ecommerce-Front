import { useContext } from "react";
import ProductsContext from '../Context/ProductProvider'

const useProducts = () => {
  return useContext(ProductsContext)

}

export default useProducts
