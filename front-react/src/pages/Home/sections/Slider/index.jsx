import React from 'react';
import Slider from "react-slick";
import banner1 from '../../../../assets/images/banner-1.webp';
import banner2 from '../../../../assets/images/banner-2.webp';
import banner3 from '../../../../assets/images/banner-3.webp';
import img1 from '../../../../assets/images/banner-img-1.avif';
import img2 from '../../../../assets/images/banner-img-2.avif';
import '../../Home.scss';

function BannerSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, 
    };
    return (
        <section className='slider relative h-[90vh]'>
            <Slider {...settings}>
                <div className="relative h-[90vh]">
                    <img src={banner1} alt="Banner 1" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className='flex flex-col gap-3 text-white justify-center items-center relative'>
                            <p className='text-2xl'>Flat 30% off. on all Digital</p>
                            <h2 className='text-8xl outlined-text font-semibold'>HEADPHONE</h2>
                            <button className='bg-[#2996d8] py-2 px-5'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="relative h-[90vh] ">
                    <img src={banner2} alt="Banner 1" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className='flex flex-col gap-3 text-white justify-center items-center'>
                            <p className='text-2xl'>Flat 30% off. on all Digital</p>
                            <h2 className='text-8xl outlined-text font-semibold'>IPHONE15</h2>
                            <button className='bg-[#2996d8] py-2 px-5'>Shop Now</button>
                        </div>
                    </div>
                    <img src={img1} alt="bannerImg" />
                </div>
                <div className="relative h-[90vh]">
                    <img src={banner3} alt="Banner 1" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className='flex flex-col gap-3 text-white justify-center items-center'>
                            <p className='text-2xl'>Flat 30% off. on all Digital</p>
                            <h2 className='text-8xl outlined-text font-semibold'>SPEAKER</h2>
                            <button className='bg-[#2996d8] py-2 px-5'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </Slider>
            <img src={img1} alt="bannerImg" className='absolute top-0 left-0 animate' />
            <img src={img2} alt="bannerImg" className='absolute bottom-0 right-0 animate' />
        </section>)
}

export default BannerSlider