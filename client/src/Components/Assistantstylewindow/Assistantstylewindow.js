import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { connect } from "react-redux";
import Assistantcolors from './constants';
import { addAssistantStyleData } from '../../Redux/Actions/RegistrApplay'
import './Assistantstylewindow.scss';



const Assistantstylewindow = (props) => {
    const [style, setStyle] = useState(
       { id: 0,
        selectedmale: false,
        selectedfamale: true,})
        

    const history = useHistory()
    const dispatch = useDispatch()

    const toogleImgMale = (props) => {
        
       
            setStyle({ 
                
                id:style.id,
                selectedmale:false,
                selectedfamale: true})
        
    }
   const toogleImgFamale = (props) => {
        
        
            setStyle({ 
                id: style.id,
                selectedfamale:false,
                selectedmale: true
             })
        
    }

 const isActive = (props) => {
        return (
            setStyle({
                id:props,
                selectedfamale: style.selectedfamale,
                selectedmale: style.selectedmale,
            })
        )
    }

  const  fNext = () => {
       
        console.log(style)
      dispatch(addAssistantStyleData(style));
        history.push('/assistantaccount')
    }
    
    
        
        return (
            <React.Fragment>
                <section className='Assistantwindow-area'>
                    <section className='Assistantstyle-area'>
                        <h3 className='Assistantname-text'>{`Select ${props.name} icon`}</h3>
                        <div className='Assistant-icon-area'>
                                    <div className='svg-style' >
                                <div onClick={() => toogleImgMale()}>
                                    {style.selectedmale  
                                    ? Assistantcolors[style.id].Male 
                                    : Assistantcolors[style.id].MaleSelected}</div>
                                <div onClick={() => toogleImgFamale()}>
                                    {style.selectedfamale  
                                    ? Assistantcolors[style.id].Female 
                                    : Assistantcolors[style.id].FemaleSelected}</div>
                                    </div>
                        </div>
                        <h3 className='Assistant-color-text'>Select color scheme  </h3>
                        <div className='Assistant-colors-area'>
                            {Assistantcolors && Assistantcolors.map((props,id) => {
                                return (
                                    <div key={props.id}>
                                        <div className='Assistant-color' 
                                        onClick={(props)=>isActive(id)} 
                                        style={{borderColor:id===style.id?props.styleborder:''}} >
                                            <div className='Assistant-color-in' style={props.stylebackground}>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                            <button onClick={fNext} className='Assnw-next-btn'>NEXT</button>
                    </section>



                </section>

            </React.Fragment>
        )
    }
    


const mapStateToProps = (state) => ({
    name: state.Registrapplay.assistantNameDate,
});

const mapDispatchToProps = {
    addAssistantStyleData
};

export default connect(mapStateToProps,mapDispatchToProps)(Assistantstylewindow);