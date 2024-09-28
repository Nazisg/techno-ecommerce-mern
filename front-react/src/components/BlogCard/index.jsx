import React from 'react'
import blog1 from '../../assets/images/blog-1.webp'

function BlogCard() {
    return (
        <div className='flex flex-col gap-3 border border-[#636363]'>
            <div className='w-full h-[300px]'>
                <img src={blog1} alt="blog-image" className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col gap-2 p-4'>
                <p className='text-sm'>01 May, 2024</p>
                <h3 className='text-base md:text-[22px] font-semibold'>the Melodies of Mobile Technology</h3>
                <p className='text-sm md:text-base'>In the symphony of modern living, technology orchestrates a constant rhythm, shaping our daily routines and interactions.</p>
            </div>
        </div>
    )
}

export default BlogCard