import React from 'react';
import { LuShoppingBasket } from "react-icons/lu";
import product from '../../assets/images/product1.avif';
import PageHeader from '../../components/PageHeader';
import TopNewArrivals from '../Home/sections/TopNewArrivals';

function ProductDetails() {
  return (
    <div>
      <PageHeader title={"Products Page"} />
      <div className='py-8 md:py-10 px-6 md:px-8 '>
        <div className='flex gap-3 w-full'>
          <div className='w-[40%]'>
            <img src={product} alt="" className='w-full h-full object-cover' />
          </div>
          <div className='w-[60%] flex flex-col gap-5 '>
            <h2 className='text-[20px] xl:text-[40px] font-semibold'>Sony Portable Bluetooth</h2>
            <div className='flex gap-2 items-center'>
              <p className='text-[#ff4a4a] font-semibold text-xl'>$30.00</p>
              <del className='text-[#2995D7] font-medium line-through'>$40.00</del>
            </div>
            <p>Experience high-quality audio on the go with the Sony Portable Bluetooth speaker. With its advanced Bluetooth technology, you can easily connect your devices and enjoy crystal clear sound wherever you are. Its compact and portable design makes it perfect for traveling and outdoor activities.</p>
            <div className='flex gap-3 items-center'>
              <div className='flex items-start'>
                <div className='w-10 h-10 flex justify-center items-center p-1 bg-white text-black cursor-pointer'>-</div>
                <div className='w-10 h-10 flex justify-center items-center p-1 bg-white text-black'>1</div>
                <div className='w-10 h-10 flex justify-center items-center p-1 bg-white text-black cursor-pointer'>+</div>
              </div>
              <button className='bg-[#2996d8] text-sm flex gap-2 text-white py-3 px-4 md:px-8 hover:bg-[#1a6ca8] transition-all'>
                <LuShoppingBasket /> <p className='hidden md:block'>Add to Cart</p>
              </button>
            </div>
            <div className='w-full h-[1px] bg-[#636363]'></div>
            <div className='flex gap-3 items-center'>
              <h5>CATEGORIES:</h5>
              <p>Speaker</p>
            </div>
          </div>
        </div>
        <TopNewArrivals/>
      </div>
    </div>
  )
}

export default ProductDetails