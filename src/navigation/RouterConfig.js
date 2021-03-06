/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Form from '../pages/Form';
import Success from '../pages/Success';
import QueryCode from '../pages/QueryCode';
import ApplicationDetails from '../pages/ApplicationDetails';
import Login from '../pages/Login';
import ApplicationList from '../pages/ApplicationList';
import AdminApplicationDetail from '../pages/AdminApplicationDetails';
import PrivateRoute from './PrivateRoute';

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
        <Route exact path="/basvuru/:appId" component={ApplicationDetails} />
        <Route exact path="/admin" component={Login} />
        <PrivateRoute exact path="/admin/basvuru-listesi" component={ApplicationList} />
        <PrivateRoute exact path="/admin/basvuru/:appId" component={AdminApplicationDetail} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
