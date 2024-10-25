import React from 'react'
import ProductCard from '../../../../components/ProductCard'
import Title from '../../../../components/Title'
import { useGetProductsQuery } from '../../../../redux/services/productsApi';

function TopNewArrivals() {
    const { data: products, error, isLoading } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <section className='categories bg-black py-8 md:py-10'>
            <Title title={"TOP NEW ARRIVALS"} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-6 md:pt-8">
                {products.slice(3,7)?.map((product) => (
                    <ProductCard
                        key={product._id}
                        id={product._id}
                        title={product.title}
                        price={product.price}
                        salePrice={product?.salePrice}
                        imageUrl={product.mainImageUrl}
                    />
                ))}
            </div>
        </section>
    )
}

export default TopNewArrivals