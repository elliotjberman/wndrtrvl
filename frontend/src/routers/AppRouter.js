import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Home from '../components/Home.jsx';

const AppRouter = () => (
  <BrowserRouter>
  <div>
  <Switch>
  <Route path="/" component={Home} exact={true} />
  </Switch>
  </div>
  </BrowserRouter>
);

export default AppRouter;
