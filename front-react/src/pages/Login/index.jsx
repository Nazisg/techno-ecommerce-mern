import React from 'react'
import PageHeader from '../../components/PageHeader'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <PageHeader route={'/login'} title={'Account'} />
            <div className='flex justify-center flex-col lg:flex-row gap-3 px-4 py-6 lg:py-10 items-center lg:items-start'>
                <form action="#" className='bg-[#262626] w-full max-w-[600px] p-8 flex flex-col gap-4'>
                    <h3 className='text-[22px] md:text-[36px]'>I already have an account</h3>
                    <p className='text-[14px]'>Hello again, please log in with your email address and password.</p>
                    <label className='flex flex-col gap-3'>
                        Username:
                        <input type="text" name='username' className='border py-2 px-3 md:py-3 md:px-4 bg-transparent' placeholder='username' />
                    </label>
                    <label className='flex flex-col gap-3'>
                        Password:
                        <input type="password" name='password' className='border py-2 px-3 md:py-3 md:px-4 bg-transparent' placeholder='password' />
                    </label>
                    <button className='bg-primary-blue py-2 md:py-3 font-semibold text-lg'>Log in</button>
                </form>
                <div className='bg-[#262626] p-8 flex flex-col w-full max-w-[600px] gap-4'>
                    <h3 className='text-[22px] md:text-[36px]'>Not a member yet?</h3>
                    <p className='text-[14px]'>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
                    <Link to="/register"><button className='bg-primary-blue py-2 md:py-3 w-full font-semibold text-lg'>Create Account</button></Link>
                </div>
            </div>
        </>
    )
}

export default Login