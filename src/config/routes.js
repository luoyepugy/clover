'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import Index from '../views/index.js';
import List from '../views/list.js';
import Detail from '../views/detail.js'


//最终渲染
ReactDom.render((
    <Router history={hashHistory}>
        <Route path='/' component={Index}></Route>
        <Route path='/list' component={List} />
        <Route path='/detail' component={Detail} />
    </Router>
), document.getElementById('app'));
