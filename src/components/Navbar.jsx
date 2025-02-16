import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  const [visible, setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-bold'>
      <Link to='/'><img src={assets.web_logo} className='w-24 border border-gray-700 rounded-full' alt="web-logo" /></Link>      
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>INICIO</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLECCIÓN</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ACERCA DE</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACTO</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt="search-icon" />
          <div className='group relative'>
            <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="profile-icon" />
            <div className='group-hover:block hidden absolute dropdow-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>Mi perfil</p>
                <p className='cursor-pointer hover:text-black'>Mis pedidos</p>
                <p className='cursor-pointer hover:text-black'>Cerrar sesión</p>
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative">
            <div className="relative">
              <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart-icon" />
              <p className="absolute top-5 right-0 translate-x-1/2 translate-y-[-50%] w-4 h-4 flex items-center justify-center bg-black text-white rounded-full text-[8px]">
                10
              </p>
            </div>
          </Link>
          <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-8 cursor-pointer sm:hidden' alt='menu-icon' />
      </div>
        {/* Sidebar menu for small screens*/}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img className='size-5' src={assets.back_icon} alt="back-icon" />
              <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>INICIO</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLECCIÓN</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ACERCA DE</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACTO</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Navbar