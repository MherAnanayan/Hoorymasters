import React from 'react';
import Logowhite from './logo';
import Logodone from '../../resources/icons/Done';
import { Link } from "react-router-dom";
import './Leftbar.scss';

const Leftbar = () => {
    return (
        <React.Fragment>

            <div className='leftbar-area'>
                <div>
                    <Logowhite />
                    <div className='underlogoline'></div>
                    <ul className='leftbar-steps'>
                        <li className='leftbar-step-activ'>
                            <Logodone className='step-chackbox-activ'></Logodone>
                            <Link to='/assistantname'><span className='leftbarlink'>Name your assistant</span></Link>
                        </li>
                        
                             <li className='leftbar-step-activ'>
                            <span className='step-chackbox-activ'></span>
                            <Link to='/assistantstyle'><span className='leftbarlink'>Select styles</span></Link>
                            </li>
                        
                        <li className='leftbar-step'>
                            <span className='step-chackbox'></span>
                            <span>Create your account</span>
                        </li>

                    </ul>
                </div>

            </div>

        </React.Fragment>

    )
}

export default Leftbar;