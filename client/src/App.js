import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routes from './routes';
import Home from './components/pages/home';

const App = props => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Routes />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
