import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children, ...rest }) => {
  const isUser = true;
  return (
    <Route
      {...rest}
      render={() => {
        return isUser ? children : <Redirect to="/login" />;
      }}
    >
      private route component
    </Route>
  );
};
export default PrivateRoute;
