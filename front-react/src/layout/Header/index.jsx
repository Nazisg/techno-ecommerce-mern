import React from 'react';
import { IoIosSearch, IoMdHeartEmpty } from 'react-icons/io';
import { IoCartOutline, IoPersonOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../assets/icons/logo.webp';
import { selectCartCount } from '../../redux/services/cartSlice';

function Header() {
  const cartCount = useSelector(selectCartCount);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Adjust the path according to your state structure
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate('/profile'); // Redirect to profile page if logged in
    } else {
      navigate('/login'); // Redirect to login page if not logged in
    }
  };

  return (
    <header className='bg-black py-5 px-4 flex justify-between items-center'>
      <img src={logo} alt="logo" />
      <ul className='gap-5 text-white hidden md:flex'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
      </ul>
      <ul className='text-white flex gap-3 items-center text-2xl'>
        <li onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
          <IoPersonOutline />
        </li>
        <li className='relative'>
          <Link to="/wishlist">
            <IoMdHeartEmpty />
            <div className='absolute right-[-7px] top-[-5px] text-[10px] w-4 h-4 p-[0.7px] flex justify-center items-center bg-[#2996d8] rounded-full'>0</div>
          </Link>
        </li>
        <li className='relative'>
          <Link to="/cart">
            <IoCartOutline />
            <div className='absolute right-[-7px] top-[-5px] text-[10px] w-4 h-4 p-[0.7px] flex justify-center items-center bg-[#2996d8] rounded-full'>{cartCount}</div>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
