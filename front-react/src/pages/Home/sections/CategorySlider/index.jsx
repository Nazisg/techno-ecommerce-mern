import React from 'react'
import Slider from "react-slick";
import category1 from '../../../../assets/images/category-1.webp'
import boxImg1 from '../../../../assets/images/box-image-1.webp'
function CategorySlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,

    };
    return (
        <section className='categories bg-black py-10 px-8'>
            <h3 className='text-4xl text-white font-semibold'>TRENDING CATEGORIES</h3>
            <div className="slider-container pt-8">
                <Slider {...settings}>
                    <div className='w-48'>
                        <div className='flex flex-col gap-3 text-white justify-center items-center cursor-pointer'>
                            <div className='bg-[#262626] w-44 h-44 rounded-full flex justify-center items-center p-3'>
                                <img src={category1} alt="category" className='w-full h-full object-scale-down hover:scale-125 duration-300' />
                            </div>
                            <h4>iPhone</h4>
                        </div>
                    </div>
                    <div className='w-48'>
                        <div className='flex flex-col gap-3 text-white justify-center items-center'>
                            <div className='bg-[#262626] w-44 h-44 rounded-full flex justify-center items-center p-3'>
                                <img src={category1} alt="category" className='w-full h-full object-scale-down' />
                            </div>
                            <h4>iPhone</h4>
                        </div>
                    </div>
                    <div className='w-48'>
                        <div className='flex flex-col gap-3 text-white justify-center items-center'>
                            <div className='bg-[#262626] w-44 h-44 rounded-full flex justify-center items-center p-3'>
                                <img src={category1} alt="category" className='w-full h-full object-scale-down' />
                            </div>
                            <h4>iPhone</h4>
                        </div>
                    </div>
                    <div className='w-48'>
                        <div className='flex flex-col gap-3 text-white justify-center items-center'>
                            <div className='bg-[#262626] w-44 h-44 rounded-full flex justify-center items-center p-3'>
                                <img src={category1} alt="category" className='w-full h-full object-scale-down' />
                            </div>
                            <h4>iPhone</h4>
                        </div>
                    </div>
                    <div className='w-48'>
                        <div className='flex flex-col gap-3 text-white justify-center items-center'>
                            <div className='bg-[#262626] w-44 h-44 rounded-full flex justify-center items-center p-3'>
                                <img src={category1} alt="category" className='w-full h-full object-scale-down' />
                            </div>
                            <h4>iPhone</h4>
                        </div>
                    </div>
                    <div className='w-48'>
                        <div className='flex flex-col gap-3 text-white justify-center items-center'>
                            <div className='bg-[#262626] w-44 h-44 rounded-full flex justify-center items-center p-3'>
                                <img src={category1} alt="category" className='w-full h-full object-scale-down' />
                            </div>
                            <h4>iPhone</h4>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className='flex gap-5 container pt-10 '>
                <div className='relative w-full h-96 overflow-hidden'>
                    <img src={boxImg1} alt="box-img" className='object-cover absolute top-0 left-0 w-full h-full z-0 hover:scale-125 duration-300' />
                    <div className='absolute  top-0 left-0 z-10 h-full w-full flex justify-center items-center'>
                        <div className='flex flex-col gap-4 items-center'>
                            <h3 className='text-lg'>Sony Mdr 10rbt</h3>
                            <h2 className='text-4xl font-bold'>New Collection
                            </h2>
                            <button className='bg-[#2996d8] py-2 px-5'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='relative w-full h-96 overflow-hidden'>
                    <img src={boxImg1} alt="box-img" className='object-cover absolute top-0 left-0 w-full h-full z-0 hover:scale-125 duration-300' />
                    <div className='absolute  top-0 left-0 z-10 h-full w-full flex justify-center items-center'>
                        <div className='flex flex-col gap-4 items-center'>
                            <h3 className='text-lg'>Sony Mdr 10rbt</h3>
                            <h2 className='text-4xl font-bold'>New Collection
                            </h2>
                            <button className='bg-[#2996d8] py-2 px-5'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategorySlider