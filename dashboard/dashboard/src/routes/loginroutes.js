import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from '../components/dashboard';

const { Login } = require("../components/login");
const { Signup } = require("../components/signup");

const LoginRoutes = () => (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />

    </Switch>
);

export default LoginRoutes;