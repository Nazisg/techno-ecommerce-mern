import React from 'react'
import { Link } from 'react-router-dom'

const PageHeader = ({ route, title }) => {
    return (
        <div className='bg-bgImg w-full h-44 flex justify-center items-center'>
            <div className='flex flex-col gap-3 items-center'>
                <div className='flex gap-3 font-semibold'>
                    <Link to="/"><p>Home</p></Link>
                    <p>/</p>
                    <Link to={route}><p>{title}</p></Link>
                </div>
                <h2 className='text-[30px] md:text-[40px] font-bold'>{title}</h2>
            </div>
        </div>
    )
}

export default PageHeader