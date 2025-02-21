import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const BookItem = ({ id, image, name, genre, subgenre, price, tags }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link
      to={`/book/${id}`}
      className="text-gray-700 cursor-pointer p-2 pb-5  border border-gray-300"
      top={`/book/${id}`}
    >
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out h-80"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 font-medium">{name}</p>
      <p className="text-lg font-semibold">
        {price}
        {currency}
        <span
          className={`hidden ${
            tags
              ? "md:inline bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 ml-4 rounded-full border border-black"
              : ""
          }`}
        >
          {genre}
        </span>
        <span
          className={`hidden ${
            tags
              ? "md:inline bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full border border-blue-800"
              : ""
          }`}
        >
          {subgenre}
        </span>
      </p>
    </Link>
  );
};

export default BookItem;
