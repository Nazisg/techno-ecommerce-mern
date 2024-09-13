import React from 'react';
import { IoIosSearch, IoMdHeartEmpty } from 'react-icons/io';
import { IoCartOutline, IoPersonOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.webp';

function Header() {
  return (
    <header className='bg-black py-5 px-4 flex justify-between items-center'>
      <img src={logo} alt="logo" />
      <ul className='flex gap-5 text-white'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/pages">Pages</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
      </ul>
      <ul className='text-white flex gap-3 items-center text-2xl'>
        <li><IoIosSearch /></li>
        <li><IoPersonOutline /></li>
        <li className='relative'><IoMdHeartEmpty /><div className='absolute right-[-7px] top-[-5px] text-[10px] w-4 h-4 p-[0.7px] flex justify-center items-center bg-[#2996d8] rounded-full'>0</div></li>
        <li className='relative'><IoCartOutline /><div className='absolute right-[-7px] top-[-5px] text-[10px] w-4 h-4 p-[0.7px] flex justify-center items-center bg-[#2996d8] rounded-full'>0</div></li>
      </ul>
    </header>
  );
}

export default Header;
