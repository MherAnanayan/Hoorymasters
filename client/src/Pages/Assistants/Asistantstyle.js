
import React from 'react';
import Leftbarstepstyle from '../../Components/Leftbar/Leftbarstepstyle';
import Assistantstylewindow from '../../Components/Assistantstylewindow/Assistantstylewindow';


const Assistantstyle = () => {
    return (
        <React.Fragment>
            <main className='leftbar-main-area'>
                <Leftbarstepstyle />
                <Assistantstylewindow />
            </main>

        </React.Fragment>
    )
}


export default Assistantstyle;