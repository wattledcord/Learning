import React from 'react';
import { Route,BrowserRouter,Switch } from 'react-router-dom';
import App from './../Pages/App';

export default()=>(
    <BrowserRouter>
    <Switch>
        <Route path='/' exact render={props=><App {...props}/>}/>
    </Switch>
    </BrowserRouter>
)