import React from 'react';
import './Home.scss';
import BlogPosts from './sections/BlogPosts';
import CategorySlider from './sections/CategorySlider';
import DiscountBanner from './sections/DiscountBanner';
import Feedback from './sections/Feedback';
import LimitedTimeOffer from './sections/LimitedTimeOffer';
import OfferBanner from './sections/OfferBanner';
import Patners from './sections/Partners';
import Products from './sections/Products';
import BannerSlider from './sections/Slider';
import TopNewArrivals from './sections/TopNewArrivals';
import Gallery from './sections/Gallery';

function Home() {

  return (
    <>
      <BannerSlider />
      <CategorySlider />
      <Products />
      <DiscountBanner />
      <TopNewArrivals />
      <LimitedTimeOffer />
      <OfferBanner />
      <Feedback />
      <BlogPosts />
      <Patners />
      <Gallery/>
    </>
  );
}

export default Home;
