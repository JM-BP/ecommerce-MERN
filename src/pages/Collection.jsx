import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import BookItem from '../components/BookItem';

const collection = () => {

  const { books } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterBooks,setFilterBooks] = useState([]);
  const [format,setFormat] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType,setSortType] = useState('relevant')

  const toggleFormat = (e) =>{
    if(format.includes(e.target.value)){
      setFormat(prev => prev.filter(item => item != e.target.value))
    }
    else{
      setFormat(prev => [...prev,e.target.value])
    }
  }

  const toggleCategory = (e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item != e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {
    let booksCopy = books.slice();

    if(format.length > 0){
      booksCopy = booksCopy.filter(item => format.includes(item.format));
    }

    if(category.length > 0){
      booksCopy = booksCopy.filter(item => category.includes(item.subgenre));
    }

    setFilterBooks(booksCopy)
  }

  const sortBooks = (sortType) => {
    let fpCopy = filterBooks.slice();
    switch (sortType){
      case 'low-high':
        setFilterBooks(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
      case 'high-low':
        setFilterBooks(fpCopy.sory((a,b)=>(b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter();
  },[format, category])

  useEffect(()=>{
    sortBooks();
  },[sortType])

  return (
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        {/* Filter Options */}
        <div className='min-w-60'>
          <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 sm:mb-5'>FILTERS
            <img className={`h-3 sm:hidden ${showFilter ? '' : '-rotate-90'}`} src={assets.back_icon} alt="back icon" />
          </p>
          {/* Format Filter */}
          <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>Format</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Book'} onChange={toggleFormat}/> Book
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'eBook'} onChange={toggleFormat}/> eBook
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Audiobook'} onChange={toggleFormat}/> Audiobook
              </p>
            </div>
          </div>
          {/* Category Filter */}
          <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>Categories</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Fantasy'} onChange={toggleCategory}/> Fantasy
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Science fiction'} onChange={toggleCategory}/> Science fiction
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Horror'} onChange={toggleCategory}/> Horror
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Mystery'} onChange={toggleCategory}/> Mystery
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL '} text2={'COLLECTIONS'} />
            {/* Book Sort */}
            <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          {/* Map Books */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterBooks.map((item,index)=>(
                <BookItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
              ))
            }
          </div>
        </div>
      </div>
  )
}

export default collection