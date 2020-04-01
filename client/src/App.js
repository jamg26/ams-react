import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layouts from './layout';

// pages
import Home from './components/pages/home';

const App = props => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/:navigation' component={Layouts} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
