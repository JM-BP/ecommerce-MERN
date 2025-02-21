import React, { useContext, useEffect, useState, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { books, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  const booksMap = useMemo(() => {
    return books.reduce((acc, book) => {
      acc[book._id] = book;
      return acc;
    }, {});
  }, [books]);

  useEffect(() => {
    const tempData = Object.entries(cartItems).flatMap(([bookId, formats]) =>
      Object.entries(formats)
        .filter(([_, quantity]) => quantity > 0)
        .map(([format, quantity]) => ({
          _id: bookId,
          format,
          quantity,
        }))
    );

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-5 w-full mx-auto">
      <div className="text-2xl mb-6 text-center">
        <Title text1="YOUR " text2="CART" />
      </div>
      <div className="space-y-6">
        {cartData.map((item) => {
          const bookData = booksMap[item._id];
          if (!bookData) return null;

          return (
            <div
              key={`${item._id}-${item.format}`}
              className="flex items-center justify-between border-b pb-4"
            >
              {/* Book Info */}
              <div className="flex items-start gap-4 sm:gap-6 w-2/3">
                <img
                  className="w-16 sm:w-20 rounded"
                  src={bookData.image[0]}
                  alt={bookData.name}
                />
                <div>
                  <p className="text-sm sm:text-lg font-semibold capitalize">
                    {bookData.name}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-gray-700">
                      {bookData.price} {currency}
                    </p>
                    <p className="px-2 sm:px-3 py-0.5 border bg-gray-100 rounded text-xs sm:text-sm">
                      {item.format}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <p className="text-gray-500 text-sm max-sm:hidden">
                    Quantity:
                  </p>
                  <input
                    onChange={(e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : updateQuantity(
                            item._id,
                            item.format,
                            Number(e.target.value)
                          )
                    }
                    className="border rounded w-12 sm:w-16 px-1 sm:px-2 py-0.5 text-center"
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                  />
                </div>
                {/* Delete Icon */}
                <img
                  onClick={() => updateQuantity(item._id, item.format, 0)}
                  className="w-5 sm:w-6 cursor-pointer hover:opacity-50 transition-opacity"
                  src={assets.delete_icon}
                  alt="Delete icon"
                />
              </div>
            </div>
          );
        })}
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end">
              <button
                onClick={() => navigate("/place-order")}
                className="bg-black text-white hover:bg-green-700 text-sm my-8 px-8 py-3"
              >
                PROCESS TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
