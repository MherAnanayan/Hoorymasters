import React from 'react';
import Logowhite from './logo';
import { Link } from "react-router-dom";
import './Leftbar.scss';

const Leftbar = () => {
    return (
        <React.Fragment>

            <div className='leftbar-area'>
                <div>
                    <Logowhite/>
                    <div className='underlogoline'></div>
                    <ul className='leftbar-steps'>
                        <li className='leftbar-step-activ'>
                            <span className='step-chackbox-activ'></span>
                            <span className='leftbarlink'>Name your assistant</span>
                        </li>
                        <li className='leftbar-step'>
                            <span className='step-chackbox'></span>
                            <span>Select styles</span>
                        </li>
                        <li className='leftbar-step'>
                            <span className='step-chackbox'></span>
                            <span >Create your account</span>
                        </li>
                        
                    </ul>
                </div>

            </div>

        </React.Fragment>

    )
}

export default Leftbar;