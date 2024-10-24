import React from 'react'
import PageHeader from '../../components/PageHeader'
import ProductCard from '../../components/ProductCard'
import { LuSettings2 } from "react-icons/lu";

function Products() {
  return (
    <div>
      <PageHeader route={'/products'} title={'Products'} />
      <div className='flex gap-4 justify-center items-start py-8 md:py-10 px-6 md:px-8 w-full'>
        <div className='hidden xl:block w-[25%] border border-[#636363]'>
          <div className='flex items-center gap-2 border-b py-3 px-4 border-b-[#636363]'>
            <LuSettings2 className='text-2xl' type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example" />
            <p className='text-2xl'>Filter</p>
          </div>
          <div className='p-2 border-b border-b-[#636363] text-sm'>
            <div className='bg-[#262626] p-2 text-base'>Price
            </div>
            <div className='flex flex-col gap-3 p-2'>
              <div className='text-xs flex justify-between gap-2 items-center'>
                <p>The highest price is $50.00
                </p>
                <p>Reset</p>
              </div>
              <div className='flex gap-3 w-full'>
                <div className='flex flex-col gap-3 w-1/2'>
                  <div>
                    <label htmlFor="" className='flex flex-col gap-2'>
                      Min price:
                      <input type="text" className='w-full p-2 border border-[#636363] bg-transparent' placeholder='0' />
                    </label>
                  </div>
                </div>
                <div className='flex flex-col gap-3 w-1/2'>
                  <div>
                    <label htmlFor="" className='flex flex-col gap-2'>
                      Max price:
                      <input type="text" className='w-full p-2 border border-[#636363] bg-transparent' placeholder='50.00' />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='p-2 border-b border-b-[#636363] text-sm'>
            <div className='bg-[#262626] p-2 text-base'>Product type
            </div>
            <div className='flex flex-col gap-3 p-2'>
              <div className='text-xs flex justify-between gap-2 items-center'>
                <p>0 selected</p>
                <p>Reset</p>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex items-center justify-between gap-2 text-xs'>
                  <label className='flex gap-1 items-center'> <input type="checkbox" className='' name="" id="" /> speaker</label>
                  <p>5</p>
                </div>
                <div className='flex items-center justify-between gap-2 text-xs'>
                  <label className='flex gap-1 items-center'> <input type="checkbox" className='' name="" id="" /> iPhone</label>
                  <p>5</p>
                </div>
                <div className='flex items-center justify-between gap-2 text-xs'>
                  <label className='flex gap-1 items-center'> <input type="checkbox" className='' name="" id="" /> headphones</label>
                  <p>5</p>
                </div>
                <div className='flex items-center justify-between gap-2 text-xs'>
                  <label className='flex gap-1 items-center'> <input type="checkbox" className='' name="" id="" /> laptops</label>
                  <p>5</p>
                </div>
                <div className='flex items-center justify-between gap-2 text-xs'>
                  <label className='flex gap-1 items-center'> <input type="checkbox" className='' name="" id="" /> airpods</label>
                  <p>5</p>
                </div>
              </div>
            </div>
          </div>
          <div className='p-2 border-b border-b-[#636363] text-sm'>
            <div className='bg-[#262626] p-2 text-base'>Product type
            </div>
            <div className='flex flex-col gap-3 p-2'>
              <div className='text-xs flex justify-between gap-2 items-center'>
                <p>0 selected</p>
                <p>Reset</p>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex items-center justify-between gap-2 text-xs'>
                  <label className='flex gap-1 items-center'> <input type="checkbox" className='' name="" id="" /> sale</label>
                  <p>5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full xl:w-[75%] flex flex-col gap-2'>
          <div className='border border-[#636363] flex justify-between gap-3 items-center py-3 px-5'>
            <div className='flex gap-2 items-center'>
              <LuSettings2 className='block xl:hidden text-2xl' type="button"
                data-twe-offcanvas-toggle
                data-twe-target="#offcanvasExample"
                aria-controls="offcanvasExample"
                data-twe-ripple-init
                data-twe-ripple-color="light" />
              {/* drawer component  */}
              <div
                className="invisible fixed bottom-0 left-0 top-0 z-[1045] flex w-96 max-w-full -translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out data-[twe-offcanvas-show]:transform-none dark:bg-body-dark dark:text-white"
                tabindex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
                data-twe-offcanvas-init>
                <div className="flex items-center justify-between p-4">
                  <h5
                    className="mb-0 font-semibold leading-normal"
                    id="offcanvasExampleLabel">
                    Offcanvas
                  </h5>
                  <button
                    type="button"
                    className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                    data-twe-offcanvas-dismiss
                    aria-label="Close">
                    <span className="[&>svg]:h-6 [&>svg]:w-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="flex-grow overflow-y-auto p-4">
                  <div>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                  </div>
                 
                </div>
              </div>
              <p>5 products viewed</p>
            </div>
            <div className='hidden xl:flex gap-3 items-center'>
              <p>Sort by:</p>
              <select name="" id="" className='border border-[#636363] bg-transparent p-2'>
                <option className='bg-black' defaultValue={"Featured"} value="">Featured</option>
                <option className='bg-black' value="">Alphabetically, A-Z</option>
                <option className='bg-black' value="">Alphabetically, Z-A</option>
                <option className='bg-black' value="">Price, low to high</option>
                <option className='bg-black' value="">Price, high to low</option>
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