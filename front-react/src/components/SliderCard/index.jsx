import React from 'react'

function SliderCard({ image }) {
    return (
        <div className="relative h-[90vh]">
            <img src={image} alt="Banner 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex justify-center items-center">
                <div className='flex flex-col gap-3 text-white justify-center items-center relative'>
                    <p className='text-lg md:text-xl lg:text-2xl'>Flat 30% off. on all Digital</p>
                    <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl outlined-text font-semibold'>HEADPHONE</h2>
                    <button className='bg-[#2996d8] py-2 px-5'>Shop Now</button>
                </div>
            </div>
        </div>)
}

export default SliderCard