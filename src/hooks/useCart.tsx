import { useContext } from "react";
import CartProductsContext from "../Context/CartProductsProvider";

const useCart = () => {
  return useContext(CartProductsContext)
}

export default useCart
