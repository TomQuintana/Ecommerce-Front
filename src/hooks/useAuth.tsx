import { useContext } from "react";
import AuhtContext from "../Context/AuhtProvider";

const useAuth = () => {
  return useContext(AuhtContext)
}

export default useAuth 
