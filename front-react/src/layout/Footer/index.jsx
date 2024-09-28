import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import bg from '../../assets/images/footer-bg.webp';
import { IoIosSend } from "react-icons/io";

function Footer() {
  return (
    <div className=' pt-6 md:pt-10 lg:pl-8 relative'>
      <div className='flex justify-between items-start'>
        <h2 className='font-bold text-[40px] sm:text-[50px] md:text-[70px] lg:text-[90px] z-50 pl-8'>Techno</h2>
        <img src={bg} alt="bg" className='hidden lg:block absolute bottom-0 right-0' />
      </div>
      <div className='relative bottom-0 left-0 w-full lg:w-[80%] bg-[#1C1C1C]'>
        <div className='py-6 px-8 flex flex-col gap-8'>
          <div className='flex gap-3 flex-col md:flex-row justify-between items-center md:items-start'>
            <div className='flex flex-col gap-2 w-full md:w-auto items-center md:items-start'>
              <h3 className='text-[22px] font-bold hidden md:block'>Subscribe To Our Newsletter</h3>
              <form className='flex gap-2 w-full md:w-auto'>
                <div className='w-full md:w-auto'>
                  <input type="text" className='sm:py-2 sm:px-4 py-1 px-2 w-full md:w-auto' placeholder="Enter email address..." />
                </div>
                <button className='bg-primary-blue text-white sm:py-2 sm:px-6 py-1 px-4'><p className='hidden sm:block'>Subscribe</p> <IoIosSend className='block sm:hidden' />
                </button>
              </form>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-[22px] font-bold hidden md:block'>Join Our Social Media</h3>
              <div className='flex gap-4 justify-end'>
                <div className='flex justify-center items-center bg-white w-[25px] h-[25px] rounded-full cursor-pointer'>
                  <FaFacebookF className='text-black' />
                </div>
                <div className='flex justify-center items-center bg-white w-[25px] h-[25px] rounded-full cursor-pointer'>
                  <FaXTwitter className='text-black' />
                </div>
                <div className='flex justify-center items-center bg-white w-[25px] h-[25px] rounded-full cursor-pointer'>
                  <FaYoutube className='text-black' />
                </div>
                <div className='flex justify-center items-center bg-white w-[25px] h-[25px] rounded-full cursor-pointer'>
                  <FaPinterestP className='text-black' />
                </div>
                <div className='flex justify-center items-center bg-white w-[25px] h-[25px] rounded-full cursor-pointer'>
                  <FaInstagram className='text-black' />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col gap-2 text-sm'>
              <h4 className='text-base sm:text-[22px] sm:pb-2 font-semibold'>COMPANY</h4>
              <p>Search</p>
              <p>All collections</p>
              <p>All Products</p>
              <p>My cart</p>
            </div>

            <div className='flex flex-col gap-2 text-sm'>
              <h4 className='text-base sm:text-[22px] sm:pb-2 font-semibold'>INFORMATION</h4>
              <p>airpods</p>
              <p>headphones</p>
              <p>laptops</p>
              <p>mobiles</p>
              <p>smart-watches</p>
              <p>speaker</p>
            </div>

            <div className='flex flex-col gap-2 text-sm'>
              <h4 className='text-base sm:text-[22px] sm:pb-2 font-semibold'>SHOP</h4>
              <p>Apple iPhone 15 pro max</p>
              <p>OnePlus 11</p>
              <p>Oppo F25 Pro</p>
              <p>OnePlus 11</p>
            </div>

            <div className='flex flex-col gap-2 text-sm'>
              <h4 className='text-base sm:text-[22px] sm:pb-2 font-semibold'>USEFULL LINK</h4>
              <p>About us</p>
              <p>Contact</p>
              <p>FAQ's</p>
              <p>Privacy Policy</p>
              <p>Shipping & Return</p>
              <p>Terms & Condition</p>
            </div>
          </div>
        </div>
        <div className='bg-white text-black py-[10px] px-8 text-sm '>
          © 2024, Techno WorkDo, Powered by WorkDo.io
        </div>
      </div>
    </div>
  )
}

export default Footer