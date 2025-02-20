import { createContext, useEffect, useState } from "react";
import { books } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '€';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart= async (itemId, format) => {

        if(!format){
            toast.error('Please Select Format');
            return;  
        }

        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if (cartData[itemId][format]){
                cartData[itemId][format] += 1;
            }
            else{
                cartData[itemId][format] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][format] = 1;
        }
        setCartItems(cartData);
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems]);

    const getCartCount = () =>{
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalCount += cartItems[items][item];
                    }
                }catch (error){
                    
                }
            }
        }
        return totalCount;
    }

    const value ={
        books, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, addToCart,getCartCount
    }

    return(
        <ShopContext.Provider value = {value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

