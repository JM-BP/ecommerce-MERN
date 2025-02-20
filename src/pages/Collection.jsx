import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import BookCollection from '../components/BookCollection';

const genres = [
  "Adventure Fiction", "Autobiography and Memoir", "Children's Literature", "Classic", "Comedy",
  "Crime", "Dystopian", "Erotic Thriller", "Fairy Tale", "Fantasy", "Fiction",
  "Gothic Fiction", "Graphic Novel", "Historical", "Historical Fiction", "Horror",
  "Literary Fiction", "Magical Realism", "Mystery", "Romance Novel", "Romantic Suspense",
  "Science Fiction", "Thriller", "Young Adult"
];

const Collection = () => {
  const { books, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterBooks, setFilterBooks] = useState([]);
  const [genre, setGenre] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');
  const [searchGenre, setSearchGenre] = useState('');

  const toggleGenre = (e) => {
    if (genre.includes(e.target.value)) {
      setGenre(prev => prev.filter(item => item !== e.target.value));
    } else {
      setGenre(prev => [...prev, e.target.value]);
    }
  };

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let booksCopy = books.slice();

    if (showSearch && search) {
      booksCopy = booksCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (genre.length > 0) {
      booksCopy = booksCopy.filter(item => genre.includes(item.genre));
    }

    if (category.length > 0) {
      booksCopy = booksCopy.filter(item => category.includes(item.subgenre));
    }

    setFilterBooks(booksCopy);
  };

  const sortBooks = () => {
    let fpCopy = filterBooks.slice();
    switch (sortType) {
      case 'low-high':
        setFilterBooks(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterBooks(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [genre, category, search, showSearch]);

  useEffect(() => {
    sortBooks();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 sm:mb-5'>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? '' : '-rotate-90'}`} src={assets.back_icon} alt="back icon" />
        </p>
        
        {/* Genre Filter */}
        <div className={`border border-gray-500 pl-5 py-3 my-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Genres</p>

          {/* Input de búsqueda de género */}
          <input
            type="text"
            placeholder="Search genre..."
            className="border border-gray-500 px-2 py-1 mb-2 w-10/12 text-gray-500"
            value={searchGenre}
            onChange={(e) => setSearchGenre(e.target.value)}
          />

          {/* Lista de géneros filtrados */}
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {genres
              .filter(g => g.toLowerCase().includes(searchGenre.toLowerCase()))
              .map((g) => (
                <p key={g} className='flex gap-2'>
                  <input className='w-3 border border-gray-400' type="checkbox" value={g} onChange={toggleGenre} /> {g}
                </p>
              ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {["Fantasy", "Science fiction", "Horror", "Mystery"].map(cat => (
              <p key={cat} className='flex gap-2'>
                <input className='w-3 border border-gray-400' type="checkbox" value={cat} onChange={toggleCategory} /> {cat}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL '} text2={'COLLECTIONS'} />
          
          {/* Book Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Books */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterBooks.map((item, index) => (
            <BookCollection key={index} name={item.name} id={item._id} price={item.price} genre={item.genre} category={item.category} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
