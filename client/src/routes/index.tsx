import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Report from '../pages/Report';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Report} />
  </Switch>
);

export default Routes;
