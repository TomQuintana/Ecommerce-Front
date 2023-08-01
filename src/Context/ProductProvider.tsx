import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

type ProductsType = object

const ProductsContext = createContext<ProductsType[]>([]);

const ProductProvider = ({ children }) => {
    

    const [productos, setProducts] = useState([])

    useEffect( () => {
        const getProducts = async () => {
          const { data } = await axios.get('http://localhost:4001/api/products/all')
          setProducts(data.products)
        }
    
        getProducts()
      }, [])



    return (
        <>
            <ProductsContext.Provider 
                value={{
                    productos
                }}
            >
                {children}
            </ProductsContext.Provider>
        </>
    )
}

export {
    ProductProvider
}

export default ProductsContext