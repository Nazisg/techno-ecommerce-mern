import React from 'react'
import { Link } from 'react-router-dom'

function CollectionCard({title, subtitle, img}) {
    return (
        <div className='relative w-full h-[200px] sm:h-[250px] md:h-96 overflow-hidden'>
            <img src={img} alt="box-img" className='object-cover absolute top-0 left-0 w-full h-full z-0 hover:scale-125 duration-300' />
            <div className='absolute  top-0 left-0 z-10 h-full w-full flex justify-center items-center'>
                <div className='flex flex-col gap-2 md:gap-4 items-center'>
                    <h3 className='text-sm md:text-lg'>{subtitle}</h3>
                    <h2 className='text-2xl md:text-4xl font-bold'>{title}</h2>
                    <Link to="/products"><button className='bg-[#2996d8] py-2 px-5'>Shop Now</button></Link>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard