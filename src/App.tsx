import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  LoginPage,
  PageNotFound,
  RepoPage,
  SearchPage,
  UserPage,
} from './app/pages';
import { Header } from './app/components';
import 'react-toastify/dist/ReactToastify.css';
import './_App.scss';
import PreLoginRoute from './app/components/PreLoginRoute/index';
import PostLoginRoute from './app/components/PostLoginRoute';

const App = (): JSX.Element => {
  // // const logo =
  // //   history.location.pathname === '/results/repos' ||
  // //   history.location.pathname === '/results/users';
  const token = localStorage.getItem('api-key');
  console.log(token);

  return (
    <>
      <div className="App">
        <ToastContainer />
        <Header hasProps={true} />
        <Switch>
          <PreLoginRoute exact path="/" component={LoginPage} />
          <PostLoginRoute exact path="/home" component={SearchPage} />
          <PostLoginRoute exact path="/results/repos" component={RepoPage} />
          <PostLoginRoute exact path="/results/users" component={UserPage} />
          <Route exact path="" component={PageNotFound} />
        </Switch>
      </div>
    </>
  );
};

export default App;
