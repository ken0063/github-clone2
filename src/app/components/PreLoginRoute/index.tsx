import React, { ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PreLoginRoute = ({ component: Component, ...rest }: any): JSX.Element => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('api-key') == null ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
      )
    }
  />
);

export default PreLoginRoute;
