import React from 'react';

function CategoryCard({ category }) {
    return (
        <div className='w-48'>
            <div className='flex flex-col gap-3 text-white justify-center items-center cursor-pointer'>
                <div className='bg-[#262626] w-44 h-44 rounded-full flex justify-center items-center p-3'>
                    <img 
                        src={category.image} 
                        alt={category.title} 
                        className='w-full h-full object-scale-down hover:scale-125 duration-300' 
                    />
                </div>
                <h4>{category.title}</h4>
            </div>
        </div>
    )
}

export default CategoryCard;
