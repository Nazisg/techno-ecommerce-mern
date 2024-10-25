import React from 'react';
import ProductCard from '../../../../components/ProductCard';
import Title from '../../../../components/Title';
import { useGetProductsQuery } from '../../../../redux/services/productsApi';

function Products() {
    const { data: products, error, isLoading } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <section className='categories bg-black py-8 md:py-10 px-6 md:px-8'>
            <Title title={"TRENDING PRODUCTS"} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-6 md:pt-8">
                {products?.map((product) => (
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
    );
}

export default Products;
