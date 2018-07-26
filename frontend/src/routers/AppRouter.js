import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home.jsx';
import Dashboard from '../components/Dashboard.jsx';

const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </div>
  </BrowserRouter>
);

export default AppRouter;
