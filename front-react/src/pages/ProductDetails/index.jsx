import React, { useState } from 'react';
import { LuShoppingBasket } from 'react-icons/lu';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PageHeader from '../../components/PageHeader';
import TopNewArrivals from '../Home/sections/TopNewArrivals';
import { useGetProductQuery } from '../../redux/services/productsApi';
import { addToCart } from '../../redux/services/cartSlice';

function ProductDetails() {
  const { id } = useParams(); // Get the product ID from the URL
  const { data: product, error, isLoading } = useGetProductQuery(id); // Use the query hook with the ID
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1); // Manage product quantity

  // Handle quantity increment
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  // Handle quantity decrement, ensuring it doesn't go below 1
  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  // Handle add to cart functionality
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching product details.</div>;

  return (
    <div>
      <PageHeader title="Products Page" />
      <div className="py-8 md:py-10 px-6 md:px-8">
        <div className="flex gap-3 w-full">
          <div className="w-[40%]">
            <img
              src={product.mainImageUrl}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[60%] flex flex-col gap-5">
            <h2 className="text-[20px] xl:text-[40px] font-semibold capitalize text-ellipsis overflow-hidden w-full whitespace-nowrap">
              {product.title}
            </h2>
            <div className="flex gap-2 items-center">
              <p className="text-[#ff4a4a] font-semibold text-xl">
                ${product.salePrice || product.price}
              </p>
              {product.salePrice && (
                <del className="text-[#2995D7] font-medium line-through">
                  ${product.price}
                </del>
              )}
            </div>
            <p>{product.desc}</p>
            <div className="flex gap-3 items-center">
              <div className="flex items-start">
                <button
                  onClick={decrementQuantity}
                  className="w-10 h-10 flex justify-center items-center p-1 bg-white text-black cursor-pointer"
                >
                  -
                </button>
                <div className="w-10 h-10 flex justify-center items-center p-1 bg-white text-black">
                  {quantity}
                </div>
                <button
                  onClick={incrementQuantity}
                  className="w-10 h-10 flex justify-center items-center p-1 bg-white text-black cursor-pointer"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-[#2996d8] items-center text-sm flex gap-2 text-white py-3 px-4 md:px-8 hover:bg-[#1a6ca8] transition-all"
              >
                <LuShoppingBasket /> <p className="hidden md:block">Add to Cart</p>
              </button>
            </div>
            <div className="w-full h-[1px] bg-[#636363]"></div>
            <div className="flex gap-3 items-center">
              <h5>CATEGORIES:</h5>
              <p>{product.category?.[0]?.title}</p>
            </div>
          </div>
        </div>
        <TopNewArrivals />
      </div>
    </div>
  );
}

export default ProductDetails;
