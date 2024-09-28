import React from 'react'
import ProductCard from '../../../../components/ProductCard'
import Title from '../../../../components/Title'

function TopNewArrivals() {
    return (
        <section className='categories bg-black py-8 md:py-10 px-6 md:px-8'>
            <Title ttile={"TOP NEW ARRIVALS"} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-4 lg:pt-6">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    )
}

export default TopNewArrivals