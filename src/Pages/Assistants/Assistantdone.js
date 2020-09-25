import React from 'react';
import Leftbardone from '../../Components/Leftbar/Leftbardone';
import Assistantdonewindow from '../../Components/Assistantdone/Assistantdonewindow';


const Assistantdone = () => {
    return (
        <React.Fragment>
            <main className='leftbar-main-area'>
                <Leftbardone />
                <Assistantdonewindow />
            </main>

        </React.Fragment>
    )
}


export default Assistantdone;