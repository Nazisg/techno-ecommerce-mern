import React from 'react';
import PageHeader from '../../components/PageHeader';
import { useRegisterUserMutation } from '../../redux/services/authSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [registerUser, { isLoading, error }] = useRegisterUserMutation();
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const initialValues = {
        username: '',
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const result = await registerUser(values).unwrap();
            console.log('Registration successful:', result);
            // Redirect to the login page after successful registration
            navigate('/login');
        } catch (err) {
            console.error('Registration failed:', err);
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <>
            <PageHeader route={'/register'} title={'Create Account'} />
            <div className='flex justify-center gap-3 py-6 lg:py-10 items-start px-4'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className='bg-[#262626] w-full max-w-[700px] p-8 flex flex-col gap-4'>
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <h3 className='text-[22px] md:text-[36px]'>Create Account</h3>
                                <p className='text-[14px]'>Please register using account details below.</p>
                            </div>

                            <label className='flex flex-col gap-3'>
                                Username:
                                <Field
                                    type="text"
                                    name="username"
                                    className='border py-2 px-3 md:py-3 md:px-4 bg-transparent'
                                    placeholder='Username'
                                />
                                <ErrorMessage name="username" component="div" className="text-red-500" />
                            </label>

                            <label className='flex flex-col gap-3'>
                                Email:
                                <Field
                                    type="email"
                                    name="email"
                                    className='border py-2 px-3 md:py-3 md:px-4 bg-transparent'
                                    placeholder='Email'
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500" />
                            </label>

                            <label className='flex flex-col gap-3'>
                                Password:
                                <Field
                                    type="password"
                                    name="password"
                                    className='border py-2 px-3 md:py-3 md:px-4 bg-transparent'
                                    placeholder='Password'
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500" />
                            </label>

                            <button
                                type="submit"
                                className='bg-primary-blue py-2 md:py-3 font-semibold text-lg'
                                disabled={isSubmitting || isLoading}
                            >
                                {isSubmitting || isLoading ? 'Creating Account...' : 'Create'}
                            </button>

                            {error && <p className="text-red-500">Registration failed. Please try again.</p>}
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default Register;
