import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const BookItem = ({id,image,name,genre,subgenre,price})=> {
    const {currency} = useContext(ShopContext);
  return (
    <Link className='text-gray-700 cursor-pointer border p-2 pb-5 border-gray-300' top={`/books/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-semibold'>{name}</p>
        <p className='text-lg font-semibold'>{price}{currency}
          <span className="hidden md:inline bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 ml-4 rounded-full border border-black">{genre}</span>
          <span className="hidden md:inline bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full border border-blue-800">{subgenre}</span>
        </p>
    </Link>
  )
}

export default BookItem