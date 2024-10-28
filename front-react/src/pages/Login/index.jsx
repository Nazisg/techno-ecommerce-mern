import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useLoginUserMutation } from '../../redux/services/authSlice';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../redux/services/loginSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize navigate
    const [loginUser, { isLoading, error }] = useLoginUserMutation();

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
        .required('Required'),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const result = await loginUser(values).unwrap();
            console.log('Login successful:', result);

            const { user, accessToken } = result; // Adjust according to your API response structure
            dispatch(setLogin({ user, accessToken })); // Dispatch action to store user data and token

            // Redirect to the home page after successful login
            navigate('/'); // Redirect to /home
        } catch (err) {
            console.error('Login failed:', err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <PageHeader route={'/login'} title={'Account'} />
            <div className='flex justify-center flex-col lg:flex-row gap-3 px-4 py-6 lg:py-10 items-center lg:items-start'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className='bg-[#262626] w-full max-w-[600px] p-8 flex flex-col gap-4'>
                            <h3 className='text-[22px] md:text-[36px]'>I already have an account</h3>
                            <p className='text-[14px]'>Hello again, please log in with your email address and password.</p>

                            <label className='flex flex-col gap-3'>
                                Email:
                                <Field
                                    type="email"
                                    name="email"
                                    className='border py-2 px-3 md:py-3 md:px-4 bg-transparent'
                                    placeholder='email'
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500" />
                            </label>

                            <label className='flex flex-col gap-3'>
                                Password:
                                <Field
                                    type="password"
                                    name="password"
                                    className='border py-2 px-3 md:py-3 md:px-4 bg-transparent'
                                    placeholder='password'
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500" />
                            </label>

                            <button
                                type="submit"
                                className='bg-primary-blue py-2 md:py-3 font-semibold text-lg'
                                disabled={isSubmitting || isLoading}
                            >
                                {isSubmitting || isLoading ? 'Logging in...' : 'Log in'}
                            </button>

                            {error && <p className="text-red-500">Login failed. Please try again.</p>}
                        </Form>
                    )}
                </Formik>
                <div className='bg-[#262626] p-8 flex flex-col w-full max-w-[600px] gap-4'>
                    <h3 className='text-[22px] md:text-[36px]'>Not a member yet?</h3>
                    <p className='text-[14px]'>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
                    <Link to="/register">
                        <button className='bg-primary-blue py-2 md:py-3 w-full font-semibold text-lg'>Create Account</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Login;
