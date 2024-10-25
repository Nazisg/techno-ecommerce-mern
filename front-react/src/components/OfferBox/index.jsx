import React, { useEffect, useState } from 'react';
import { FaRegStar } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { LuShoppingBasket } from "react-icons/lu";
import { MdOutlineCompareArrows, MdOutlineRemoveRedEye } from "react-icons/md";
import TimeBlock from '../TimeBlock';

function OfferBox({ timer, id, title, price, salePrice, imageUrl }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const calculateDiscount = () => {
        if (price && salePrice) {
            return Math.round(((price - salePrice) / price) * 100);
        }
        return 0;
    };
    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    function calculateTimeLeft() {
        const targetDate = new Date("2025-01-01T00:00:00");
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }
    const discount = calculateDiscount();
    return (
        <div className='bg-[#1c1c1c] p-4'>
            <div className='border border-[#636363] min-h-[288px] p-4 flex flex-col md:flex-row gap-2 group items-center'>
                <div className='w-[230px] h-[230px] relative'>
                    <img 
                        src={imageUrl} 
                        alt={title} 
                        className='w-full h-full object-cover' 
                    />
                    <div className='flex flex-col gap-2 absolute text-sm py-1 px-2 top-0 left-0'>
                        <div className='bg-primary-blue py-[2px] px-2'>New</div>
                        {discount > 0 && (
                            <div className='bg-primary-blue py-[2px] px-2'>
                                -{discount}% 
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex flex-col items-start gap-3'>
                    <h2 className='font-semibold text-xl md:text-2xl capitalize text-ellipsis overflow-hidden w-full whitespace-nowrap'>{title}</h2>
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
                    
                    {timer && (
                        <div className="grid grid-cols-4 gap-2">
                            <TimeBlock label="days" value={timeLeft?.days || 0} />
                            <TimeBlock label="hrs" value={timeLeft?.hours || 0} />
                            <TimeBlock label="mins" value={timeLeft?.minutes || 0} />
                            <TimeBlock label="secs" value={timeLeft?.seconds || 0} />
                        </div>
                    )}
                    <div className='flex gap-2 items-center'>
                        <button 
                            className='bg-[#2996d8] text-sm flex gap-2 items-center text-white py-3 px-4 md:px-8 hover:bg-[#1a6ca8] transition-all'
                            aria-label="Add to Cart"
                        >
                            <LuShoppingBasket /> <p className='hidden md:block'>Add to Cart</p>
                        </button>
                        <div className='flex gap-2 justify-center text-white text-lg opacity-100 md:opacity-0 md:invisible md:group-hover:visible md:group-hover:opacity-100 md:transform md:group-hover:translate-x-0 md:-translate-x-8 md:transition-all md:duration-500 md:ease-out'>
                            <div className='w-[43px] h-[43px] flex justify-center items-center bg-primary-blue cursor-pointer' aria-label="Add to Wishlist">
                                <IoHeartOutline />
                            </div>
                            <div className='w-[43px] h-[43px] flex justify-center items-center bg-primary-blue cursor-pointer' aria-label="Compare">
                                <MdOutlineCompareArrows />
                            </div>
                            <div className='w-[43px] h-[43px] flex justify-center items-center bg-primary-blue cursor-pointer' aria-label="Quick View">
                                <MdOutlineRemoveRedEye />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OfferBox;
