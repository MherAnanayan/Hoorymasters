import React , {useState} from 'react';
import {useDispatch} from 'react-redux';
import useHttp from '../../Hooks/http.hooks';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Hoorylogo from '../../resources/icons/HooryLogo';
import Googleicon from '../../resources/icons/GoogleIcon';
import Passwordvisibility from '../../resources/icons/PasswordVisibility';
import {Link} from "react-router-dom";
import {addloginData} from '../../Redux/Actions/RegistrApplay'
import './Home.scss';

const ValidateSchema = Yup
    .object()
    .shape({
        email: Yup
            .string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup
            .string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required')
    });

const Home = () => {
    
    const [type, setType] = useState('password')
    const changetype = () => {
        type === 'password' ? setType('text') : setType('password')
            
    }
   
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={{
            email: '',
            password: '',
        }}
            validationSchema={ValidateSchema}
            onSubmit={(values) => {
            const formData = {
                ...values
                 
            }
                console.log(formData)
               
            dispatch(addloginData(formData));
        }}>
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                
            }) => (
                
                    <div className='home-area'>
                        <div className='logo-area'>
                            <Hoorylogo viewBox="0 0 250 73"/>
                        </div>
                        <section className='login-area'>
                            <p className='sign-text'>Sign in to your account</p>
                            <div className='google-sign-area'>
                                <Googleicon viewBox='0 0 25 25'/>
                                sign in with google</div>
                            <div className='separator'>
                                <span className='separator-text'>or</span>
                            </div>
                            <form onSubmit={handleSubmit} className='signin-form'>
                                <section className='input-group'>
                                    <div className='input-wrapper'>
                                        <input
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            className='signin-input'
                                            placeholder='Email'/>
                                            
                                    </div>
                                    
                                </section>
                                <section className='input-group'>
                                    <div className='input-wrapper'>
                                        <input
                                            className='signin-input'
                                            placeholder='Password'
                                                type={type}
                                                name="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                                />
                                            
                                        <Passwordvisibility onClick={changetype}/>
                                    </div>
                                    <p className='error-msg-signin'>{ 
                                    (errors.email && touched.email && errors.email) || 
                                    (errors.password && touched.password && errors.password)}
                                    </p>
                                    <button  type="submit"  className='signin-btn'>Sign in</button>
                                </section>
                            </form>
                            <div className='signin-info-area'>
                                <div className='signin-info'>Don’t have an account?
                                    <Link to='/assistantname'>Sign Up</Link>
                                </div>
                                <div className='signin-info'>
                                    <a href='/'>Forgot password</a>
                                </div>
                            </div>
                        </section>

                    </div>
               
            )}

        </Formik>

    )
}

export default Home;