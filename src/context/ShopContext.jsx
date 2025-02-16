import { createContext } from "react";
import { books } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{
    const currency = '€';
    const delivery_fee = 10;

    const value ={
        books, currency, delivery_fee
    }
    return(
        <ShopContext.Provider value = {value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

