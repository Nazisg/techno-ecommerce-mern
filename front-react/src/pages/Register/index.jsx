import React from 'react'
import PageHeader from '../../components/PageHeader'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <PageHeader route={'/register'} title={'Create Account'} />
            <div className='flex justify-center gap-3 py-6 lg:py-10 items-start px-4'>
                <form action="#" className='bg-[#262626] w-full max-w-[700px] p-8 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <h3 className='text-[22px] md:text-[36px]'>Create Account</h3>
                        <p className='text-[14px]'>Please Register using account detail below.</p>
                    </div>
                    <label className='flex flex-col gap-3'>
                        Username:
                        <input type="text" name='username' className='border py-2 px-3 md:py-3 md:px-4 bg-transparent' placeholder='username' />
                    </label>
                    <label className='flex flex-col gap-3'>
                        Email:
                        <input type="email" name='email' className='border py-2 px-3 md:py-3 md:px-4 bg-transparent' placeholder='email' />
                    </label>
                    <label className='flex flex-col gap-3'>
                        Password:
                        <input type="password" name='password' className='border py-2 px-3 md:py-3 md:px-4 bg-transparent' placeholder='password' />
                    </label>
                    <button className='bg-primary-blue py-2 md:py-3 font-semibold text-lg'>Create</button>
                </form>
            </div>
        </>
    )
}

export default Register