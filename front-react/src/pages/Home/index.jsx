import React from 'react';
import './Home.scss';
import CategorySlider from './sections/CategorySlider';
import BannerSlider from './sections/Slider';
import Products from './sections/Products';

function Home() {

  return (
    <>
      <BannerSlider />
      <CategorySlider />
      <Products/>
    </>
  );
}

export default Home;
