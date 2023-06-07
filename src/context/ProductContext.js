import { createContext,useEffect,useReducer,useState} from "react";
import {ProductReducer,initialState} from "../reducer/ProductReducer";
import {FilterReducer,filtersinitialState} from "../reducer/FilterReducer";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ProductContext = createContext();

export function ProductProvider({children}){
    const [state, dispatch] = useReducer(ProductReducer, initialState);
    const [filterstate, filterdispatch] = useReducer(FilterReducer, filtersinitialState);
    const [loading,setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios
         .get('/api/products')
         .then((response) => {
            dispatch({ type: "GET_PRODUCTS", payload:response.data.products })
            filterdispatch({ type: "GET_PRODUCTS_FOR_FILTER", payload:response.data.products })
         })
         .catch((err) => {
            console.log(err);
            navigate('/*')
         })
         .then(() => {
            setTimeout(() => {
                setLoading(false);
              }, 3400);
          });
    }, []);
    return(
        <ProductContext.Provider value={{state,dispatch,filterstate,filterdispatch,loading,isLoggedIn,setIsLoggedIn}}>
            {children}
        </ProductContext.Provider>
    )
}