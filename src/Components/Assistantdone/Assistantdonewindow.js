import React, {useState} from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import './Assistantdonewindow.scss';
import Redlogo, { FemaleSelected1 } from '../../resources/icons/';
import Assistantcolors from '../Assistantstylewindow/constants'
import * as things from '../../resources/icons'
const Assistantdonewindow = (props)  => {
    const [gender, setGender] = useState(props.gender)
    const history = useHistory();
    const handleButtonClick = () => {
        
            history.push("/dashboard");
        
    };

    console.log(props)
    
return (
<section className='Assistant-done-area'>
    <section className='Assistant-done'>
            {(gender?Assistantcolors[props.id||0].Female : Assistantcolors[props.id||0].Male) ||  'X'}
             
            <h3 className='Fantastico-area'>Fantastico 🎉</h3>
            <p className='txt-area'>You have successfully setup the Hoory widget on your website!<br/>
Proceed to the Admin Dashboard to start training <strong>{props.firstname}</strong></p>
            <button 
            onClick={handleButtonClick} 
            className='submit-btn'>
                Go to Admin Dashboard</button>
    </section>
</section>
)
}

const mapStateToProps = (state) => ({
    firstname: state.Registrapplay.registrData.firstname,
    id: state.Registrapplay.assistantStyleDate.id,
    gender: state.Registrapplay.assistantStyleDate.selectedmale,
});

const mapDispatchToProps = {  };

export default connect(mapStateToProps, mapDispatchToProps)(Assistantdonewindow);