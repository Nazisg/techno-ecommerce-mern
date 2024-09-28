import React from 'react'
import offerBanner from '../../../../assets/images/offer-banner.webp'
function OfferBanner() {
    return (
        <div className='py-8 md:py-10 px-6 md:px-8'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-4 items-center'>
                    <h3 className='text-base md:text-lg text-primary-blue'>Hurry Up!
                    </h3>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white w-[70%] text-center'>Up To 25% Discount Check it Out</h2>
                    <button className='bg-[#2996d8] text-sm text-white py-2 px-6 hover:bg-[#1a6ca8] transition-all'>Shop Now</button>
                </div>
                <div className='w-[280px] hidden md:block'>
                    <img src={offerBanner} alt="offer-banner" className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default OfferBanner