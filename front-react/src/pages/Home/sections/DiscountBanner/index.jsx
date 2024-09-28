import React from 'react'
import discountBanner from '../../../../assets/images/discount-banner.webp'

function DiscountBanner() {
    return (
        <div className='py-8 md:py-10 px-6 md:px-8'>
            <div className='relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden'>
                <img src={discountBanner} alt="box-img" className='object-cover absolute top-0 left-0 w-full h-full z-0' />
                <div className='absolute top-0 left-0 z-10 h-full w-full flex justify-center items-start p-10 bg-black/60'>
                    <div className='flex flex-col gap-2 md:gap-4 items-center'>
                        <h3 className='text-sm md:text-lg text-white'>BIG DISCOUNT</h3>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center'>Apple iPhone 15 pro max</h2>
                        <div className='flex gap-2'>
                            <p className='text-primary-red text-xl md:text-2xl font-bold'>$50.00</p>
                            <del className='text-primary-blue text-lg md:text-xl font-semibold line-through'>$55.00</del>
                        </div>
                        <button className='bg-[#2996d8] text-lg md:text-xl text-white py-3 px-8 hover:bg-[#1a6ca8] transition-all'> + Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscountBanner