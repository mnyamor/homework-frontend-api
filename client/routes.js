import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import Login from './components/Login/Login';
import Document from './components/Documents/Documents';
import requireAuth from './utils/requireAuth';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="/login" component={Login} /> 
    <Route path="/documents" component={requireAuth(Document)}/> 
  </Route>
)