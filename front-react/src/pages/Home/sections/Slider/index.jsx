import React from 'react';
import Slider from "react-slick";
import banner1 from '../../../../assets/images/banner-1.webp';
import banner2 from '../../../../assets/images/banner-2.webp';
import banner3 from '../../../../assets/images/banner-3.webp';
import img1 from '../../../../assets/images/banner-img-1.avif';
import img2 from '../../../../assets/images/banner-img-2.avif';
import SliderCard from '../../../../components/SliderCard';
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
                <SliderCard image={banner1} />
                <SliderCard image={banner2} />
                <SliderCard image={banner3} />
            </Slider>
            <img src={img1} alt="bannerImg" className='absolute top-0 left-0 animate md:block hidden' />
            <img src={img2} alt="bannerImg" className='absolute bottom-0 right-0 animate md:block hidden' />
        </section>)
}

export default BannerSlider