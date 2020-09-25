import React from 'react';
import Logowhite from './logo';
import Logodone from '../../resources/icons/Done';
import { Link } from "react-router-dom";
import './Leftbar.scss';

const Leftbardone = () => {
    return (
        <React.Fragment>

            <div className='leftbar-area'>
                <div>
                    <Link to='/'><Logowhite /></Link>

                    <div className='underlogoline'></div>
                    <ul className='leftbar-steps'>
                        <li className='leftbar-step-activ'>
                            <Logodone className='step-chackbox-activ'></Logodone>
                            <span className='leftbarlink'>Name your assistant</span>
                        </li>
                        <li className='leftbar-step-activ'>
                            <Logodone className='step-chackbox-activ'></Logodone>
                            <span className='leftbarlink'>Select styles</span>
                        </li>
                        <li className='leftbar-step-activ'>
                            <Logodone className='step-chackbox-activ'></Logodone>
                            <span className='leftbarlink'>Create your account</span>
                        </li>

                    </ul>
                </div>

            </div>

        </React.Fragment>

    )
}

export default Leftbardone;