import React, {useState} from 'react';
import Hoorygrey from '../../resources/icons/HooryIconGrey';
import {Link} from "react-router-dom";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import {useDispatch} from 'react-redux';
import {addAssistantNameData} from '../../Redux/Actions/RegistrApplay'
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import './Assistantnamewindow.scss';

const ValidateSchema = Yup
    .object()
    .shape({
        name: Yup
            .string()
            .required('Name is required')
            
    });
const Assistantnamewindow = (name) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [asName, setAsName] = useState(name);
    
   
    return ( 
        <Formik
            initialValues={{
            name: ''
        }}
            validationSchema={ValidateSchema}
            onSubmit={(values) => {
            const formData = {
                ...values
            }
            console.log(formData)
            dispatch(addAssistantNameData(formData));
                history.push("/assistantstyle");
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
                <div className='allwidth'>
                    <section className='Assistantwindow-area'>
                        <form onSubmit={handleSubmit} className='Assnw-form-area'>
                            <div className='Assnw-icon-area'>
                                <Hoorygrey/>
                            </div>
                            <h3 className='Assnw-text-area'>Name your assistant</h3>
                            <section className='Assnw-textfield-section'>
                                <div className='Assnw-textfield-area'>
                                    <input
                                        id='name'
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        className='Assnw-textfield'
                                        placeholder='Your assistants name'/> 
                                        
                                </div>
                                    <p className='error-msg-area'>
                                        {errors.name && touched.name && errors.name}</p> 
                            </section>
                            
                                <button  type="submit" className='Assnw-btn'>START</button>
                            
                        </form>
                    </section>
                </div>

            )}
        </Formik>
    )
}

const mapStateToProps = (state) => ({
    name: state.assistantNameDate,
    
});

const mapDispatchToProps = {
    addAssistantNameData,
};


export default connect(mapStateToProps,mapDispatchToProps)(Assistantnamewindow);