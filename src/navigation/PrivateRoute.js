/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';

function PrivateRoute({ component: Component }) {
  const location = useLocation();
  const isLogin = true;
  return (
    <Route>
      {isLogin === true ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: '/admin', state: { from: location } }} />
      )}
    </Route>
  );
}

export default PrivateRoute;
