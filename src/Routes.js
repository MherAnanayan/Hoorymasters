import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Assistantname from './Pages/Assistants/Assistantname';
import Assistantstyle from './Pages/Assistants/Asistantstyle';
import Assistantaccount from './Pages/Assistants/Assistantaccount';
import Assistantdone from './Pages/Assistants/Assistantdone';
import Dashboard from './Pages/Dashboard/Dashboard';



const Routes = () => {
    return (
        <BrowserRouter>

            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/assistantname" exact component={Assistantname} />
                <Route path="/assistantstyle" exact component={Assistantstyle} />
                <Route path="/assistantaccount" exact component={Assistantaccount} />
                <Route path="/assistantdone" exact component={Assistantdone} />
                <Route path="/Dashboard" exact component={Dashboard} />
            </Switch>

        </BrowserRouter>
    )
}

export default Routes;