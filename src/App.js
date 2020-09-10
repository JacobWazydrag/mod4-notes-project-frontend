import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/layout/Layout';
import Home from './containers/Home/Home';
import Notes from './containers/Notes/Notes';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/notes" component={Notes} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default App;
