import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const BookItem = ({
  id,
  image,
  name,
  author,
  format,
  category,
  price,
  tags,
  discountPrice,
}) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className="block text-gray-700 cursor-pointer p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
      to={`/book/${id}`}
    >
      {/* Imagen */}
      <div className="overflow-hidden flex justify-center items-center bg-white">
        <img
          className="w-full h-96 object-contain hover:scale-105 transition ease-in-out"
          src={image[0]}
          alt={name}
        />
      </div>

      {/* Nombre del libro */}
      <p className="font-semibold text-mg mt-4">{name}</p>

      {/* Autor */}
      <p className="text-gray-600">{author}</p>

      {/* Precio */}
      <div className="text-lg font-semibold mt-2 flex items-center gap-2">
        {false /*discountPrice*/ ? (
          <>
            <s className="text-gray-500 text-base">
              {price}
              {currency}
            </s>
            <span className="text-red-600">
              {discountPrice}
              {currency}
            </span>
          </>
        ) : (
          <span>
            {price}
            {currency}
          </span>
        )}
      </div>

      {/* Etiquetas responsivas */}
      {tags && (
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full border border-black">
            {format}
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full border border-blue-800">
            {category}
          </span>
        </div>
      )}
    </Link>
  );
};

export default BookItem;
