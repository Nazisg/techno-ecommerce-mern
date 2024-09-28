import React from 'react';
import { FaRegStar } from "react-icons/fa";
import icon from '../../../../assets/images/testimonial-icon.avif';
import profile from '../../../../assets/images/testimonial-image.webp';
import Title from '../../../../components/Title';
function Feedback() {
    return (
        <div className='py-8 md:py-10 px-6 md:px-8'>
            <Title title={"OUR CUSTOMER FEEDBACK"} />
            <div className='flex flex-col md:flex-row gap-6 pt-6'>
                <img src={profile} alt="profile" className='w-[330px] md:block hidden h-full object-cover' />
                <div className='bg-[#1c1c1c] p-8 relative flex flex-col gap-3'>
                    <p>"The range of products available is extensive, and the detailed product descriptions and specifications provided helped me make an informed decision. The checkout process was smooth and secure, giving me confidence in my purchase. The packaging was secure, and the product arrived in perfect condition. I appreciate the attention to detail and commitment to customer satisfaction."</p>
                    <div className='flex gap-1'>
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                    <h2 className='font-semibold text-2xl'>Jothan Don</h2>
                    <p className='text-sm text-primary-blue'>Customer Of Our Shop</p>
                    <img src={icon} alt="icon" className='absolute bottom-10 right-10 hidden md:block' />
                </div>
            </div>
        </div>
    )
}

export default Feedback