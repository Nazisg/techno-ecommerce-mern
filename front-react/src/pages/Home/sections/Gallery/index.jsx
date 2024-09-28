import React from 'react';
import about1 from '../../../../assets/images/about-product-1.webp';
import about2 from '../../../../assets/images/about-product-2.webp';
import about3 from '../../../../assets/images/about-product-3.webp';
import about4 from '../../../../assets/images/about-product-4.webp';
import about5 from '../../../../assets/images/about-product-5.webp';
import about6 from '../../../../assets/images/about-product-6.webp';

function Gallery() {
    return (
        <div className='py-8 md:py-10 overflow-hidden'>
            <div className='flex min-w-[768px] overflow-hidden'>
                <div className='w-[300px] h-[300px] flex-shrink-0'>
                    <img src={about1} alt="about-image" className='w-full h-full object-cover' />
                </div>
                <div className='w-[300px] h-[300px] flex-shrink-0'>
                    <img src={about2} alt="about-image" className='w-full h-full object-cover' />
                </div>
                <div className='w-[300px] h-[300px] flex-shrink-0'>
                    <img src={about3} alt="about-image" className='w-full h-full object-cover' />
                </div>
                <div className='w-[300px] h-[300px] flex-shrink-0'>
                    <img src={about4} alt="about-image" className='w-full h-full object-cover' />
                </div>
                <div className='w-[300px] h-[300px] flex-shrink-0'>
                    <img src={about5} alt="about-image" className='w-full h-full object-cover' />
                </div>
                <div className='w-[300px] h-[300px] flex-shrink-0'>
                    <img src={about6} alt="about-image" className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
