import React from 'react';
import Slider from "react-slick";
import CategoryCard from '../../../../components/CategoryCard';
import CollectionCard from '../../../../components/CollectionCard';
import Title from '../../../../components/Title';

function CategorySlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 4, 
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2, 
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <section className='categories bg-black py-8 md:py-10'>
            <Title titile={"TRENDING CATEGORIES"} />
            <div className="slider-container pt-6 md:pt-8 px-8">
                <Slider {...settings}>
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                </Slider>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:pt-10 px-2 md:px-8'>
                <CollectionCard />
                <CollectionCard />
            </div>
        </section>
    )
}

export default CategorySlider