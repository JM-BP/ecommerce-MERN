import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";
import BookDescription from "../components/BookDescription";

const Book = () => {
  const { bookId } = useParams();
  const { books, currency, addToCart } = useContext(ShopContext);
  const [bookData, setBookData] = useState(null);
  const [image, setImage] = useState("");
  const [activeTab, setActiveTab] = useState("description");
  const [format, setFormat] = useState("Book");

  useEffect(() => {
    const book = books.find((item) => item._id === bookId);
    if (book) {
      setBookData(book);
      setImage(book.image[0]);
    }
  }, [bookId, books]);

  return bookData ? (
    <div className="border-t-2 pt-6 transition-opacity ease-in duration-500 opacity-100 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Book Images */}
        <div className="w-full lg:w-1/3 flex flex-col items-center">
          {/* Main image */}
          <div className="w-full max-w-xs">
            <img
              className="w-full h-auto object-contain border border-gray-300"
              src={image}
              alt={bookData.name}
            />
          </div>
          {/* Thumbnails aligned horizontally */}
          <div className="flex gap-2 mt-3 overflow-x-auto">
            {bookData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className="w-16 h-20 object-cover cursor-pointer border border-gray-300 hover:border-black"
                alt="book thumbnail"
              />
            ))}
          </div>
        </div>

        {/* Book Info */}
        <div className="flex-1">
          <h1 className="font-bold text-2xl">{bookData.name}</h1>
          <p className="text-gray-600 text-lg mt-2 font-semibold">
            {bookData.author}
          </p>

          {/* Ratings */}
          <div className="flex items-center gap-1 mt-5">
            {[...Array(3)].map((_, i) => (
              <img
                key={i}
                src={assets.star_icon}
                alt="star icon"
                className="w-5"
              />
            ))}
            {[...Array(2)].map((_, i) => (
              <img
                key={i}
                src={assets.star1_icon}
                alt="star icon"
                className="w-5"
              />
            ))}
            <p className="pl-2 text-gray-600">(112 Reviews)</p>
          </div>

          {/* Price */}
          <p className="mt-5 text-2xl font-bold text-black">
            {bookData.price} {currency}
          </p>

          {/* Description */}
          <BookDescription description={bookData.description} />

          {/* Format */}
          <div className="flex flex-col gap-4 my-5">
            <p className="text-gray-500 font-bold">Select Format</p>
            <div className="flex gap-2">
              <button
                onClick={() => setFormat("Book")}
                className={`border py-2 px-4 bg-gray-300 ${
                  format === "Book"
                    ? "border-2 border-gray-600 font-semibold"
                    : ""
                }`}
              >
                Book (Hardcover)
              </button>
              <button
                onClick={() => setFormat("eBook")}
                className={`border py-2 px-4 bg-gray-300 ${
                  format === "eBook"
                    ? "border-2 border-gray-600 font-semibold"
                    : ""
                }`}
              >
                eBook
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(bookData._id, format)}
            className="bg-black text-white px-8 py-3 text-lg mt-5 rounded-md hover:bg-blue-700"
          >
            Add to Cart
          </button>

          {/* Tags 
                    <div className="mt-10 flex gap-2 flex-wrap">
                        <span className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">{bookData.genre}</span>
                        <span className="bg-blue-200 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">{bookData.subgenre}</span>
                    </div> */}
        </div>
      </div>

      {/* Description and Reviews Section */}
      <div className="mt-10 mb-5">
        {/* Tabs */}
        <div className="flex">
          <button
            className={`px-6 py-3 text-lg ${
              activeTab === "description"
                ? "border-b-2 border-gray-600 text-gray-700"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`px-6 py-3 text-lg ${
              activeTab === "reviews"
                ? "border-b-2 border-gray-600 text-gray-700"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (122)
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "description" ? (
          <div className="border px-6 py-6 text-gray-600 text-md leading-relaxed">
            <p>{bookData.description}</p>
          </div>
        ) : (
          <div className="border px-6 py-6 text-gray-600 text-md leading-relaxed">
            <p>No reviews yet. Be the first to write one!</p>
          </div>
        )}
      </div>
      <RelatedProduct genre={bookData.genre} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Book;
