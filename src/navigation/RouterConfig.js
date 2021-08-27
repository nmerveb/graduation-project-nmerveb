import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Form from '../pages/Form';
import Success from '../pages/Success';
import QueryCode from '../pages/QueryCode';
import Login from '../pages/Login';
import ApplicationList from '../pages/ApplicationList';
import PrivateRoute from './PrivateRoute';

const RouterConfig = () => {
  <Switch>
    <Route exact path="/">
      <Redirect to="/basvuru-olustur" />
    </Route>
    <Route path="/basvuru-olustur" component={Form} />
    <Route path="/basvuru-basarili" component={Success} />
    <Route path="/basvuru-sorgula" component={QueryCode} />
    <Route path="/admin" component={Login} />
    <PrivateRoute path="admin/basvuru-listesi" component={ApplicationList} />
  </Switch>;
};

export default RouterConfig;
