/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Form from '../pages/Form';
import Success from '../pages/Success';
import QueryCode from '../pages/QueryCode';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import ApplicationList from '../pages/ApplicationList';

function RouterConfig() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/basvuru-olustur" />
        </Route>
        <Route exact path="/basvuru-olustur" component={Form} />
        <Route exact path="/basvuru-basarili" component={Success} />
        <Route exact path="/basvuru-sorgula" component={QueryCode} />
        <Route exact path="/admin" component={Login} />
        <PrivateRoute exact path="/admin/basvuru-listesi" component={ApplicationList} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
