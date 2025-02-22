import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import BookCollection from "./BookCollection";
import Title from "./Title";

const RelatedProduct = ({ genre }) => {
  const { books } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (books.length > 0) {
      let booksCopy = books.slice();
      booksCopy = booksCopy.filter((item) => genre === item.genre);
      setRelated(booksCopy.slice(0, 5));
    }
  }, [books]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED "} text2={"BOOKS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <BookCollection
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
