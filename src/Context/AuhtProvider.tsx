import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuhtContext = createContext({});

const AuhtProvider = ({children}) => {
  
  const [auth, setAuth] = useState({})

  return ( 
    <>
      <AuhtContext.Provider
        value={{
          auth,
          setAuth
        }}
      >
        {children}
      </AuhtContext.Provider>
    </>
  )
}

export {
  AuhtProvider
}

export default AuhtContext 
