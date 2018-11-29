import React from 'react';
import { Route,BrowserRouter,Switch } from 'react-router-dom';
import App from './../Pages/App';
import ViewEmployee from './../Pages/ViewEmployee';

export default()=>(
    <BrowserRouter>
    <Switch>
        <Route path='/' exact render={props=><App {...props}/>}/>
        <Route path='/e' exact render={props=><ViewEmployee {...props}/>}/>
    </Switch>
    </BrowserRouter>
)