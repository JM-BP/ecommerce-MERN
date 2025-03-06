import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import BookItem from "./BookItem";

const Bestseller = () => {
  const { books } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestBook = books.filter((item) => item.bestseller);
    setBestSeller(bestBook.slice(0, 4));
  }, [books]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST "} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Rendering the best seller books */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-10">
        {bestSeller.map((item, index) => (
          <BookItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            format={item.format}
            category={item.category}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
