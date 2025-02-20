import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {
  
  const {books, currency, cartItems } = useContext(ShopContext);
  const [CartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData=[];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] > 0){
          tempData.push({
            _id: items,
            format: format,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    console.log(tempData);
  }, [cartItems]);

  return (
    <div>

    </div>
  )
}

export default Cart