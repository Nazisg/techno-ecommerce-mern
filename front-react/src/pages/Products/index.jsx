import React from 'react'
import PageHeader from '../../components/PageHeader'
import ProductCard from '../../components/ProductCard'
import { LuSettings2 } from "react-icons/lu";

function Products() {
  return (
    <div>
      <PageHeader route={'/products'} title={'Products'} />
      <div className='flex gap-4 justify-center py-8 md:py-10 px-6 md:px-8 w-full'>
        <div className='w-[25%] border border-[#636363]'>
          <div className='flex items-center gap-2 border-b py-3 px-4 border-b-[#636363]'>
            <LuSettings2 className='text-2xl' />
            <p className='text-2xl'>Filter</p>
          </div>
        </div>
        <div className='w-[75%] flex flex-col gap-2'>
          <div className='border border-[#636363] flex justify-between gap-3 items-center py-3 px-5'>
            <p>5 products viewed</p>
            <div className='flex gap-3 items-center'>
              <p>Sort by:</p>
              <select name="" id="" className='border border-[#636363] bg-transparent p-2'>
                <option className='bg-black' defaultValue={"best selling"} value="">best selling</option>
                <option className='bg-black' value="">A to Z</option>
                <option className='bg-black' value="">Z to A</option>
              </select>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 pt-5 md:pt-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products