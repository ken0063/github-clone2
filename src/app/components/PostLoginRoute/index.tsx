import React, { ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PostLoginRoute = ({
  component: Component,
  ...rest
}: any): JSX.Element => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('api-key') ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

export default PostLoginRoute;
