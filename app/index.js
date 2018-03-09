import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';

import '../public/vendor/bootstrap-grid.css';
import './../public/styles/style.css'

ReactDOM.render(
<Router history={hashHistory}>{routes}</Router>,
    document.getElementById('root')
);