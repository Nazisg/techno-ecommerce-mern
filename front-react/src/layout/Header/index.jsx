import React from 'react';
import { IoIosSearch, IoMdHeartEmpty } from 'react-icons/io';
import { IoCartOutline, IoPersonOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.webp';

function Header() {
  return (
    <header className='bg-black py-5 px-4 flex justify-between items-center'>
      <img src={logo} alt="logo" className='' />
      <ul className='gap-5 text-white hidden md:flex'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
      </ul>
      <ul className='text-white flex gap-3 items-center text-2xl'>
        <li><Link to="/login"><IoPersonOutline /></Link></li>
        <li className='relative'><Link to="/wishlist"><IoMdHeartEmpty />
          <div className='absolute right-[-7px] top-[-5px] text-[10px] w-4 h-4 p-[0.7px] flex justify-center items-center bg-[#2996d8] rounded-full'>0</div></Link></li>
        <li className='relative'>
          <Link to="/cart">
            <IoCartOutline />
            <div className='absolute right-[-7px] top-[-5px] text-[10px] w-4 h-4 p-[0.7px] flex justify-center items-center bg-[#2996d8] rounded-full'>0</div>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
