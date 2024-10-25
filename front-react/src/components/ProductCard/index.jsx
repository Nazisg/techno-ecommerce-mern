import React from 'react';
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineCompareArrows, MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { addToCart } from '../../redux/services/cartSlice'; // Adjust the import path

function ProductCard({ id, title, price, salePrice, imageUrl }) {
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Initialize dispatch
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Adjust the path according to your state structure

    const handleCardClick = () => {
        navigate(`/products/${id}`); 
    };

    const handleAddToCartClick = (e) => {
        e.stopPropagation(); // Prevents the card click event from firing
        if (isLoggedIn) {
            // Dispatch the addToCart action
            dispatch(addToCart({ id, title, price, salePrice, imageUrl, quantity: 1 }));
            console.log('Item added to cart'); // You can replace this with a toast notification or feedback
        } else {
            navigate('/login'); // Redirect to login page
        }
    };

    return (
        <div
            className='bg-[#1c1c1c] p-4 flex flex-col gap-3 group relative hover:cursor-pointer'
            onClick={handleCardClick}
        >
            <div className='bg-[#262626] relative flex justify-center items-center'>
                <img src={imageUrl} alt="product-img" />
                <button
                    className='w-full py-2 bg-[#1c1c1c] absolute bottom-0 left-0 hover:bg-[#2995D7] opacity-0 invisible group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-8 transition-all duration-500'
                    onClick={handleAddToCartClick} // Use the new handler
                >
                    + Add to Cart
                </button>
            </div>
            <h2 className='font-semibold text-xl capitalize text-ellipsis overflow-hidden w-full whitespace-nowrap'>{title}</h2>
            <div className='flex gap-2 items-center'>
                {salePrice ? (
                    <>
                        <p className='text-[#ff4a4a] font-semibold text-xl'>${salePrice}</p>
                        <del className='text-[#2995D7] font-medium line-through'>${price}</del>
                    </>
                ) : (
                    <p className='text-[#ff4a4a] font-semibold text-xl'>${price}</p>
                )}
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
