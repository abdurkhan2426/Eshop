import React from 'react'
import SearchIcon from './SearchIcon'
import CartIcon from './CartIcon'
import BarsIcon from './BarsIcon'
import Logo from './Logo'
import UserIcon from './UserIcon'


const NavBar = ({color}) => {

  return (
    <div className='flex items-center flex-row px-5  py-5 '>
        <a href='/'><div className='flex-none  text-slate-600'><Logo /></div></a>
        <a href='/'><div className='flex-none text-slate-600 ml-4 font-bold text-1xl'>E-Shop</div></a>
        <div className='flex-1 flex place-content-center flex-row '>
          <a href='/'><div className="hidden mx-3 text-slate-600 font-bold sm:block">Men</div></a>
          <a href='/'><div className="hidden mx-3 text-slate-600 font-bold sm:block">Women</div></a>
          <a href='/'><div className="hidden mx-3 text-slate-600 font-bold sm:block">Kids</div></a>
        </div>
        <a href='/'><div className='flex-none text-slate-600 mr-4'><SearchIcon /></div></a>
        <a href='/Cart'><div className='flex-none text-slate-600 mr-4'><CartIcon /></div></a>
        <a href='/'><div className='flex-none text-slate-600 sm:hidden'><BarsIcon /></div></a>
        <a href='/'><div className='flex-none text-slate-600 hidden sm:block'><UserIcon /></div></a>
    </div>


  )
}

export default NavBar