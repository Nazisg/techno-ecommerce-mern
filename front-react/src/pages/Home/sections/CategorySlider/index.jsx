import React from 'react';
import Slider from "react-slick";
import CategoryCard from '../../../../components/CategoryCard';
import CollectionCard from '../../../../components/CollectionCard';
import Title from '../../../../components/Title';
import { useGetCategoriesQuery } from '../../../../redux/services/categoryApi';
import boxImg1 from '../../../../assets/images/box-image-1.webp'
import boxImg2 from '../../../../assets/images/box-image-2.webp'

function CategorySlider() {
    const { data: categories, isLoading, isError } = useGetCategoriesQuery();

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

    if (isLoading) {
        return <div className="text-white">Loading...</div>;
    }

    if (isError) {
        return <div className="text-white">Error fetching categories</div>;
    }

    return (
        <section className='categories bg-black py-8 md:py-10'>
            <Title titile={"TRENDING CATEGORIES"} />
            <div className="slider-container pt-6 md:pt-8 px-8">
                <Slider {...settings}>
                    {categories?.map(category => (
                        <CategoryCard key={category._id} category={category} />
                    ))}
                </Slider>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:pt-10 px-2 md:px-8'>
                <CollectionCard title={"New Collection"} subtitle={"Sony Mdr 10rbt"} img={boxImg1} />
                <CollectionCard title={"Best New"} subtitle={"MacBook Pro"} img={boxImg2} />
            </div>
        </section>
    )
}

export default CategorySlider;
