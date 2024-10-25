import React from 'react';
import Title from '../../../../components/Title';
import OfferBox from '../../../../components/OfferBox';
import { useGetProductsQuery } from '../../../../redux/services/productsApi';

function LimitedTimeOffer() {
    const { data: products, error, isLoading } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className='py-8 md:py-10 px-6 md:px-8'>
            <Title title={"LIMITED TIME OFFER"} />
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 pt-8'>
            {products
    .slice(3, 8)
    ?.filter((product) => product.salePrice) // Filter products that have a salePrice
    .map((product) => (
        <OfferBox
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            salePrice={product.salePrice} // No need for optional chaining if it's already filtered
            imageUrl={product.mainImageUrl}
            timer={true}
        />
    ))
}

            </div>
        </div>
    );
}

export default LimitedTimeOffer;
