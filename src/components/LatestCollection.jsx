import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import BookItem from './BookItem';

const LatestCollection = ()=> {
    const {books}=useContext(ShopContext);
    const [latestBooks, setLatestsBooks] = useState([]);

    useEffect(() => {
        setLatestsBooks(books.slice(0, 8));
    }, [books]);

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'ÚLTIMOS '} text2={'LANZAMIENTOS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>

        {/* Rendering the books */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-10'>
            {
                latestBooks.map((item,index)=>(
                    <BookItem key={index} id={item._id} image={item.image} name={item.name} genre={item.genre} subgenre={item.subgenre} price={item.price} tags />                  
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection