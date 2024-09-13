import React from 'react';
import './Home.scss';
import BannerSlider from './sections/Slider';
import Slider from "react-slick";
import category1 from '../../assets/images/category-1.webp'
function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

  };

  return (
    <>
      <BannerSlider />
      <section className='categories bg-black'>
        <h3 className='text-4xl text-white'>TRENDING CATEGORIES</h3>
        <div className="slider-container">
          <Slider {...settings}>
            <div className='w-52'>
              <div className='flex flex-col gap-3'>
                <div className='bg-[#262626] w-52 h-52 rounded-full flex justify-center items-center p-6'>
                  <img src={category1} alt="category"  className='w-full h-full object-fill'/>
                </div>
                <h4>iPhone</h4>
              </div>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Home;
