/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PrivateRoute({ component: Component }) {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  return (
    <Route>
      {isAuthenticated === true ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: '/admin', state: { from: location } }} />
      )}
    </Route>
  );
}

export default PrivateRoute;
