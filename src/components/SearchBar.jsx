import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisible(true);
        }
        else{
            setVisible(false);
        }

    },[location])

    return showSearch && visible ? (
        <div className='border-t border-b bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center px-2 py-2 my-5 w-3/5 sm:w-1/2'>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} className='border border-gray-400 rounded-full flex-1 outline-none bg-inherit text-sm placeholder:text-gray-500' type="text" placeholder='Search by name' />
            </div>
            <img onClick={()=>setShowSearch(false)} className='inline w-5 cursor-pointer' src={assets.close_icon} alt='cross icon' />
        </div>
    ) : null
}

export default SearchBar