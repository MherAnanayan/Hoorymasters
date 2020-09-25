import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import useHttp from '../../Hooks/http.hooks';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {addRegistrationData} from '../../Redux/Actions/RegistrApplay'
import Googleicon from '../../resources/icons/GoogleIcon';
import Passwordvisibility from '../../resources/icons/PasswordVisibility';
import './Assistantaccountwindow.scss';

const ValidateSchema = Yup
    .object()
    .shape({
        email: Yup
            .string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup
            .string()
            .min(2, 'Password must be at least 6 characters')
            .required('Password is required'),
        firstname: Yup
            .string()
            .min(2, 'Firstname must be at least 2 characters')
            .required('Firstname is required'),
        lastname: Yup
            .string()
            .min(2, 'Lastname must be at least 2 characters')
            .required('Lastname is required')
    });

const Assistantaccountwindow = (props) => {
const [user,setUser] = useState({
    name:props.name,
    style:props.style,
    userinfo:props.userinfo})
    const { loading, request } = useHttp()
    const [type, setType] = useState('password')
    const changetype = () => {
        type === 'password'
            ? setType('text')
            : setType('password')

    }
    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...user })
           
        } catch (e) { }
    }
    let history = useHistory();
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={{
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }}
            validationSchema={ValidateSchema}
            onSubmit={(values) => {
            const formData = {
                ...values
            }
            console.log(formData)
            dispatch(addRegistrationData(formData));
                history.push('/Assistantdone')
        }}>
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            }) => (
                <div className='registration-full-area'>

                    <section className='registr-area'>
                        <p className='sign-text'>Create your account</p>
                        <div className='google-sign-area'>
                            <Googleicon viewBox='0 0 25 25'/>
                            sign in with google</div>
                        <div className='separator'>
                            <span className='separator-text'>or</span>
                        </div>
                            <form onSubmit={handleSubmit} className='signin-form'>
                            <section className='registr-name-area'>
                                <div className='registr-name'>
                                    <input
                                        className='signin-input'
                                        placeholder='Firstame'
                                        type='firstname'
                                        id='firstname'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.firstname}></input>
                                </div>
                                <div className='registr-name'>
                                    <input
                                        className='signin-input'
                                        placeholder='LastName'
                                        type='lastname'
                                        id='lastname'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastname}></input>
                                </div>
                            </section>
                            <section className='input-group'>
                                <div className='input-wrapper'>
                                    <input 
                                    className='signin-input' 
                                    id='email' 
                                    placeholder='Email'
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email} 
                                    maxLength='50'></input>
                                </div>
                            </section>
                            <section className='input-group'>
                                <div className='input-wrapper'>
                                    <input
                                        className='signin-input'
                                        type={type}
                                        placeholder='Password'
                                        maxLength='50'
                                        id='password'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}></input>
                                    <Passwordvisibility onClick={changetype}/>
                                    
                                </div>
                                    <p className='error-msg-signin'>{
                                    (errors.firstname && touched.firstname && errors.firstname) ||
                                    (errors.lastname && touched.lastname && errors.lastname) ||
                                    (errors.email && touched.email && errors.email) || 
                                    (errors.password && touched.password && errors.password)}
                                    </p>
                                <button onClick={registerHandler} type='submit' className='signin-btn'>Create account</button>
                            </section>
                        </form>
                    </section>

                </div>
            )}

        </Formik>
    )
}
const mapStateToProps = (state) => ({
    name: state.Registrapplay.assistantNameDate,
    style: state.Registrapplay.assistantStyleDate,
    userinfo: state.Registrapplay.registrData
});

const mapDispatchToProps = {
    addRegistrationData
};

export default Assistantaccountwindow;