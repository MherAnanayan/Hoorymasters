import React from 'react';
import Routes from './Routes';
import {Provider} from 'react-redux';
import Store from './Redux/Store';
import './App.scss';

function App() {
    return (
        <Provider store={Store}>
            <div className="App">
                <Routes/>
            </div>
        </Provider>

    );
}

export default App;
