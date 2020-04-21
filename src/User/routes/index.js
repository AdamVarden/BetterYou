import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Auth from './auth';
import LogIn from './login';
import Register from './register';

export default ()=> (
    <Router>
        <Switch>
            <Route exact path="/login" render={props => <LogIn {...props} />}/>
            <Route exact path="/register" render={props => <Register {...props} />}/>
            <Route exact path="/auth" render={props => <Auth {...props} />}/>
        </Switch>
    </Router>
);

