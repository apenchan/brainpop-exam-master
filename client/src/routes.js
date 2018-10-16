import React from 'react';
import MainApp from './';
import LoginSignUp from './LoginSignUp'
import Page404 from './common/404';
import {Switch, Route, Redirect} from 'react-router-dom';

const Routes = () => (
    <div className="container">
        <Switch>
            <Route name="home" exact path='/' component={MainApp} />
            <Route name="login" component={LoginSignUp} />
            <Route path="*" component={Page404}/>
        </Switch>
    </div>
)

export default Routes;
