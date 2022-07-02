import React from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from '../views/Login/index';
import Main from '../views/Main/index';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/dashboard'exact component={Main}/>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes