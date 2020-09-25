import React from 'react';
import Leftbaraccount from '../../Components/Leftbar/leftbaraccount';
import Assistantaccountwindow from '../../Components/Assistancaccount/Assistantaccountwindow';


const Assistantaccount = () => {
    return (
        <React.Fragment>
            <main className='leftbar-main-area'>
                <Leftbaraccount />
                <Assistantaccountwindow />
            </main>

        </React.Fragment>
    )
}


export default Assistantaccount;