import React from 'react';
import Leftbar from '../../Components/Leftbar/Leftbar';
import Assistantnamewindow from '../../Components/Assistantnamewindow/Assistantnamewindow'


const Assistantname = () => {
    return(
        <React.Fragment>
            <main className='leftbar-main-area'>
                <Leftbar/>
                <Assistantnamewindow/>
            </main>

        </React.Fragment>
    )
}


export default Assistantname;