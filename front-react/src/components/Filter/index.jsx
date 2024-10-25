import React, { useState } from 'react';
import { LuSettings2 } from "react-icons/lu";

function Filter({ onFilterChange }) {
  // State for filter controls
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [isOnSale, setIsOnSale] = useState(false);

  const productTypes = ['speaker', 'iPhone', 'headphones', 'laptops', 'airpods'];

  // Handle changes and apply filters
  const handlePriceChange = () => {
    onFilterChange({
      minPrice: parseFloat(minPrice) || 0,
      maxPrice: parseFloat(maxPrice) || Infinity,
      selectedTypes,
      isOnSale,
    });
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prevTypes) =>
      prevTypes.includes(type)
        ? prevTypes.filter((item) => item !== type)
        : [...prevTypes, type]
    );
  };

  return (
    <div className="w-[25%] border border-[#636363]">
      <div className="flex items-center gap-2 border-b py-3 px-4 border-b-[#636363]">
        <LuSettings2 className="text-2xl" />
        <p className="text-2xl">Filter</p>
      </div>

      {/* Price Filter */}
      <div className="p-2 border-b border-b-[#636363] text-sm">
        <div className="bg-[#262626] p-2 text-base">Price</div>
        <div className="flex flex-col gap-3 p-2">
          <div className="flex justify-between text-xs">
            <p>The highest price is $50.00</p>
            <button onClick={() => setMinPrice('') || setMaxPrice('')}>Reset</button>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col gap-2">
                Min price:
                <input
                  type="text"
                  className="p-2 border border-[#636363] bg-transparent"
                  placeholder="0"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  onBlur={handlePriceChange}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col gap-2">
                Max price:
                <input
                  type="text"
                  className="p-2 border border-[#636363] bg-transparent"
                  placeholder="50.00"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  onBlur={handlePriceChange}
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Product Type Filter */}
      <div className="p-2 border-b border-b-[#636363] text-sm">
        <div className="bg-[#262626] p-2 text-base">Product type</div>
        <div className="p-2">
          <div className="flex justify-between text-xs">
            <p>{selectedTypes.length} selected</p>
            <button onClick={() => setSelectedTypes([])}>Reset</button>
          </div>
          {productTypes.map((type) => (
            <div key={type} className="flex justify-between text-xs">
              <label className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeChange(type)}
                />
                {type}
              </label>
              <p>5</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sale Filter */}
      <div className="p-2 border-b border-b-[#636363] text-sm">
        <div className="bg-[#262626] p-2 text-base">Sale</div>
        <div className="p-2">
          <div className="flex justify-between text-xs">
            <p>{isOnSale ? 'Selected' : 'Not Selected'}</p>
            <button onClick={() => setIsOnSale(false)}>Reset</button>
          </div>
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={isOnSale}
              onChange={() => setIsOnSale(!isOnSale)}
            />
            Sale
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
