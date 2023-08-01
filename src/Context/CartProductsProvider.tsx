import { createContext, useContext, useEffect, useState } from "react";

// Define el tipo para el objeto que estará en el array
type CartItem = {
    id: number;
    name: string;
  };
  
  // Define el tipo para el contexto
  type CartContextType = {
    cartItems: CartItem[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  };

const CartProductsContext = createContext<CartContextType | undefined>(undefined);

const CartProductProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState<CartItem[]>([])    

    return (
        <>
            <CartProductsContext.Provider 
                value={{
                    cartItems,
                    setCartItems
                }}
            >
                {children}
            </CartProductsContext.Provider>
        </>
    )
}

export {
    CartProductProvider
}

export default CartProductsContext