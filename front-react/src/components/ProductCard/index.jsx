import React from 'react';
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineCompareArrows, MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import product1 from '../../assets/images/product1.avif';

function ProductCard() {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/products/1');
    };

    return (
        <div
            className='bg-[#1c1c1c] p-4 flex flex-col gap-3 group relative hover:cursor-pointer'
            onClick={handleCardClick}
        >
            <div className='bg-[#262626] relative flex justify-center items-center'>
                <img src={product1} alt="product-img" />
                <button
                    className='w-full py-2 bg-[#1c1c1c] absolute bottom-0 left-0 hover:bg-[#2995D7] opacity-0 invisible group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-8 transition-all duration-500'
                    onClick={(e) => { e.stopPropagation(); }}
                >
                    + Add to Cart
                </button>
            </div>
            <h2 className='font-semibold text-xl'>Ultra Max 2.01 Big Display</h2>
            <div className='flex gap-2'>
                <p className='text-[#ff4a4a] font-semibold text-xl'>$30.00</p>
                <del className='text-[#2995D7] font-medium line-through hidden'>$40.00</del>
            </div>
            <div className='flex-col gap-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-8 transition-all duration-500'>
                <div className='w-full h-[1px] bg-gray-600 my-2'></div>
                <div className='flex gap-5 justify-center text-[#2995D7] text-lg'>
                    <IoHeartOutline className='cursor-pointer' />
                    <div className='h-full w-[1px] bg-[#2995D7]'></div>
                    <MdOutlineCompareArrows className='cursor-pointer' />
                    <div className='h-full w-[1px] bg-[#2995D7]'></div>
                    <MdOutlineRemoveRedEye className='cursor-pointer' />
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
