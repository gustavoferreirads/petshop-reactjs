import React from 'react'
import Main from '../components/Main';

import HomeView from '../components/views/Home';
import RegisterView from '../components/views/Register';

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/home" />
            <Route path="home" component={HomeView}> </Route>
            <Route path="register" component={RegisterView}> </Route>
        </Route>
    </Router>

);